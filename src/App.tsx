import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

/* Pages */
import MenuList from './components/MenuList/MenuList'
import NotFound from './pages/404'
import Blog from './pages/Blog'
import Dashboard from './pages/Dashboard'
import Message from './pages/Message'
import Portfolios from './pages/Portfolios'
import Profile from './pages/Profile'

/* Routes */
const routes = [
	{ path: '/', element: <MenuList><Dashboard /></MenuList> },
    { path: '/portfolios', element: <MenuList><Portfolios /></MenuList>},
	{ path: '/profile', element: <MenuList><Profile /></MenuList> },
	{ path: '/message', element: <MenuList><Message /></MenuList> },
	{ path: '/blog', element: <MenuList><Blog /></MenuList> },
    { path: '*', Element: <MenuList><NotFound /></MenuList>}
]

const router = createBrowserRouter(routes)

const App = () => {
	return (
		<RouterProvider router={router} />
	)
}

export default App
