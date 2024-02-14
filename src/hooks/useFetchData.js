import { useState } from 'react';
import useApiPromise from 'src/hooks/useApiPromise';

export const useFetchData = () => {
    const [fetchData, setFetchData] = useState({ data: null, error: null, loading: false });
    const { handleApiPromise } = useApiPromise();

    const executeFetch = async ({ endPoint, method, data, params }) => {
        setFetchData({ data: null, error: null, loading: true });
        const result = await handleApiPromise({ endPoint, method, data, params });
        setFetchData({ data: result, error: result.error, loading: false });
    };

    return { ...fetchData, executeFetch };
};


export default useFetchData;