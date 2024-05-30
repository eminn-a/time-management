import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import CreateUser from './components/auth/CreateUser';
import Login from './components/auth/Login';
import RootLayout from './components/layout/RootLayout';
import UsersDashboard from './components/UsersDashboard/UsersDashboard';

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <RootLayout />,
            errorElement: <h1>error</h1>,
            children: [
                {
                    index: true,
                    element: <h1>Home Page</h1>,
                },
                {
                    path: 'auth',
                    children: [
                        {
                            path: 'login',
                            element: <Login />,
                        },
                        {
                            path: 'create-user',
                            element: <CreateUser />,
                        },
                    ],
                },
                {
                    path: 'users',
                    element: <UsersDashboard />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
