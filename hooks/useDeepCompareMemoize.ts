import { useRef } from 'react';
import isEqual from 'lodash/isEqual';

export const useDeepCompareMemoize = (value: any) => {
  const ref = useRef<any>();

  if (!isEqual(value, ref.current)) {
    ref.current = value;
  }

  return ref.current;
};
