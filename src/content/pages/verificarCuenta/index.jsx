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
        let timeoutId;

        if (data && data.status === 'success') {
            timeoutId = setTimeout(() => {
                navigate('/login');
            }, 10000); 
        }

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [data, navigate]);

    if (loading) return <div>Verificando cuenta...</div>;
    if (error) return <div>Error al verificar la cuenta: {error.message}</div>;

    if (data && data.status === 'success') {
        return <div>Cuenta verificada exitosamente.</div>;
    }

    return null;
};

export default VerificarCuenta;
