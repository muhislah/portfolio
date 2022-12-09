import React from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import NotFound from './pages/404'
import Dashboard from './pages/Dashboard'
import Message from './pages/Message'
import Profile from './pages/Profile'

const routes = [
	{ path: '/', element: <Dashboard /> },
	{ path: '/profile', element: <Profile /> },
	{ path: '/message', element: <Message /> },
	{ path: '*', element: <NotFound />}
]

const router = createHashRouter(routes, {
	basename: "/portfolio/"
})

const App = () => {
	return (
		<RouterProvider router={router} />
	)
}

export default App
