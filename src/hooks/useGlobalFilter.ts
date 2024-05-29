import { useState, useEffect } from "react";

const useGlobalFilter = () => {
  const [globalFilter, setGlobalFilter] = useState<string>("");

  return { globalFilter, setGlobalFilter };
};

export default useGlobalFilter;
