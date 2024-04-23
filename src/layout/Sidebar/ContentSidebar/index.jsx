import React from 'react'

import {
	Box,
	Button,
	ListItem,
	alpha,
	lighten,
	useTheme
} from '@mui/material'

import { RiLogoutBoxRFill } from '@remixicon/react'

import Menu from '../Menu'
import Scrollbar from 'src/components/Scrollbar'
import { configSession } from 'src/utils/configSession'
import { useNavigate } from 'react-router-dom'

const ContentSidebar = () => {
	const theme = useTheme()
	const { handleRemoveSession } = configSession()
	const navigate = useNavigate()
	return (
		<>
			<Box
				sx={{
					// width: theme.sidebar.width,
					// minWidth: theme.sidebar.width,
					widht:20,
					color: theme.colors.alpha.trueWhite[70],
					zIndex: 10,	
					height: '90%',
					borderRadius: 2,
					position: 'fixed',
					py:10,
					mt:5,
					marginBottom:5,
					boxShadow:2,
					left: 50,
					
					top: 0,
					background:
						theme.palette.mode === 'dark'
							? alpha(lighten(theme.header.background, 0.1), 0.5)
							: theme.colors.primary.main,
				}}>
				<Box position='relative' height='80%' width='100%'>
					<Scrollbar>
						<Menu />
					</Scrollbar>
				</Box>
				<Box height='20%'>
					<ListItem>
						<Button
							fullWidth
							variant='contained'
							onClick={() => {
								handleRemoveSession()
								navigate('/')
							}}
							startIcon={<RiLogoutBoxRFill />}
							sx={{
								backgroundColor: 'transparent',
								position: 'relative',
								fontSize: '16px',
								justifyContent: 'start',
								color: 'white.main'
							}}>
							Cerrar sesión
						</Button>
					</ListItem>
				</Box>
			</Box>
		</>
	)
}

export default ContentSidebar