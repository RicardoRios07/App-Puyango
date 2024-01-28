import React from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Banner from '../../../components/Banner';
import Welcome from './Welcome';

const Home = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/login'); 
    };

    return (
        <Box sx={{ display: 'flex', height: '100vh' }}>
            <Banner backgroundImage="/img/background.png" />
            <Welcome onButtonClick={handleNext} />
        </Box>
    );
};

export default Home;
