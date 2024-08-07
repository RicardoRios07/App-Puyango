import React from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Banner from '../../../components/Banner';
import Form from './Form/index';

const Login = () => {
    const navigate = useNavigate();

    // const handleNext = () => {
    //     navigate('/login'); 
    // };

    return (
        <Box sx={{ display: 'flex', height: '100vh' }}>
            <Banner backgroundImage="/img/background.jpg" />
            <Form 
            />
        </Box>
    );
};

export default Login;
