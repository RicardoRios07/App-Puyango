import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia, Container } from '@mui/material';

const CustomCard = ({ denuncia }) => {
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <Card
                sx={{
                    maxWidth: 400,
                    height: '100%',
                    width: '100hv',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: 3,

                }}>
                <CardMedia
                    component="img"
                    height="150"
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
    );
};

export default CustomCard;
