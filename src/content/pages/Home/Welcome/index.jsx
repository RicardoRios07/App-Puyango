import React from 'react';
import { Box, Typography, Button, useTheme } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Welcome = ({ onButtonClick }) => {

    const theme = useTheme();

    return (
        <Box
            sx={{
                width: '50%',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'left',
                p: 30,
                backgroundColor: theme.palette.background.paper, 
                textAlign: 'left'
            }}
        >
            <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                ¡Bienvenido!
            </Typography>
            <Typography variant="body3" gutterBottom>
                En nuestra plataforma te brindaremos la oportunidad de hacer la diferencia en tu comunidad. Si eres residente de Puyango, aquí podrás denunciar problemas y compartir información sobre tu barrio.
                <br /><br />
                ¿Tienes un bache en la calle de tu barrio y necesita ser arreglado urgentemente? ¿Un poste de luz no funciona? ¿Algún problema de seguridad que deba ser atendido? Este es el lugar para que puedas hacerlo conocer.
                <br /><br />
                Únete a nosotros para mejorar nuestra comunidad. Denuncia y construye bienestar en tu barrio.
            </Typography>
            <Button
                variant="contained"
                color="primary" 
                endIcon={<KeyboardArrowRightIcon />}
                onClick={onButtonClick}
                sx={{ m:10, p:2, w:10}}

            >
                Siguiente
            </Button>
        </Box>
    );
};

export default Welcome;
