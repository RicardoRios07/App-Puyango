import React from 'react'
import PropTypes from 'prop-types'

import { Box, Stack, Typography } from '@mui/material'

import AvatarWrapper from 'src/components/AvatarWrapper'

const RenderContentMessage = ({ message, type, icon, variantDescription }) => {
	return (
		<Stack
			direction='column'
			alignItems='center'>
			<Box
				mb={2}
				sx={{
					'& .MuiAvatar-root': {
						p: 0,
						'& svg': {
							width: '50px',
							height: '50px',
						}
					}
				}}>
				<AvatarWrapper color={type} space={10}>
					{icon}
				</AvatarWrapper>
			</Box>
			<Typography variant={variantDescription} textAlign={'center'}>{message}</Typography>
		</Stack>
	)
}

RenderContentMessage.propTypes = {
	message: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	icon: PropTypes.node.isRequired,
	variantDescription: PropTypes.string
}

RenderContentMessage.defaultProps = {
	variantDescription: 'h4'
}

export default RenderContentMessage