import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import LoginBarber from './pages/barber/loginBarber';
import DashBarber from "./pages/barber/dashBarber";
import ProtectedRoute from "./components/protectedRoute";

export default function App() {
    const router = createBrowserRouter([{
            path: "/",
            element: <LoginBarber />,
            },{
                path: "/dashboard",
                element: (
                    <ProtectedRoute>
                        <DashBarber />
                    </ProtectedRoute>
                    ),
                },
            ]);

    return <RouterProvider router={router} />;
}