import React, { useState, useEffect } from 'react';
import { Box, Typography, Link, InputAdornment, IconButton, Tooltip } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Input from 'src/components/Input';
import Button from 'src/components/Button';
import useFetchData from 'src/hooks/useFetchData';
import { useNavigate } from 'react-router-dom';
import { configSession } from 'src/utils/configSession';
import SnackBarWrapper from 'src/components/SnackBar';
import { useSnackbar } from 'src/hooks/useSnackbar';
import BackdropWrapper from 'src/components/Backdrop';

const Form = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const { data, error, loading, executeFetch } = useFetchData();
    const { setSession } = configSession();
    const { isOpen: isOpenSnack, handleClose: handleCloseSnack, handleOpen: handleOpenSnack } = useSnackbar();
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarType, setSnackbarType] = useState('success');

    useEffect(() => {
        if (data && data.code === 200) {
            setSession(data.data);

            navigate('/inicio');
        } else if (error) {
            setSnackbarMessage(error.message || 'Ocurrió un error durante el inicio de sesión.');
            setSnackbarType('error');
            handleOpenSnack();
        }
    }, [data, error, navigate, handleOpenSnack, setSession]);
    
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        executeFetch({ endPoint: 'auth/login', method: 'POST', data: formData });
    };


    return (
        <>
        <BackdropWrapper open={loading} />
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
                Iniciar sesión
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
                    label="Correo electrónico"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    name="email"
                    margin="normal"
                    fullWidth
                />
                <Input
                    label="Contraseña"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleChange}
                    name="password"
                    margin="normal"
                    fullWidth
                    endAdornment={
                        <InputAdornment position="end">
                            <Tooltip title={showPassword ?  'Ocultar Contraseña' : 'Mostrar contraseña'  } arrow>
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleTogglePasswordVisibility}
                            >
                                {showPassword ? <Visibility color='primary' /> : <VisibilityOff color='primary' />}
                            </IconButton>
                            </Tooltip>
                        </InputAdornment>
                    }
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
                {'Aún no tienes cuenta? '}
                <Link href="/register" variant="body2">
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
        </>
    );
};

export default Form;
