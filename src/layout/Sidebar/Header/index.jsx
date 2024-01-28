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
				// justifyContent: 'space-between',
				width: '100%',
				// 		`@media(min-width: ${theme.breakpoints.values.lg}px)`: {
				// 	left: theme.sidebar.width ,
				// width: 'auto',
				// 	},
				// boxShadow:
				// 	theme.palette.mode === 'dark'
				// 		? `0 1px 0 ${alpha(
				// 			lighten(theme.colors.primary.main, 0.7),
				// 			0.15
				// 		)}, 0px 2px 8px -3px rgba(0, 0, 0, 0.2), 0px 5px 22px -4px rgba(0, 0, 0, .1)`
				// 		: `0px 2px 8px -3px ${alpha(
				// 			theme.colors.alpha.black[100],
				// 			0.2
				// 		)}, 0px 5px 22px -4px ${alpha(
				// 			theme.colors.alpha.black[100],
				// 			0.1
				// 		)}`
				[breakpoints.up('md')]: {
					padding: theme.spacing(0, 2)
				}
			}}>
			<Box sx={{
				display: 'none',
				width: sidebar.width,
				height: header.height,
				[breakpoints.up('lg')]: {
					display: 'block'
				}
			}}>
				<Box
					sx={{
						maskImage: 'url(/static/img/tikee-logotipo.png)',
						maskPosition: 'center',
						maskRepeat: 'no-repeat',
						width: 150,
						height: '100%',
						maskSize: 'contain',
						backgroundColor: primary.main
					}}
				/>
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
								pl: '10px',
								height: '18px'
							},
							'& fieldset': {
								borderRadius: '30px'
							}
						}} />
				</Box>
				<Stack direction='row' spacing={{ xs: 1, md: 2 }} alignItems='center'>
					<IconButton>
						<Badge badgeContent={3} color='primary'>
							<RiNotification2Line color={header.textColor} />
						</Badge>
					</IconButton>
					<IconButton>
						<RiQuestionLine color={header.textColor} />
					</IconButton>
					<IconButton>
						<RiSettings3Line color={header.textColor} />
					</IconButton>
					<IconButton >
						{
							mode === 'dark'
								?
								<RiSunLine color={header.textColor} />
								:
								<RiMoonLine color={header.textColor} />
						}
					</IconButton>
				</Stack>
				<Stack direction='row' spacing={1} alignItems='center'>
					<Typography fontWeight='500' variant='h4' display={{ xs: 'none', md: 'block' }}>Dario Gonzalez</Typography>
					<Avatar sx={{
						backgroundColor: primary.main
					}}>
						DG
					</Avatar>
					<Box pl={{ xs: 1, md: 4 }}>
						<IconButton>
							<RiMenu3Fill color={header.textColor} />
						</IconButton>
					</Box>
				</Stack>
			</Box>
		</Box>
	)
}

export default Header