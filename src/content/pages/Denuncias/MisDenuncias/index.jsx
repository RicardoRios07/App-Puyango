import React, { useEffect } from 'react';
import { Grid, Card, CardContent, Typography, CardMedia, Container } from '@mui/material';
import useFetchData from 'src/hooks/useFetchData';
import CustomCard from 'src/components/Card'; 
import BackdropWrapper from 'src/components/Backdrop';

const Denuncias = () => {
    const { data, error, loading, executeFetch } = useFetchData();

    useEffect(() => {
        executeFetch({ endPoint: 'denuncias/getDenunciasUser', method: 'GET' });
    }, []);



    return (
        <>
        <BackdropWrapper open={loading} />
        <Container>
            <Grid container spacing={2} width='100%'>
                {data && data.status === 'success' && data.data.map((denuncia) => (
                    <CustomCard key={denuncia._id} denuncia={denuncia} />
                ))}
            </Grid>
        </Container>
        </>
    );
};

export default Denuncias;
