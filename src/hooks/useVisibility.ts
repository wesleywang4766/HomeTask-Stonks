import { useState } from "react";

const useVisibility = (initialVisibility: boolean = false) => {
  const [visible, setVisible] = useState<boolean>(initialVisibility);

  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  const toggle = () => setVisible(!visible);

  return { visible, show, hide, toggle };
};

export default useVisibility;
