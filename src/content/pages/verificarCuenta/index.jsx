import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetchData from 'src/hooks/useFetchData';

const VerificarCuenta = () => {
    const { token } = useParams();
    const navigate = useNavigate();
    const { data, error, loading, executeFetch } = useFetchData();

    useEffect(() => {
        if (token) {
            executeFetch({ endPoint: `auth/verifyUser/${token}`, method: 'POST', data: {} });
        }
    }, [token]);

    useEffect(() => {
        if (data && data.status === 'success') {

            if (loading) return <div>Verificando cuenta...</div>;
            if (error) return <div>Error al verificar la cuenta: {error.message}</div>;
        }
    }, [data, navigate]);


    return null;
};

export default VerificarCuenta;
