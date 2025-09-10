// src/components/SmartTable.tsx
import * as React from 'react';

type Row = Record<string, unknown>;

export default function SmartTable({
  rows,
  pageSizeDefault = 10,
}: {
  rows: Row[];
  pageSizeDefault?: number;
}) {
  // ✅ DO NOT reference any `percentages` variable here.
  // Use only the `rows` prop passed in by MDX.
  const [page, setPage] = React.useState(1);
  const pageSize = pageSizeDefault;

  const total = rows?.length ?? 0;
  const start = (page - 1) * pageSize;
  const pageRows = rows?.slice(start, start + pageSize) ?? [];

  if (!rows || rows.length === 0) return <div>No data</div>;

  const columns = Object.keys(pageRows[0] ?? {});
  return (
    <div>
      <table>
        <thead>
          <tr>{columns.map((c) => <th key={c}>{c}</th>)}</tr>
        </thead>
        <tbody>
          {pageRows.map((r, i) => (
            <tr key={i}>
              {columns.map((c) => <td key={c}>{String(r[c] ?? '')}</td>)}
            </tr>
          ))}
        </tbody>
      </table>

      {/* super-light pager */}
      <div style={{marginTop: 12}}>
        <button onClick={() => setPage((p) => Math.max(1, p - 1))}>Prev</button>
        <span style={{margin: '0 8px'}}>
          Page {page} of {Math.ceil(total / pageSize)}
        </span>
        <button onClick={() => setPage((p) => (start + pageSize < total ? p + 1 : p))}>
          Next
        </button>
      </div>
    </div>
  );
}



// import * as React from 'react';

// type Row = Record<string, unknown>;

// export default function SmartTable({ rows }: { rows: Row[] }) {
//   const [sortKey, setSortKey] = React.useState<string | null>(null);
//   const [sortAsc, setSortAsc] = React.useState(true);

//   if (!rows || rows.length === 0) return <div>No data</div>;

//   const columns = Object.keys(rows[0]);

//   // sort rows
//   let sorted = [...rows];
//   if (sortKey) {
//     sorted.sort((a, b) => {
//       const valA = a[sortKey];
//       const valB = b[sortKey];
//       if (valA === valB) return 0;
//       if (valA == null) return sortAsc ? -1 : 1;
//       if (valB == null) return sortAsc ? 1 : -1;
//       return sortAsc
//         ? String(valA).localeCompare(String(valB))
//         : String(valB).localeCompare(String(valA));
//     });
//   }

//   const handleSort = (col: string) => {
//     if (sortKey === col) {
//       setSortAsc(!sortAsc);
//     } else {
//       setSortKey(col);
//       setSortAsc(true);
//     }
//   };

//   return (
//     <div style={{ maxHeight: 400, overflowY: "auto" }}>
//       <table>
//         <thead>
//           <tr>
//             {columns.map((c) => (
//               <th
//                 key={c}
//                 onClick={() => handleSort(c)}
//                 style={{ cursor: "pointer" }}
//               >
//                 {c}
//                 {sortKey === c ? (sortAsc ? " ▲" : " ▼") : ""}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {sorted.map((r, i) => (
//             <tr key={i}>
//               {columns.map((c) => (
//                 <td key={c}>{String(r[c] ?? "")}</td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }


/* Better Scrolling option */

// import * as React from 'react';
// import { useReactTable, getCoreRowModel, getSortedRowModel, flexRender } from '@tanstack/react-table';

// export default function SmartTable({ rows }: { rows: any[] }) {
//   const columns = React.useMemo(
//     () =>
//       Object.keys(rows[0] ?? {}).map((k) => ({
//         accessorKey: k,
//         header: k,
//       })),
//     [rows]
//   );

//   const [sorting, setSorting] = React.useState([]);

//   const table = useReactTable({
//     data: rows,
//     columns,
//     state: { sorting },
//     onSortingChange: setSorting,
//     getCoreRowModel: getCoreRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//   });

//   return (
//     <div style={{ maxHeight: 400, overflow: 'auto' }}>
//       <table>
//         <thead>
//           {table.getHeaderGroups().map((hg) => (
//             <tr key={hg.id}>
//               {hg.headers.map((header) => (
//                 <th
//                   key={header.id}
//                   onClick={header.column.getToggleSortingHandler()}
//                   style={{ cursor: 'pointer' }}
//                 >
//                   {flexRender(header.column.columnDef.header, header.getContext())}
//                   {{
//                     asc: ' ▲',
//                     desc: ' ▼',
//                   }[header.column.getIsSorted() as string] ?? ''}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody>
//           {table.getRowModel().rows.map((row) => (
//             <tr key={row.id}>
//               {row.getVisibleCells().map((cell) => (
//                 <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

