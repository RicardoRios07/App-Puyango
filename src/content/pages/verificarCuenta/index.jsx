import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Grid, Typography, CircularProgress } from '@mui/material';
import { CheckCircleOutline as CheckCircleOutlineIcon, ErrorOutline as ErrorOutlineIcon } from '@mui/icons-material';
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

    if (loading) return <CircularProgress />;

    return (
        <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item xs={12} textAlign="center">
                {error ? (
                    <div>
                        <ErrorOutlineIcon color="error" fontSize="large" />
                        <Typography variant="h6" color="error" gutterBottom>
                            Error al verificar la cuenta
                        </Typography>
                        <Typography variant="body1">{error.message}</Typography>
                    </div>
                ) : null}
                {data && data.status === 'success' ? (
                    <div>
                        <CheckCircleOutlineIcon color="success" fontSize="large" />
                        <Typography variant="h6" color="success" gutterBottom>
                            Cuenta verificada exitosamente
                        </Typography>
                        <Typography variant="body1">
                            Serás redirigido a la página de inicio de sesión en 10 segundos.
                        </Typography>
                    </div>
                ) : null}
            </Grid>
        </Grid>
    );
};

export default VerificarCuenta;
