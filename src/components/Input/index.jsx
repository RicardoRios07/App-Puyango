import React from 'react';
import PropTypes from 'prop-types';
import { TextField, useTheme, InputAdornment } from '@mui/material';

const Input = ({ label, type, value, onChange, error, helperText, endAdornment, ...otherProps }) => {
    const theme = useTheme(); 

    const customStyles = {
        '& label.Mui-focused': {
            color: theme.palette.primary.main,
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: theme.palette.primary.main,
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: theme.palette.primary.main,
            },
            '&:hover fieldset': {
                borderColor: theme.palette.primary.main,
            },
            '&.Mui-focused fieldset': {
                borderColor: theme.palette.primary.main,
            },
            '&.Mui-error fieldset': {
                borderColor: theme.palette.error.main,
            },
        },
        '& .MuiFormHelperText-root.Mui-error': {
            color: theme.palette.error.main,
        },
        '& .MuiInputAdornment-root': {
            position: 'absolute',
            right: 0,
        },
    };

    return (
        <TextField
            label={label}
            type={type}
            value={value}
            onChange={onChange}
            error={error}
            helperText={helperText}
            variant="outlined"
            InputLabelProps={{
                style: { color: theme.palette.text.primary },
            }}
            sx={customStyles}
            InputProps={{
                endAdornment: endAdornment && (
                    <InputAdornment position="end">
                        {endAdornment}
                    </InputAdornment>
                ),
            }}
            {...otherProps}
        />
    );
};

Input.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.bool,
    helperText: PropTypes.string,
    endAdornment: PropTypes.node,
};

Input.defaultProps = {
    type: 'text',
    error: false,
    helperText: '',
    endAdornment: null,
};

export default Input;
