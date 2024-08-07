import React from 'react';
import { Box, IconButton, useTheme, Typography } from '@mui/material';
import { Facebook, X, Language} from '@mui/icons-material';
import logo from '/img/gadPuyangoOrg.png';
import footerImage from '/img/tikee-h-blanco.png';

const Banner = ({ backgroundImage }) => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                width: '50%',
                height: '100vh',
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'center',
                position: 'relative',
            }}
        >
            <Box sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                pb: theme.spacing(4),
            }}>
                <Box sx={{
                    width: 'auto',
                    height: 150,
                    display: 'flex',
                    justifyContent: 'center',
                    mb: theme.spacing(2),
                }}>
                    <img src={logo} alt="GAD Puyango" style={{ height: '100%', maxWidth: '100%' }} />
                </Box>

                <Box sx={{
                    display: 'flex',
                    '& > *': {
                        margin: theme.spacing(1),
                    },
                }}>
                    <IconButton color="inherit" aria-label="facebook" size="large" href='https://www.facebook.com/MunicipioDePuyango/?locale=es_LA' target='_blank'>
                        <Facebook sx={{ color: theme.palette.common.white }} />
                    </IconButton>
                    <IconButton color="inherit" aria-label="twitter" size="large" href='https://x.com/depuyango?lang=es' target='_blank'>
                        <X sx={{ color: theme.palette.common.white }} />
                    </IconButton>
                    <IconButton color="inherit" aria-label="whatsapp" size="large" href='https://www.gadmpuyango.gob.ec' target='_blank'>
                        <Language sx={{ color: theme.palette.common.white }} />
                    </IconButton>
                </Box>
                {/* Footer Section */}
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: theme.spacing(2),
                    pb: theme.spacing(2),
                }}>
                    <Typography variant="h4" color='white'>
                        Powered by:
                    </Typography>
                    <Box sx={{
                        width: 'auto',
                        height: 'auto',
                        display: 'flex',
                        justifyContent: 'center',
                        mt: theme.spacing(1),
                    }}>
                        <img src={footerImage} alt="Footer Logo" style={{ maxWidth: '100%', maxHeight: '50px' }} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Banner;
