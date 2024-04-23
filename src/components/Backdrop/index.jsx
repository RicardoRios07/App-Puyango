import React from 'react';
import PropTypes from 'prop-types';
import { Backdrop, Box, useTheme, GlobalStyles } from '@mui/material';

const BackdropWrapper = ({ open }) => {
    const theme = useTheme();

    const globalStyles = {
        '@global': {
            '@keyframes pulse': {
                '0%': {
                    transform: 'scale(0.95)'
                },
                '5%': {
                    transform: 'scale(1.1)'
                },
                '39%': {
                    transform: 'scale(0.85)'
                },
                '45%': {
                    transform: 'scale(1)'
                },
                '60%': {
                    transform: 'scale(0.95)'
                },
                '100%': {
                    transform: 'scale(0.9)'
                }
            }
        }
    };

    return (
        <>
            <GlobalStyles styles={globalStyles} />
            <Backdrop
                sx={{
                    bgcolor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.3)',
                    zIndex: 99
                }}
                open={open}>
                <Box
                    sx={{
                        maskImage: 'url(/img/LogoGadBlanco.png)',
                        maskPosition: 'center',
                        maskRepeat: 'no-repeat',
                        maskSize: 'contain',
                        width: 100,
                        height: 100,
                        backgroundColor: 'white',
                        animation: 'pulse 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1)'
                    }} />
            </Backdrop>
        </>
    );
}

BackdropWrapper.propTypes = {
    open: PropTypes.bool.isRequired
}

export default BackdropWrapper;
