import { Global } from '@emotion/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.tsx'
import globalStyles from './styles/globalStyles.ts'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<Global styles={globalStyles} />
			<App />
		</BrowserRouter>
	</StrictMode>
)
