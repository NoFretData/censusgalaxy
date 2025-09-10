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
