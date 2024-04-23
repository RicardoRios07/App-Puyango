import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Tooltip, Typography, useTheme } from '@mui/material'
import { useInputImage } from 'src/hooks/useInputImage'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import DeleteIcon from '@mui/icons-material/Delete';


const InputImage = ({ id, title, name, defaultImg, accept, isRequired }) => {
	const { handleLoadImage, loading, src, resetImage } = useInputImage()
	// useEffect(() => {
	// 	onChange()
	// }, [src])

	const theme = useTheme()
	const { colors } = theme

	return (
		<Grid item >
			<Grid container>
				<Typography variant='h6'>{title}</Typography>
			</Grid>
			<Grid container justifyContent={'space-evenly'} >
				<Grid item>
					<Tooltip arrow title='Imagen guardada'>
						<img
							src={defaultImg}
							width="100%"
							style={{ background: colors.primary.lighter, maxWidth: '200px', margin: '0 auto' }}

							alt='' />
					</Tooltip>
				</Grid>
				<Grid item>
					<input
						id={name}
						type="file"
						accept={accept}
						onChange={handleLoadImage}
						style={{ display: 'none' }} />
					<Grid container direction={'column'} justifyContent={'center'} height={'100%'}>
						<Grid item>
							<Tooltip arrow title='Subir imagen'>
								<label htmlFor={name}>
									<AddPhotoAlternateIcon
										color='primary'
										cursor={'pointer'}
										sx={{ fontSize: '4em !important' }} />
								</label>
							</Tooltip>
						</Grid>
						<Grid item>
							{
								src.length > 0
								&&
								<Tooltip arrow title='Eliminar imagen'>
									<DeleteIcon
										color='error'
										cursor={'pointer'}
										sx={{ fontSize: '4em !important' }}
										onClick={() => { resetImage() }} />
								</Tooltip>
							}
						</Grid>
					</Grid>
				</Grid>
				<Grid item>
					{
						!loading && src.length > 0 &&
						<Tooltip arrow title='Nueva img'>
							<img
								src={src}
								height={100}
								style={{ background: colors.primary.lighter }}
								alt='' />
						</Tooltip>
					}
					<input
						id={id}
						name={name}
						type={'hidden'}
						value={src.length > 0 ? src : defaultImg}
						required={isRequired} />
				</Grid>
			</Grid>
		</Grid>
	)
}

InputImage.propTypes = {
	title: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	name: PropTypes.string,
	defaultImg: PropTypes.string,
	accept: PropTypes.string,
	// onChange: PropTypes.func,
	filterDefault: PropTypes.string,
	isRequired: PropTypes.bool
}

InputImage.defaultProps = {
	accept: '.png, .jpeg, .jpg, .jpe',
	filterDefault: 'horizontal',
	isRequired: false,
	// onChange: () => { }
}

export default InputImage