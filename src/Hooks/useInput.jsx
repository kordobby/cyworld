import { useState, useCallback } from "react";

export default function useInput(initValue = null) {
  const [value, setValue] = useState(initValue);
  
  const handler = useCallback((event) => {
    setValue(event.target.value);
  }, []);
  
  return [value, handler];
}