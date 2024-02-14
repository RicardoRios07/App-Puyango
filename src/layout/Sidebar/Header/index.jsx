import React from 'react'

import {
	Avatar,
	Badge,
	Box,
	IconButton,
	Stack,
	TextField,
	Typography,
	useTheme
} from '@mui/material'
import {
	RiMenu3Fill,
	RiMoonLine,
	RiNotification2Line,
	RiQuestionLine,
	RiSearch2Line,
	RiSettings3Line,
	RiSunLine
} from '@remixicon/react'


const Header = () => {

	const theme = useTheme()
	const {
		palette: { mode },
		colors: { primary },
		sidebar,
		header,
		spacing,
		breakpoints
	} = theme


	return (
		<Box
			className="header"
			display="flex"
			alignItems="center"
			sx={{
				height: header.height,
				color: header.textColor,
				padding: 0,
				right: 0,
				zIndex: 6,
				backgroundColor: header.background,
				backdropFilter: 'blur(3px)',
				position: 'fixed',
				width: '100%',

				[breakpoints.up('md')]: {
					padding: theme.spacing(0, 2)
				}
			}}>
			<Box sx={{
				display: 'none',
				width: 300,
				height: header.height,
				[breakpoints.up('lg')]: {
					display: 'block'
				}
			}}>
				{/* <Box
					sx={{
						maskImage: 'url(/img/tikee-h-blanco.png)',
						maskPosition: 'center',
						maskRepeat: 'no-repeat',
						width: 150,
						height: '100%',
						maskSize: 'contain',
						backgroundColor: primary.main
					}}
				/> */}
			</Box>
			<Box sx={{
				padding: spacing(0, 2),
				display: 'flex',
				justifyItems: 'center',
				justifyContent: 'space-between',
				flex: 1,
				height: '100%'
			}}>
				<Box
					sx={{
						display: 'none',
						[breakpoints.up('md')]: {
							display: 'flex',
							alignItems: 'center',
							width: '35em'
						}
					}}>
					<TextField
						fullWidth
						placeholder='Buscar'
						InputProps={{
							startAdornment: <RiSearch2Line color={header.textColor} />
						}}
						sx={{
							backgroundColor: mode === 'light' && '#f0f2f8',
							borderRadius: '30px',
							'& input': {
								pl: '0px',
								height: '18px'
							},
							'& fieldset': {
								borderRadius: '30px'
							}
						}} />
				</Box>
				<Stack direction='row' alignItems='center'>
					<IconButton>
						<Badge badgeContent={10} color='primary'>
							<RiNotification2Line color={header.textColor} />
						</Badge>
					</IconButton>
				</Stack>
				<Stack direction='row' spacing={10} alignItems='center'>
					<Typography fontWeight='500' variant='h4'>Dario Gonzalez</Typography>
					<Avatar sx={{
						backgroundColor: primary.main
					}}>
						DG
					</Avatar>
				</Stack>
			</Box>
		</Box>
	)
}

export default Header