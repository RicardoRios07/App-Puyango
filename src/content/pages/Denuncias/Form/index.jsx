import React, { useState } from 'react';
import { TextField, Select, MenuItem, InputLabel, FormControl, Grid, Box, Typography } from '@mui/material';
import Button from 'src/components/Button';
import MapComponent from './Map';
import InputImage from 'src/components/InputImage';
import BackdropWrapper from 'src/components/Backdrop';
import useFetchData from 'src/hooks/useFetchData';
import SnackBarWrapper from 'src/components/SnackBar';

const FormDenuncias = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [evidence, setEvidence] = useState(null);
    const [location, setLocation] = useState({ lat: -3.968, lng: -80.053 });
    const [category, setCategory] = useState('');
    const [errors, setErrors] = useState({});
    const { data, error, loading, executeFetch } = useFetchData();

    const handleSelectLocation = ({ lat, lng }) => {
        setLocation({ lat, lng });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!title) newErrors.title = 'El campo de concepto de la denuncia es obligatorio.';
        if (!description) newErrors.description = 'El campo de descripción es obligatorio.';
        if (!category) newErrors.category = 'El campo de categoría es obligatorio.';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const formData = new FormData();
            formData.append('tituloDenuncia', title);
            formData.append('descripcion', description);
            formData.append('categoria', category);
            formData.append('ubicacion', JSON.stringify(location));
            if (evidence) {
                formData.append('evidencia', evidence);
            }

            executeFetch({
                endPoint: 'denuncias/nuevaDenuncia',
                method: 'POST',
                data: formData,
            }); 

            handleResetForm();
        }
    };


    const handleResetForm = () => {
        setTitle('');
        setDescription('');
        setEvidence(null);
        setLocation({ lat: -3.968, lng: -80.053 });
        setCategory('');
        setErrors({});
    };

    return (
        <>
            <SnackBarWrapper
                isOpen={!!data}
                text={data?.message}
                handleClose={() => handleResetForm()}
            />
            <BackdropWrapper open={loading} />
            <Box sx={{ px: 20, py: 10 }}>
                <Typography variant="h3" component="div" textAlign="center" sx={{ ml: 10 }}>
                    Crear Denuncias
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
                    <Grid container spacing={3} justifyContent="center">
                        <Grid item md={8} xs={12}>
                            <Typography variant="h6" component="div">
                                Paso 1: Rellene el campo con una descripción breve del problema.
                            </Typography>
                            <TextField
                                label="Concepto de la denuncia"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                error={!!errors.title}
                                helperText={errors.title}
                            />
                        </Grid>
                        <Grid item md={8} xs={12}>
                            <Typography variant="h6" component="div">
                                Paso 2: Proporcione una descripción detallada del problema:
                            </Typography>
                            <TextField
                                label="Descripción"
                                value={description}
                                multiline
                                rows={4}
                                onChange={(e) => setDescription(e.target.value)}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                error={!!errors.description}
                                helperText={errors.description}
                            />
                        </Grid>
                        <Grid item md={8} xs={12}>
                            <Typography variant="h6" component="div">
                                Paso 3: Si tiene evidencia visual, puede subir una imagen en el siguiente apartado:
                            </Typography>
                            <InputImage
                                id="evidence-input"
                                name="evidence"
                                title="Subir imagen de evidencia"
                                accept="image/*"
                                isRequired={false}
                                onChange={(file) => setEvidence(file)}
                            />
                        </Grid>
                        <Grid item md={8} xs={12}>
                            <Typography variant="h6" component="div">
                                Paso 4: Seleccione la ubicación del problema en el mapa.
                            </Typography>
                            <div style={{ height: '400px', width: '100%' }}>
                                <MapComponent onMarkerSet={handleSelectLocation} />
                            </div>
                        </Grid>
                        <Grid item md={8} xs={12}>
                            <Typography variant="h6" component="div">
                                Paso 5: Seleccione la categoría adecuada para su denuncia.
                            </Typography>
                            <FormControl fullWidth error={!!errors.category}>
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
                                {errors.category && <Typography color="error">{errors.category}</Typography>}
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Box display="flex" justifyContent="center" sx={{ mt: 4 }}>
                        <Button type="submit" variant="contained" text="Enviar"/>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default FormDenuncias;
