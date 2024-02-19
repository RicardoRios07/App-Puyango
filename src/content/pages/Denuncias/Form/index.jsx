import React, { useState } from 'react';
import { TextField, Select, MenuItem, InputLabel, FormControl, Grid, Box, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Button from 'src/components/Button';

const Input = styled('input')({
    display: 'none',
});

const FormDenuncias = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [evidence, setEvidence] = useState(null);
    const [location, setLocation] = useState('');
    const [category, setCategory] = useState('');

    const handleSelectLocation = address => {
        setLocation(address);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí manejarías el envío del formulario
    };

    return (
        <Box elevation={3} sx={{ px: 20, margin: 'auto', flexGrow: 1, py: 10 }}>
            <Typography variant="h3" component="div">
                Crear denuncias
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom component="div">
                            Información de la denuncia
                        </Typography>
                        <TextField
                            label="Título de la denuncia"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Descripción"
                            value={description}
                            multiline
                            rows={4}
                            onChange={(e) => setDescription(e.target.value)}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <label htmlFor="contained-button-file">
                            <Input
                                id="contained-button-file"
                                type="file"
                                onChange={(e) => setEvidence(e.target.files[0])}
                                accept="image/*"
                            />
                            <Button variant="contained" component="button">
                                Agregue una foto de evidencia
                            </Button>
                        </label>
                    </Grid>
                    <Grid item xs={12}>
                        {/* Aquí deberías insertar tu componente de mapa para seleccionar la ubicación */}
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel id="category-label">Categoría</InputLabel>
                            <Select
                                labelId="category-label"
                                id="category"
                                value={category}
                                label="Categoría"
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <MenuItem value="Agua Potable, Alcantarillado Sanitario, Alcantarillado Pluvial">Agua Potable, Alcantarillado Sanitario, Alcantarillado Pluvial</MenuItem>
                                <MenuItem value="Recolección de Desechos y Saneamiento Ambiental">Recolección de Desechos y Saneamiento Ambiental</MenuItem>
                                <MenuItem value="Movilidad Urbana: Bacheo de Calles, Frecuencias, Obstrucciones de aceras, etc.">Movilidad Urbana: Bacheo de Calles, Frecuencias, Obstrucciones de aceras, etc.</MenuItem>
                                <MenuItem value="Obstrucción de vías por construcciones, ornato, permisos de construcción">Obstrucción de vías por construcciones, ornato, permisos de construcción</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" onClick={handleSubmit} fullWidth>
                            Enviar denuncia
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

export default FormDenuncias;
