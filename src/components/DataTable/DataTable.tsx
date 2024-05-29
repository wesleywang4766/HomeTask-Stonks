import React, { useEffect, useMemo } from "react";
import {
  useReactTable,
  ColumnDef,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  flexRender,
} from "@tanstack/react-table";
import Pagination from "./Pagination";
import Search from "./Search";
import useFetch from "../../hooks/useFetch";
import usePagination from "../../hooks/usePagination";
import useGlobalFilter from "../../hooks/useGlobalFilter";

export type User = {
  id: string;
  username: string;
  email: string;
};

type DataTableProps = {
  initialData: User[];
};

const DataTable: React.FC<DataTableProps> = ({ initialData }) => {
  const { data, loading, error } = useFetch("/users");
  const { page, setPage } = usePagination();
  const { globalFilter, setGlobalFilter } = useGlobalFilter();

  const columns: ColumnDef<User>[] = useMemo(
    () => [
      {
        accessorKey: "username",
        header: "Username",
      },
      {
        accessorKey: "email",
        header: "Email",
      },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
      pagination: { pageIndex: page.pageIndex, pageSize: page.pageSize },
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn: "includesString",
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPage,
  });

  useEffect(() => {
    if (globalFilter) {
      setGlobalFilter(globalFilter);
    }
  }, [globalFilter, setGlobalFilter]);

  if (loading) return <p className="text-gray-500">Loading...</p>;
  if (error) return <p className="text-red-500">Error loading data.</p>;

  return (
    <div className="space-y-4">
      <Search onSearch={setGlobalFilter} />
      <table className="w-full border-collapse">
        <thead className="bg-gray-200">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-4 py-2 text-left font-bold text-gray-700"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="divide-y divide-gray-200">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-gray-100">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-4 py-2 text-gray-700">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={page.pageIndex}
        totalPages={table.getPageCount()}
        onPageChange={setPage}
      />
    </div>
  );
};

export default DataTable;
