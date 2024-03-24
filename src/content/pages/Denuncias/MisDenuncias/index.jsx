import React, { useEffect } from 'react';
import { Grid, Card, CardContent, Typography, CardMedia, Container } from '@mui/material';
import useFetchData from 'src/hooks/useFetchData';
import CustomCard from 'src/components/Card'; 

const Denuncias = () => {
    const { data, error, loading, executeFetch } = useFetchData();

    useEffect(() => {
        executeFetch({ endPoint: 'denuncias/getDenunciasUser', method: 'GET' });
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
