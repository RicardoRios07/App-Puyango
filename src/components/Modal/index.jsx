import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Box, Typography } from '@mui/material';
import Button from './../Button/index'; 

const Modal = ({ open, onClose, onAccept, onReject, title, content }) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <Typography id="modal-title" variant="h6" component="h2" sx={{ mb: 2 }}>
                    {title}
                </Typography>
                <Typography id="modal-description" sx={{ mb: 4 }}>
                    {content}
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button text="Aceptar" variant="contained" color="primary" onClick={onAccept} />
                    <Button text="Rechazar" variant="outlined" color="secondary" onClick={onReject} />
                </Box>
            </Box>
        </Modal>
    );
};

MyModal.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onAccept: PropTypes.func.isRequired,
    onReject: PropTypes.func.isRequired,
    title: PropTypes.string,
    content: PropTypes.string
};

MyModal.defaultProps = {
    title: 'Título del Modal',
    content: 'Contenido del Modal'
};

export default Modal;
