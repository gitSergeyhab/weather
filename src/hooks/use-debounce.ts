import { useState, useEffect } from 'react';

const DELAY = 500;

export function useDebounce <T>(value: T, delay = DELAY) {

  const [values, setValues] = useState<T>(value);

  useEffect(() => {
    const timeout = setTimeout(() => setValues(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return values;
}
