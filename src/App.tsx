import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { ROUTES } from './constants/routes';
import MainLayout from './layout/MainLayout';
import MainPage from './pages/mainPage/mainPage';
import ErrorPage from './pages/errorPage/errorPage';

function App() {
  const routes = createBrowserRouter([
    {
      path: ROUTES.HOME,
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <MainPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
