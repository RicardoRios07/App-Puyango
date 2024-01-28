import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routes } from './router/router'
import { CssBaseline } from '@mui/material'

const App = () => {
	const router = createBrowserRouter(routes)
	return (
		<>
			<CssBaseline />
			<RouterProvider router={router} />
		</>
	)
}

export default App