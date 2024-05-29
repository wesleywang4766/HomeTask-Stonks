import React from "react";
import { PaginationState } from "@tanstack/react-table";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: PaginationState) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center mt-4">
      <button
        className="px-3 py-1 border border-gray-300 rounded"
        onClick={() =>
          onPageChange({ pageIndex: currentPage - 1, pageSize: 10 })
        }
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`px-3 py-1 border border-gray-300 rounded ${
            currentPage === page ? "bg-gray-300" : ""
          }`}
          onClick={() => onPageChange({ pageIndex: page, pageSize: 10 })}
        >
          {page}
        </button>
      ))}
      <button
        className="px-3 py-1 border border-gray-300 rounded"
        onClick={() =>
          onPageChange({ pageIndex: currentPage + 1, pageSize: 10 })
        }
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
