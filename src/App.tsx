import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './pages/404'
import Dashboard from './pages/Dashboard'
import Message from './pages/Message'
import Profile from './pages/Profile'

const routes = [
	{ path: '', element: <Dashboard /> },
	{ path: 'profile', element: <Profile /> },
	{ path: 'message', element: <Message /> },
]

const router = createBrowserRouter(routes)

const App = () => {
	return (
		<RouterProvider router={router} />
	)
}

export default App
