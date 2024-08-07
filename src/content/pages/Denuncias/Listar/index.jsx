import React, { useEffect } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import CustomCard from 'src/components/Card'; 
import { useDialog } from 'src/hooks/useDialog';
import useFetchData from 'src/hooks/useFetchData';
import BackdropWrapper from 'src/components/Backdrop';

const Denuncias = () => {
    const { data, error, loading, executeFetch } = useFetchData();
	const { isOpen, handleOpen, handleClose, dataContent } = useDialog();

    useEffect(() => {
        executeFetch({ endPoint: 'denuncias/getAllDenuncias', method: 'GET' });
    }, []);

    return (
        <>
            <BackdropWrapper open={loading} />
            <Container>
                <Grid container spacing={2} width='100%'>
                    {data && data.status === 'success' && data.data
                        .filter(denuncia => denuncia.estado === 'Atendida') // Filtrar las denuncias atendidas
                        .map((denuncia) => (
                            <CustomCard key={denuncia._id} denuncia={denuncia} />
                        ))}
                </Grid>
            </Container>
        </>
    );
};

export default Denuncias;
