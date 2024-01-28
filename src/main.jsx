import React from 'react'
import ReactDOM from 'react-dom/client'

import { HelmetProvider } from 'react-helmet-async'

import ThemeProviderWrapper from './theme/ThemeProvider'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<HelmetProvider>
			<ThemeProviderWrapper>
				<App />
			</ThemeProviderWrapper>
		</HelmetProvider>
	</React.StrictMode>,
)
