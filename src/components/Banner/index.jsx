import React from 'react';
import { Box, IconButton, useTheme } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import logo from '/img/gadPuyangoOrg.png';

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
                    <IconButton color="inherit" aria-label="facebook" size="large" href='https://www.facebook.com'>
                        <FacebookIcon sx={{ color: theme.palette.common.white }} />
                    </IconButton>
                    <IconButton color="inherit" aria-label="twitter" size="large" href='https://www.facebook.com'>
                        <TwitterIcon sx={{ color: theme.palette.common.white }} />
                    </IconButton>
                    <IconButton color="inherit" aria-label="whatsapp" size="large" href='https://www.facebook.com'>
                        <WhatsAppIcon sx={{ color: theme.palette.common.white }} />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
};

export default Banner;
