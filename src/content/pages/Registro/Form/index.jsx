import React, { useState, useEffect } from 'react';
import Input from 'src/components/Input/index';
import Button from 'src/components/Button/index';
import { Box, Typography, Link } from '@mui/material';
import useFetchData from 'src/hooks/useFetchData';
import { useNavigate } from 'react-router-dom';
import SnackBarWrapper from 'src/components/SnackBar';
import { useSnackbar } from 'src/hooks/useSnackbar';


const Form = () => {
    const [formData, setFormData] = useState({
        nombreCompleto: '',
        cedula: '',
        numTelefono: '',
        email: '',
        password: ''
    });
    const navigate = useNavigate();
    const { data, error, loading, executeFetch } = useFetchData();
    const { isOpen: isOpenSnack, handleClose: handleCloseSnack, handleOpen: handleOpenSnack } = useSnackbar();
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarType, setSnackbarType] = useState('success');

    useEffect(() => {
        if (data && data.code === 200) {
            setSnackbarMessage(data.message || 'Registro exitoso. Por favor inicia sesión.');
            setSnackbarType('success');
            handleOpenSnack();

            // Retrasar la navegación durante 5 segundos
            const timer = setTimeout(() => {
                navigate('/login');
            }, 3000);

            // Limpieza del timer al desmontar el componente
            return () => clearTimeout(timer);
        } else if (data && data.code !== 200) {
            setSnackbarMessage(data.message || 'Ocurrió un error durante el registro.');
            setSnackbarType('error');
            handleOpenSnack();
        }
    }, [data, navigate, handleOpenSnack]);

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        executeFetch({ endPoint: 'auth/register', method: 'POST', data: formData });
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 4,
                borderRadius: 1,
                maxWidth: 400,
                margin: 'auto'
            }}
        >
            <Typography variant="h2" component="h1" gutterBottom>
                Registrarse
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Agrega tu información a continuación
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ width: '100%', mt: 1 }}
            >
                <Input
                    label="Nombre Completo"
                    type="text"
                    value={formData.nombreCompleto}
                    onChange={handleChange}
                    name="nombreCompleto"
                    margin="normal"
                    fullWidth
                />
                <Input
                    label="Cédula"
                    type="text"
                    value={formData.cedula}
                    onChange={handleChange}
                    name="cedula"
                    margin="normal"
                    fullWidth
                />
                <Input
                    label="Número de Teléfono"
                    type="tel"
                    value={formData.numTelefono}
                    onChange={handleChange}
                    name="numTelefono"
                    margin="normal"
                    fullWidth
                />
                <Input
                    label="Correo Electrónico"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    name="email"
                    margin="normal"
                    fullWidth
                />
                <Input
                    label="Contraseña"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    name="password"
                    margin="normal"
                    fullWidth
                />
                <Button
                    text="Siguiente"
                    type="submit"
                    color="primary"
                    variant="contained"
                    sx={{ mt: 3, mb: 2, py: 1 }}
                    fullWidth
                />
            </Box>
            <Typography variant="body2">
                {'Aún no tienes una cuenta? '}
                <Link href="/login" variant="body2">
                    {'Ingresa aquí'}
                </Link>
            </Typography>
            <SnackBarWrapper
                isOpen={isOpenSnack}
                duration={6000}
                handleClose={handleCloseSnack}
                type={snackbarType}
                text={snackbarMessage}
            />
        </Box>
    );
};

export default Form;
