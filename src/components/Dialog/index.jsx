import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, useTheme } from '@mui/material';
import SuspenseLoader from '../SuspenseLoader';
import { RiCloseFill } from '@remixicon/react';

const DialogCustom = styled(Dialog)(({ theme }) => ({
	'& .MuiDialogContent-root': {
		padding: theme.spacing(2),
	},
	'& .MuiDialogActions-root': {
		padding: theme.spacing(1),
	},
	'.MuiDialog-paper': {
		[theme.breakpoints.up('md')]: {
			maxWidth: '60%',
			minWidth: '40%',
			maxHeight: '90%'
		},
		[theme.breakpoints.down('md')]: {
			maxWidth: '100%',
			minWidth: '100%',
			maxHeight: '50%'
		},
	},
}));

const DialogTitleWrapper = ({ children, onClose, ...rest }) => {
	const theme = useTheme()
	return (
		<DialogTitle sx={{ m: 0, p: 2 }} {...rest}>
			{children}
			{
				onClose
					?
					(
						<IconButton
							onClick={onClose}
							sx={{
								position: 'absolute',
								right: 8,
								top: 8,
							}}>
							<RiCloseFill color={theme.colors.primary.main} />
						</IconButton>
					)
					:
					null
			}
		</DialogTitle>
	)
}

DialogTitleWrapper.propTypes = {
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	onClose: PropTypes.func.isRequired
}
const DialogWrapper = (
	{
		isOpen,
		handleClose,
		title,
		isDividers,
		content,
		btnActionFirst,
		btnLabelFirst,
		isBtnDisabledFirst,
		btnFormFirst,
		btnLabelSecond,
		btnActionSecond,
		isLoading,
		className,
		isLoadingButton,
		isCenterButtons,
		minWidth
	}) => {
	return (
		<DialogCustom
			onClose={handleClose}
			aria-labelledby="dialog-title"
			open={isOpen}
			className={className}
			sx={{
				'.MuiDialog-paper': {
					minWidth,
				}
			}
			} >
			{
				(isOpen && isLoading)
					?
					<>
						<DialogContent dividers={isDividers}>
							<Grid container height={'100px'}>
								<SuspenseLoader />
							</Grid>
						</DialogContent>
					</>
					:
					<>
						{
							title
							&&
							<DialogTitleWrapper id="dialog-title" onClose={handleClose}>
								{title}
							</DialogTitleWrapper>
						}
						{
							isOpen
							&&
							<DialogContent dividers={isDividers}>
								{content}
							</DialogContent>
						}
						{
							isLoadingButton
								?
								<Grid container height={'100px'}>
									<SuspenseLoader position='initial' />
								</Grid>
								:
								<>
									{
										(btnLabelSecond || btnLabelFirst)
										&&
										<DialogActions sx={{ justifyContent: `${isCenterButtons ? 'center' : 'flex-end'}` }}>
											{
												btnLabelSecond
												&&
												<Button
													size="large"
													variant="outlined"
													color='secondary'
													onClick={btnActionSecond}
													sx={{
														mr: btnLabelFirst ? 4 : 0,
														maxWidth: '230px',
														minWidth: '130px'
													}}>{btnLabelSecond}</Button>
											}
											{
												btnLabelFirst
												&&
												<Button
													size="large"
													variant="contained"
													onClick={btnActionFirst}
													form={btnFormFirst}
													type={btnFormFirst ? 'submit' : 'button'}
													disabled={isBtnDisabledFirst}
													sx={{
														ml: 0,
														maxWidth: '230px',
														minWidth: '130px'
													}}>{btnLabelFirst}</Button>
											}
										</DialogActions>
									}
								</>
						}
					</>
			}
		</DialogCustom >
	);
}


DialogWrapper.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
	title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	isDividers: PropTypes.bool,
	content: PropTypes.node.isRequired,
	btnActionFirst: PropTypes.func,
	btnLabelFirst: PropTypes.string,
	isBtnDisabledFirst: PropTypes.bool,
	btnFormFirst: PropTypes.string,
	btnActionSecond: PropTypes.func,
	btnLabelSecond: PropTypes.string,
	isLoading: PropTypes.bool,
	isLoadingButton: PropTypes.bool,
	isCenterButtons: PropTypes.bool,
	minWidth: PropTypes.string
}

DialogWrapper.defaultProps = {
	title: ' ',
	isDividers: true,
	isLoading: false,
	isLoadingButton: false,
	isBtnDisabledFirst: false,
	isCenterButtons: false,
	minWidth: '40%'
}


export default DialogWrapper

