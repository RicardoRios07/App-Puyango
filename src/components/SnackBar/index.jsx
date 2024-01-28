import React from 'react'
import PropTypes from 'prop-types'
import { Alert, Snackbar } from '@mui/material'

const SnackBarWrapper = ({ isOpen, duration, handleClose, type, text }) => {

    return (
        <Snackbar
            open={isOpen}
            autoHideDuration={duration}
            onClose={handleClose}
            sx={{ top: '87px !important' }}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
            <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
                {text}
            </Alert>
        </Snackbar>
    )
}

SnackBarWrapper.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    duration: PropTypes.number,
    handleClose: PropTypes.func.isRequired,
    type: PropTypes.string,
    text: PropTypes.string.isRequired
}

SnackBarWrapper.defaultProps = {
    duration: 8000,
    type: 'success'
}

export default SnackBarWrapper