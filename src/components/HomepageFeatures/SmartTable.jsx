import React, { useState } from 'react';
// SmartTable.jsx (lives in src/components/HomepageFeatures)
import data from '../../data/percentages.json'; // <- up 2 levels to src/data
import styles from './SmartTable.module.css';

export default function SmartTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = percentages.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(percentages.length / rowsPerPage);

  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Column Name</th>
            <th>Denominator</th>
            <th>Data Type</th>
            <th>Example</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.map((row, idx) => (
            <tr key={idx}>
              <td>{row.column}</td>
              <td>{row.denominator}</td>
              <td>{row.type}</td>
              <td>{row.example}</td>
              <td>{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.pagination}>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
