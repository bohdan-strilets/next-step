import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import AnalyticsPage from './pages/AnalyticsPage'
import AuthPage from './pages/AuthPage'
import DashboardPage from './pages/DashboardPage'
import GoalsPage from './pages/GoalsPage'
import HabitsPage from './pages/HabitsPage'
import HomePage from './pages/HomePage'
import SettingsPage from './pages/SettingsPage'
import SupportPage from './pages/SupportPage'
import TasksPage from './pages/TasksPage'
import { navigationRoutes } from './utils/data/navigationRoutes'

const App: FC = () => {
	return (
		<Routes>
			<Route path={navigationRoutes.HOME} element={<HomePage />} />
			<Route path={navigationRoutes.AUTH} element={<AuthPage />} />
			<Route path={navigationRoutes.DASHBOARD} element={<DashboardPage />} />
			<Route path={navigationRoutes.TASKS} element={<TasksPage />} />
			<Route path={navigationRoutes.GOALS} element={<GoalsPage />} />
			<Route path={navigationRoutes.HABITS} element={<HabitsPage />} />
			<Route path={navigationRoutes.ANALYTICS} element={<AnalyticsPage />} />
			<Route path={navigationRoutes.SETTINGS} element={<SettingsPage />} />
			<Route path={navigationRoutes.SUPPORT} element={<SupportPage />} />
		</Routes>
	)
}

export default App
