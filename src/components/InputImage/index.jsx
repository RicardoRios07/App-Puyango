import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Tooltip, Typography, useTheme, IconButton, Box } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import DeleteIcon from '@mui/icons-material/Delete';
import { useInputImage } from 'src/hooks/useInputImage';

const InputImage = ({ id, title, name, accept, isRequired, onChange }) => {
    const { handleLoadImage, loading, src, file, resetImage } = useInputImage();

    const theme = useTheme();
    const { colors } = theme;

    const handleChange = (event) => {
        handleLoadImage(event);
        if (onChange) {
            onChange(event.target.files[0]);
        }
    };

    return (
        <Grid container direction="column" alignItems="center" spacing={2}>
            <Typography variant='h6' align="center" gutterBottom>{title}</Typography>
            <Box display="flex" justifyContent="center" alignItems="center">
                <Box m={2} display="flex" flexDirection="column" alignItems="center">
                    <input
                        id={name}
                        type="file"
                        accept={accept}
                        onChange={handleChange}
                        style={{ display: 'none' }}
                    />
                    <Tooltip arrow title='Subir imagen'>
                        <label htmlFor={name}>
                            <IconButton component="span">
                                <AddPhotoAlternateIcon
                                    color='primary'
                                    sx={{ fontSize: '4em' }}
                                />
                            </IconButton>
                        </label>
                    </Tooltip>
                    {src && (
                        <Tooltip arrow title='Eliminar imagen'>
                            <IconButton onClick={resetImage}>
                                <DeleteIcon
                                    color='error'
                                    sx={{ fontSize: '4em' }}
                                />
                            </IconButton>
                        </Tooltip>
                    )}
                </Box>
                {src && (
                    <Box m={2} display="flex" flexDirection="column" alignItems="center">
                        <Tooltip arrow title='Nueva imagen'>
                            <img
                                src={src}
                                height={100}
                                style={{ background: colors.primary.lighter, borderRadius: '8px' }}
                                alt='Nueva imagen'
                            />
                        </Tooltip>
                    </Box>
                )}
            </Box>
        </Grid>
    );
};

InputImage.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    accept: PropTypes.string,
    isRequired: PropTypes.bool,
    onChange: PropTypes.func,
};

InputImage.defaultProps = {
    accept: '.png, .jpeg, .jpg, .jpe',
    isRequired: false,
};

export default InputImage;
