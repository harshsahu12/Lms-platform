import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay?: number): T {
  const [debonceValue, setDebounceValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay || 500);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return debonceValue;
}
