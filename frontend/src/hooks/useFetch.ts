import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';

import useBoolean from '@/hooks/useBoolean';

export default function useFetch<T>(fetcher: () => Promise<T>) {
  const [data, setData] = useState<T>();
  const { bool: isLoading, setTrue: setIsLoadingTrue, setFalse: setIsLoadingFalse } = useBoolean(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    setIsLoadingTrue();

    const fetchFunction = async () => {
      try {
        const result = await fetcher();
        setData(result);
      } catch (error) {
        if (error instanceof AxiosError) {
          setError(error);
          return;
        }

        throw new Error('시스템 오류가 발생했습니다. 잠시후에 다시 시도해주세요.');
      } finally {
        setIsLoadingFalse();
      }
    };

    fetchFunction();
  }, [fetcher, setIsLoadingFalse, setIsLoadingTrue]);

  return { data, isLoading, error };
}
