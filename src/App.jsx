import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import LoginBarber from './pages/barber/loginBarber'
import DashBarber from "./pages/barber/dashBarber"
import ProtectedRoute from "./components/barber/protectedRoute"
import Sidebar from "./components/barber/sidebar"

export default function App() {
    const router = createBrowserRouter([{
            path: "/",
            element: <LoginBarber />,
            },{
                path: "/dashboard",
                element: (
                    <ProtectedRoute>
                        {(user) => (
                            <Sidebar user={user}/>
                        )}
                        </ProtectedRoute>
                    ),
                },
            ])

    return <RouterProvider router={router} />
}