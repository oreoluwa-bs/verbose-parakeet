import { useState, useRef, useEffect } from "react";

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    clearTimeout(timerRef.current);
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    timerRef.current = timerId;
  }, [value, delay]);

  return debouncedValue;
}
