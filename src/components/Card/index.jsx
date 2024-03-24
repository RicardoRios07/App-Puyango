import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia, Container } from '@mui/material';
import {
    LocationOn,
    Description,
    Person,
    Visibility,
    Construction,
    Check
} from '@mui/icons-material';
import ChipStatus from 'src/components/Chip/ChipStatus';

const CustomCard = ({ denuncia }) => {
    const getStatusInfo = (estado) => {
        switch (estado) {
            case 'En revisión':
                return { color: 'error', icon: <Visibility /> };
            case 'En proceso':
                return { color: 'warning', icon: <Construction /> };
            case 'Atendida':
                return { color: 'success', icon: <Check /> };
            default:
                return { color: 'primary', icon: null };
        }
    };

    const obfuscateText = (text) => {
        const words = text.split(' ');
        const firstWord = words[0];
        const obfuscatedRest = words.slice(1).map(word => 'x'.repeat(word.length)).join(' ');
        return firstWord + ' ' + obfuscatedRest;
    };

    const { color, icon } = getStatusInfo(denuncia.estado);

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

                    <Typography variant="h5" color="text.secondary" display="flex" alignItems="center">
                        <Description sx={{ marginRight: 1 }} color='primary' /> Descripción:
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {denuncia.descripcion}
                    </Typography>

                    {/* <Typography variant="h5" color="text.secondary" display="flex" alignItems="center">
                        <Person sx={{ marginRight: 1 }} color='primary' /> Denunciante: 
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {denuncia.nombreDenunciante}
                    </Typography> */}
                    <Typography variant="h5" color="text.secondary" display="flex" alignItems="center">
                        <Person sx={{ marginRight: 1 }} color='primary' /> Denunciante: 
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {/* Mostrar solo la primera palabra y ofuscar las demás */}
                        {obfuscateText(denuncia.nombreDenunciante)}
                    </Typography>

                    <Typography variant="h5" color="text.secondary" display="flex" alignItems="center">
                        <LocationOn sx={{ marginRight: 1 }} color='primary' /> Ubicación:
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        <a href={`https://www.google.com/maps?q=${denuncia.ubicacion}`} target="_blank">Ver Ubicación</a>
                    </Typography>

                    <ChipStatus text={denuncia.estado} color={color} icon={icon} />
                </CardContent>
            </Card >
        </Grid >
    );
};

export default CustomCard;
