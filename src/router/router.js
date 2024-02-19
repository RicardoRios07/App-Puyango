import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loader from 'src/components/Loader';
import BaseLayout from 'src/layout/Base';
import SidebarLayout from 'src/layout/Sidebar';

// PAGES
const LoginPage = Loader(lazy(() => import('src/content/pages/Login')));
const RegisterPage = Loader(lazy(() => import('src/content/pages/Registro')));
const AllDenunciasPage = Loader(lazy(() => import('src/content/pages/Denuncias/Listar')));
const MisDenunciasPage = Loader(lazy(() => import('src/content/pages/Denuncias/MisDenuncias')));
const HomePage = Loader(lazy(() => import('src/content/pages/Home')));
const VerificarCuenta = Loader(lazy(() => import('src/content/pages/verificarCuenta')));
const DenunciaFormPage = Loader(lazy(() => import('src/content/pages/Denuncias/Form')));

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
            {
                path: 'verificarCuenta/:token',
                element: <VerificarCuenta />,
            },
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
                path: 'inicio',
                element: <AllDenunciasPage />,
            },
            {
                path: 'misDenuncias',
                element: <MisDenunciasPage />,
            },
            {
                path: 'nuevaDenuncia',
                element: <DenunciaFormPage />,
            },
            {
                path: '*',
                element: <Navigate to="/" replace />,
            },
        ],
    },
    // ... aquí puedes agregar más rutas según sea necesario
];
