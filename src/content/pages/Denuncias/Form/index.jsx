import React, { useState } from 'react';
import { TextField, Select, MenuItem, InputLabel, FormControl, Grid, Box, Typography } from '@mui/material';
import Button from 'src/components/Button';
import MapComponent from './Map';
import InputImage from 'src/components/InputImage';
import BackdropWrapper from 'src/components/Backdrop';

const FormDenuncias = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [evidence, setEvidence] = useState('');
    const [location, setLocation] = useState({ lat: -3.968, lng: -80.053 });
    const [category, setCategory] = useState('');

    const handleSelectLocation = ({ lat, lng }) => {
        setLocation({ lat, lng });
        console.log("Ubicación seleccionada:", { lat, lng });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Aquí manejarías el envío del formulario, por ejemplo a un API
    };

    return (
        <>
        <BackdropWrapper  open={true} />
        <Box sx={{ px: 20, py:10 }}>
            <Typography variant="h3" component="div" textAlign="center">
                Crear Denuncias
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
                <Grid container spacing={3} justifyContent="center">
                    <Grid item xs={12}>
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
                        <InputImage
                            id="evidence-input"
                            name="evidence"
                            title="Subir Evidencia"
                            accept="image/*"
                            isRequired={true}
                            defaultImg={evidence}
                            onChange={(newSrc) => setEvidence(newSrc)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <div style={{ height: '400px', width: '100%' }}>
                        <MapComponent onMarkerSet={handleSelectLocation} />
                        </div>
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
                        <Button variant="contained" color="primary" text="Enviar denuncia" />
                        
                    </Grid>
                </Grid>
            </Box>
        </Box>
        </>
    );
};

export default FormDenuncias;
