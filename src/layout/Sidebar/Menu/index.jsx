import React from 'react'

import { Box, Button, ListItem } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { RiBankFill, RiHome5Fill } from '@remixicon/react'

const Menu = () => {
	return (
		<Box sx={{
			p: '0 40px 0 0',
			'& .MuiButton-root': {
				backgroundColor: 'transparent',
				position: 'relative',
				fontSize: '16px',
				justifyContent: 'start',
				pl: '50px',
				'&:before': {
					content: '""',
					position: 'absolute',
					width: '6px',
					height: '70%',
					backgroundColor: 'white',
					left: 0,
					borderTopRightRadius: '10px',
					borderBottomRightRadius: '10px',
					display: 'none'
				},
				'&.active': {
					'&:before': {
						display: 'block',
					}
				}
			},
			'& .MuiButton-startIcon': {
				mr: '23px'
			},
			'& .MuiListItem-root': {
				p: '2px 0px'
			}
		}}>
			<ListItem>
				<Button
					fullWidth
					variant='contained'
					component={NavLink}
					to='/dashboard'
					startIcon={<RiHome5Fill />}>
					Inicio
				</Button>
			</ListItem>
			<ListItem>
				<Button
					fullWidth
					variant='contained'
					component={NavLink}
					to='/cooperativas'
					startIcon={<RiBankFill />}>
					Cooperativas
				</Button>
			</ListItem>
		</Box>
	)
}

export default Menu