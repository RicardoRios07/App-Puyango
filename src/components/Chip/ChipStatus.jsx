import React from 'react'
import PropTypes from 'prop-types'
import { Chip } from '@mui/material'

const ChipStatus = ({ text, color, icon, ...rest }) => {

    return (
        <Chip
            label={text}
            direction='row'
            icon={icon}
            sx={{
                backgroundColor: (theme) => theme.colors[color].lighter,
                color: (theme) => theme.colors[color].main,
                border: '1px solid',
                '& svg': {
                    color: (theme) => `${theme.colors[color].main} !important`,
                    width: '20px',
                    height: '20px',
                },
            }}
            {...rest}
        />
    )
}

ChipStatus.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.oneOf(['primary', 'secondary', 'info', 'warning', 'error', 'success']).isRequired,
    icon: PropTypes.node
}

export default ChipStatus