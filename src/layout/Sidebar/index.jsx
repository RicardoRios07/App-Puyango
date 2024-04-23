import React from 'react'

import { Box, alpha, lighten, useTheme } from '@mui/material'
import { Outlet } from 'react-router-dom'

import ContentSidebar from './ContentSidebar'
import Header from './Header'

const Sidebar = () => {

	const theme = useTheme()
	const { palette, colors, spacing, sidebar, header, breakpoints } = theme
	const paddingTopBox = Number(header.height.replace('px', '')) + Number(sidebar.paddingTop.replace('px', ''))

	return (
		<>
			<Box
				sx={{
					flex: 1,
					height: '100%',
					'.MuiPageTitle-wrapper': {
						background:
							palette.mode === 'dark'
								? colors.alpha.trueWhite[5]
								: colors.alpha.white[50],
						marginBottom: `${spacing(4)}`,
						boxShadow:
							palette.mode === 'dark'
								? `0 1px 0 ${alpha(
									lighten(colors.primary.main, 0.7),
									0.15
								)}, 0px 2px 4px -3px rgba(0, 0, 0, 0.2), 0px 5px 12px -4px rgba(0, 0, 0, .1)`
								: `0px 2px 4px -3px ${alpha(
									colors.alpha.black[100],
									0.1
								)}, 0px 5px 12px -4px ${alpha(
									colors.alpha.black[100],
									0.05
								)}`
					}
				}}>
				<Header />
				<ContentSidebar />
				<Box
					sx={{
						position: 'relative',
						zIndex: 1,
						display: 'block',
						flex: 1,
						pt: header.height,
						[breakpoints.up('lg')]: {
							ml: sidebar.width,
							pt: 5,
							pb: 10
						}
					}}>
					<Box
						sx={{
							display: 'block',
							p: {
								xs: spacing(0, 0),
								lg: spacing(0, 0)
							},
							'& .MuiGrid-container': {
								[breakpoints.up('lg')]: {
									mt: 5,
									mb: 5,
									ml: 5,
									mr: 0,
								},
								mt: 5,
								mb: 5,
								ml: 5,

							},
							zIndex: 2,
						}}>
						<Outlet />
					</Box>
				</Box>
			</Box>
		</>
	)
}

export default Sidebar