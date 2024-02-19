import React, { useEffect } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import CustomCard from 'src/components/Card'; 

import useFetchData from 'src/hooks/useFetchData';

const Denuncias = () => {
    const { data, error, loading, executeFetch } = useFetchData();

    useEffect(() => {
        executeFetch({ endPoint: 'denuncias/getAllDenuncias', method: 'GET' });
    }, []);

    if (loading) return <Typography>Cargando denuncias...</Typography>;
    if (error) return <Typography>Error al obtener las denuncias: {error}</Typography>;

    return (
        <Container>
            <Grid container spacing={2} width='100%'>
                {data && data.status === 'success' && data.data.map((denuncia) => (
                    <CustomCard key={denuncia._id} denuncia={denuncia} />
                ))}
            </Grid>
        </Container>
    );
};

export default Denuncias;
