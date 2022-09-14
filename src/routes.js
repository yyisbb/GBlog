import {Navigate, useRoutes} from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Blog from './pages/Blog';
import Categories from './pages/Categories'
import Archives from "./pages/Archives";
import About from "./pages/About";
import NotFound from './pages/Page404';
import Post from './pages/Post';

// ----------------------------------------------------------------------

export default function Router() {
    return useRoutes([
        {
            path: '/',
            element: <DashboardLayout/>,
            children: [
                {path: '/', element: <Navigate to="home"/>},
                {path: '/home', element: <Blog/>},
                {path: '/categories', element: <Categories/>},
                {path: '/archives', element: <Archives/>},
                {path: '/about', element: <About/>},
                {path: '/post/:id', element: <Post/>},
            ],
        },
        {
            path: '/',
            element: <LogoOnlyLayout />,
            children: [
                { path: '404', element: <NotFound /> },
                { path: '*', element: <Navigate to="/404" /> },
            ],
        },
    ])

}


