import React, { useEffect, useState } from 'react';
import { Box, IconButton, Stack, Typography, Avatar, Badge, useTheme, Tooltip } from '@mui/material';
import { RiNotification2Line, RiSettings2Line } from '@remixicon/react';
import useFetchData from 'src/hooks/useFetchData';

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
	const [userData, setUserData] = useState(null);
	const { data, error, loading, executeFetch } = useFetchData();

	useEffect(() => {
		executeFetch({ endPoint: 'user/getDetailUser', method: 'GET' });
	}, []);

	useEffect(() => {
		if (!loading && data) {
			setUserData(data.data);
		}
	}, [data, loading]);

	if (loading) {
		return null;
	}

	console.log('userData', userData?.nombreCompleto)

	return (
		<Box
			className="header"
			display="flex"
			alignItems="center"
			sx={{
				...header,
				zIndex: 4,
				backdropFilter: 'blur(10px)',
				position: 'fixed',
				width: '100%',
				paddingRight: spacing(2),
			}}
		>
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
			<Stack direction="row" alignItems="center" spacing={2} flexGrow={1} justifyContent="flex-end">
				{/* <IconButton>
                    <Badge badgeContent={2} color="primary">
                        <RiNotification2Line color={header.textColor} />
                    </Badge>
                </IconButton> */}
				<Tooltip title="Usuario" arrow>
					<Typography fontWeight="500" variant="h4">{userData?.nombreCompleto}</Typography>
				</Tooltip>
				<Tooltip title="Editar Perfil" arrow>
					<IconButton>
						<RiSettings2Line color="primary" />
					</IconButton>
				</Tooltip>
				<Tooltip title="Foto de perfil" arrow>
					<Avatar
						sx={{ backgroundColor: theme.palette.primary.main }}
						alt={userData?.nombreCompleto}
						src={userData?.photo}
					/>
				</Tooltip>
			</Stack>
		</Box>
	);
};

export default Header;
