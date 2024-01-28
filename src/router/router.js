import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loader from 'src/components/Loader';
import BaseLayout from 'src/layout/Base';
import SidebarLayout from 'src/layout/Sidebar';

// PAGES
const LoginPage = Loader(lazy(() => import('src/content/pages/Login')));
const RegisterPage = Loader(lazy(() => import('src/content/pages/Registro')));
const DenunciasPage = Loader(lazy(() => import('src/content/pages/Denuncias')));
const HomePage = Loader(lazy(() => import('src/content/pages/Home')));

// ROUTES
export const routes = [
    {
        path: '/',
        element: <BaseLayout />,
        children: [
            // Ruta base para Home
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: 'login',
                element: <LoginPage />,
            },
            {
                path: 'register',
                element: <RegisterPage />,
            },
            // Redirige cualquier otra ruta no definida a Home
            {
                path: '*',
                element: <Navigate to="/" replace />,
            },
        ],
    },
    {
        path: '/',
        element: <SidebarLayout />,
        children: [
            {
                path: 'denuncias',
                element: <DenunciasPage />,
            },
            // Redirige la ruta "dashboard" a "denuncias" como ejemplo
            {
                path: 'dashboard',
                element: <Navigate to="/denuncias" replace />,
            },
            // Redirige cualquier otra ruta no definida a Home
            {
                path: '*',
                element: <Navigate to="/" replace />,
            },
        ],
    },
    // ... aquí puedes agregar más rutas según sea necesario
];
