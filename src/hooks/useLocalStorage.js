import { useState } from "react";
export function useLocalStorage(key, initial) {
  const [state, setState] = useState(() => {
    const s = localStorage.getItem(key);
    return s ? JSON.parse(s) : initial;
  });
  const set = (val) => {
    setState(val);
    localStorage.setItem(key, JSON.stringify(val));
  };
  return [state, set];
}
