import React from "react";
import { usePagination, useTable } from "react-table";

function Database() {
  const columns = React.useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "first",
      },
      {
        Header: "Last Name",
        accessor: "last",
      },
    ],
    []
  );
  const data = React.useMemo(
    () => [
      {
        first: "Hello",
        last: "World",
      },
      {
        first: "react-table",
        last: "rocks",
      },
      {
        first: "whatever",
        last: "you want",
      },
      {
        first: "Hello",
        last: "World",
      },
      {
        first: "react-table",
        last: "rocks",
      },
      {
        first: "whatever",
        last: "you want",
      },
      {
        first: "Hello",
        last: "World",
      },
      {
        first: "react-table",
        last: "rocks",
      },
      {
        first: "whatever",
        last: "you want",
      },
      {
        first: "Hello",
        last: "World",
      },
      {
        first: "react-table",
        last: "rocks",
      },
      {
        first: "whatever",
        last: "you want",
      },
      {
        first: "Hello",
        last: "World",
      },
      {
        first: "react-table",
        last: "rocks",
      },
      {
        first: "whatever",
        last: "you want",
      },
      {
        first: "Hello",
        last: "World",
      },
      {
        first: "react-table",
        last: "rocks",
      },
      {
        first: "whatever",
        last: "you want",
      },
      {
        first: "Hello",
        last: "World",
      },
      {
        first: "react-table",
        last: "rocks",
      },
      {
        first: "whatever",
        last: "you want",
      },
      {
        first: "Hello",
        last: "World",
      },
      {
        first: "react-table",
        last: "rocks",
      },
      {
        first: "whatever",
        last: "you want",
      },
      {
        first: "Hello",
        last: "World",
      },
      {
        first: "react-table",
        last: "rocks",
      },
      {
        first: "whatever",
        last: "you want",
      },
      {
        first: "Hello",
        last: "World",
      },
      {
        first: "react-table",
        last: "rocks",
      },
      {
        first: "whatever",
        last: "you want",
      },
      {
        first: "Hello",
        last: "World",
      },
      {
        first: "react-table",
        last: "rocks",
      },
      {
        first: "whatever",
        last: "you want",
      },
      {
        first: "Hello",
        last: "World",
      },
      {
        first: "react-table",
        last: "rocks",
      },
      {
        first: "whatever",
        last: "you want",
      },
      {
        first: "Hello",
        last: "World",
      },
      {
        first: "react-table",
        last: "rocks",
      },
      {
        first: "whatever",
        last: "you want",
      },
      {
        first: "Hello",
        last: "World",
      },
      {
        first: "react-table",
        last: "rocks",
      },
      {
        first: "whatever",
        last: "you want",
      },
      {
        first: "Hello",
        last: "World",
      },
      {
        first: "react-table",
        last: "rocks",
      },
      {
        first: "whatever",
        last: "you want",
      },
      {
        first: "Hello",
        last: "World",
      },
      {
        first: "react-table",
        last: "rocks",
      },
      {
        first: "whatever",
        last: "you want",
      },
      {
        first: "Hello",
        last: "World",
      },
      {
        first: "react-table",
        last: "rocks",
      },
      {
        first: "whatever",
        last: "you want",
      },
      {
        first: "Hello",
        last: "World",
      },
      {
        first: "react-table",
        last: "rocks",
      },
      {
        first: "whatever",
        last: "you want",
      },
      {
        first: "Hello",
        last: "World",
      },
      {
        first: "react-table",
        last: "rocks",
      },
      {
        first: "whatever",
        last: "you want",
      },
      {
        first: "Hello",
        last: "World",
      },
      {
        first: "react-table",
        last: "rocks",
      },
      {
        first: "whatever",
        last: "you want",
      },
      {
        first: "Hello",
        last: "World",
      },
      {
        first: "react-table",
        last: "rocks",
      },
      {
        first: "whatever",
        last: "you want",
      },
      {
        first: "Hello",
        last: "World",
      },
      {
        first: "react-table",
        last: "rocks",
      },
      {
        first: "whatever",
        last: "you want",
      },
      {
        first: "Hello",
        last: "World",
      },
      {
        first: "react-table",
        last: "rocks",
      },
      {
        first: "whatever",
        last: "you want",
      },
      {
        first: "Hello",
        last: "World",
      },
      {
        first: "react-table",
        last: "rocks",
      },
      {
        first: "whatever",
        last: "you want",
      },
      {
        first: "Hello",
        last: "World",
      },
      {
        first: "react-table",
        last: "rocks",
      },
      {
        first: "whatever",
        last: "you want",
      },
      {
        first: "Hello",
        last: "World",
      },
      {
        first: "react-table",
        last: "rocks",
      },
      {
        first: "whatever",
        last: "you want",
      },
      {
        first: "Hello",
        last: "World",
      },
      {
        first: "react-table",
        last: "rocks",
      },
      {
        first: "whatever",
        last: "you want",
      },
      {
        first: "Hello",
        last: "World",
      },
      {
        first: "react-table",
        last: "rocks",
      },
      {
        first: "whatever",
        last: "you want",
      },
      {
        first: "Hello",
        last: "World",
      },
      {
        first: "react-table",
        last: "rocks",
      },
      {
        first: "whatever",
        last: "you want",
      },
      {
        first: "Hello",
        last: "World",
      },
      {
        first: "react-table",
        last: "rocks",
      },
      {
        first: "whatever",
        last: "you want",
      },
      {
        first: "Hello",
        last: "World",
      },
      {
        first: "react-table",
        last: "rocks",
      },
      {
        first: "whatever",
        last: "you want",
      },
      {
        first: "Hello",
        last: "World",
      },
      {
        first: "react-table",
        last: "rocks",
      },
      {
        first: "whatever",
        last: "you want",
      },
      {
        first: "Hello",
        last: "World",
      },
      {
        first: "react-table",
        last: "rocks",
      },
      {
        first: "whatever",
        last: "you want",
      },
      {
        first: "Hello",
        last: "World",
      },
      {
        first: "react-table",
        last: "rocks",
      },
      {
        first: "whatever",
        last: "you want",
      },
      {
        first: "Hello",
        last: "World",
      },
      {
        first: "react-table",
        last: "rocks",
      },
      {
        first: "whatever",
        last: "you want",
      },
      {
        first: "Hello",
        last: "World",
      },
      {
        first: "react-table",
        last: "rocks",
      },
      {
        first: "whatever",
        last: "you want",
      },
      {
        first: "Hello",
        last: "World",
      },
      {
        first: "react-table",
        last: "rocks",
      },
      {
        first: "whatever",
        last: "you want",
      },
      {
        first: "Hello",
        last: "World",
      },
      {
        first: "react-table",
        last: "rocks",
      },
      {
        first: "whatever",
        last: "you want",
      },
      {
        first: "Hello",
        last: "World",
      },
      {
        first: "react-table",
        last: "rocks",
      },
      {
        first: "whatever",
        last: "you want",
      },
      {
        first: "Hello",
        last: "World",
      },
      {
        first: "react-table",
        last: "rocks",
      },
      {
        first: "whatever",
        last: "you want",
      },
      {
        first: "Hello",
        last: "World",
      },
      {
        first: "react-table",
        last: "rocks",
      },
      {
        first: "whatever",
        last: "you want",
      },
      {
        first: "Hello",
        last: "World",
      },
      {
        first: "react-table",
        last: "rocks",
      },
      {
        first: "whatever",
        last: "you want",
      },
      {
        first: "Hello",
        last: "World",
      },
      {
        first: "react-table",
        last: "rocks",
      },
      {
        first: "whatever",
        last: "you want",
      },
      {
        first: "Hello",
        last: "World",
      },
      {
        first: "react-table",
        last: "rocks",
      },
      {
        first: "whatever",
        last: "you want 544654 ",
      },
    ],
    []
  );
  return (
    <div className="flex flex-col gap-3 p-8 bg-gray-200 flex-grow overflow-scroll">
      <p className="text-4xl font-body font-bold bg-white p-4 rounded-lg shadow-md">
        Data Management
      </p>
      <div className="font-body flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
}

function Table({ columns, data }) {
  const tableInstance = useTable({ columns, data }, usePagination);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = tableInstance;

  return (
    <>
      // apply the table props
      <table {...getTableProps()}>
        <thead>
          {
            // Loop over the header rows
            headerGroups.map((headerGroup) => (
              // Apply the header row props
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column) => (
                    // Apply the header cell props
                    <th {...column.getHeaderProps()}>
                      {
                        // Render the header
                        column.render("Header")
                      }
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        {/* Apply the table body props */}
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </span>{" "}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default Database;
