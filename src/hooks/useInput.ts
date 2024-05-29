import { useState } from "react";

const useInput = (initialValue: string) => {
  const [value, setValue] = useState<string>(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const setInputValue = (value: string) => {
    setValue(value);
  };

  const reset = () => {
    setValue("");
  };

  return { value, handleChange, reset, setInputValue };
};

export default useInput;
