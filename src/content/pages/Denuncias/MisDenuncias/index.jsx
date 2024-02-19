import React, { useEffect } from 'react';
import { Grid, Card, CardContent, Typography, CardMedia, Container } from '@mui/material';
import useFetchData from 'src/hooks/useFetchData';

const Denuncias = () => {
    const { data, error, loading, executeFetch } = useFetchData();

    useEffect(() => {
        executeFetch({ endPoint: 'denuncias/getDenunciasUser', method: 'GET' });
    }, []);

    if (loading) return <Typography>Cargando denuncias...</Typography>;
    if (error) return <Typography>Error al obtener las denuncias: {error}</Typography>;

    return (
        <>
        <Container>
            <Grid container spacing={2}>
                {data && data.status === 'success' && data.data.map((denuncia) => (
                    <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={denuncia._id}>
                        <Card sx={{ maxWidth: 445, height: '100%' }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={denuncia.evidencia}
                                alt="Evidencia"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {denuncia.tituloDenuncia}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Descripción: {denuncia.descripcion}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Denunciante: {denuncia.nombreDenunciante}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Ubicación: {denuncia.ubicacion}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
        </>
    );
};

export default Denuncias;
