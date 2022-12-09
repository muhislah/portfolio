import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './pages/404'
import Dashboard from './pages/Dashboard'
import Message from './pages/Message'
import Profile from './pages/Profile'

const router = createBrowserRouter([
	{ path: '/portfolio', element: <Dashboard /> },
	{ path: '/portfolio/profile', element: <Profile /> },
	{ path: '/portfolio/message', element: <Message /> },
	{ path: '*', element: <NotFound />}

])

const App = () => {
	return (
		<RouterProvider router={router} />
	)
}

export default App
