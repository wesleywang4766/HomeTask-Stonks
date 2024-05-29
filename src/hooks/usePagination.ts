import { useState } from "react";
import { PaginationState } from "@tanstack/react-table";

const usePagination = () => {
  const [page, setPage] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  return { page, setPage };
};

export default usePagination;
