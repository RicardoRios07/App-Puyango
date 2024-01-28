import React from 'react';
import PropTypes from 'prop-types';
import { Button as MuiButton } from '@mui/material';

const Button = ({ text, variant, color, onClick, ...otherProps }) => {
    return (
        <MuiButton
            variant={variant}
            color={color}
            onClick={onClick}
            {...otherProps}
        >
            {text}
        </MuiButton>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
    color: PropTypes.oneOf(['default', 'inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning']),
    onClick: PropTypes.func
};

Button.defaultProps = {
    variant: 'contained',
    color: 'primary',
    onClick: () => { }
};

export default Button;
