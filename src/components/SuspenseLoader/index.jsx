import React, { useEffect } from 'react';
import NProgress from 'nprogress';
import { Box, CircularProgress } from '@mui/material';

function SuspenseLoader({ position = 'absolute', isLoading }) {
    useEffect(() => {
        if (isLoading) {
            NProgress.start();
        } else {
            NProgress.done();
        }

        return () => {
            NProgress.done();
        };
    }, [isLoading]);

    return (
        <Box
            sx={{
                position: position,
                left: 0,
                top: 0,
                width: '100%',
                height: '100%'
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <CircularProgress size={64} disableShrink thickness={3} />
        </Box>
    );
}

export default SuspenseLoader;