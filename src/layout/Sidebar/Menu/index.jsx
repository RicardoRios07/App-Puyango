import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { RiHome4Line, RiFileEditLine, RiStackLine, RiPieChart2Line, RiQuestionLine } from '@remixicon/react';
import GadImage from '/img/LogoGadBlanco.png';

const Menu = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'space-between', // Space between items
				height: '100%', // Full height of the sidebar
				width: '100%', // Full width of the sidebar
				bgcolor: '#23A338', // Sidebar background color
				py: 8, // Padding top and bottom
				'& .MuiButton-root': {
					backgroundColor: 'transparent',
					display: 'flex',
					flexDirection: 'column', // Stack icon and text vertically
					alignItems: 'center', // Center align items
					fontSize: '16px',
					width: '100%', // Button full width
					py: 2, // Padding top and bottom
					color: '#FFFFFF', // Text color
					textTransform: 'none', // No uppercase transformation
					'&.active': {
						backgroundColor: 'rgba(255, 255, 255, 0.2)', // Active item background color
					},
					'&:hover': {
						backgroundColor: 'rgba(255, 255, 255, 0.1)', // Hover background color
					},
					'& .MuiButton-startIcon': {
						m: 0, // Remove margin from the icon
						marginBottom: 1, // Space between icon and text
					},
				},
				'img': {
					maxWidth: '80%',
					maxHeight: '100px',
					marginBottom: 4, // Space below the logo
				},
			}}
		>
			<img src={GadImage} alt="Logo" />
			<Button
				component={NavLink}
				to='/inicio'
				startIcon={<RiHome4Line />}
				activeclassname="active"
			>
				Inicio
			</Button>
			<Button
				component={NavLink}
				to='/nuevaDenuncia'
				startIcon={<RiFileEditLine />}
				activeclassname="active"
			>
				Nueva Denuncia
			</Button>
			<Button
				component={NavLink}
				to='/misDenuncias'
				startIcon={<RiStackLine />}
				activeclassname="active"
			>
				Mis Denuncias
			</Button>
			{/* <Button
				component={NavLink}
				to='/analytics'
				startIcon={<RiPieChart2Line />}
				activeClassName="active"
			>
				Analytics
			</Button>
			<Button
				component={NavLink}
				to='/help'
				startIcon={<RiQuestionLine />}
				activeClassName="active"
			>
				Ayuda
			</Button> */}
		</Box>
	);
};

export default Menu;
