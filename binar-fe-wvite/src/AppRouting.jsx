import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import ToDo from './pages/ToDo'
import Users from './pages/Users'
import BarChart from './pages/BarChart'
import { PieChart } from './pages/PieChart'
import { Provider } from './context/Provider'
import Navbar from './components/navbar'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/todo',
        element: <ToDo />,
    },
    {
        path: '/users',
        element: <Users />,
    },
    {
        path: '/barchart',
        element: <BarChart />,
    },
    {
        path: '/piechart',
        element: <PieChart />,
    },
])

export default function AppRouting() {
    return (
        <Provider>
            <Navbar />
            <RouterProvider router={router} />
        </Provider>
    )
}
