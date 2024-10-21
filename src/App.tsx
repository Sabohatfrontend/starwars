import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { ROUTES } from './constants/routes';
import MainLayout from './layout/MainLayout';
import MainPage from './pages/mainPage/mainPage';
import ErrorPage from './pages/errorPage/errorPage';
import CharacterDetails from './pages/characterDetails/characterDetails';

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
        {
          path: '/:id',
          element: <CharacterDetails />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
