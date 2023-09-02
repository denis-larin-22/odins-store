import { createHashRouter } from 'react-router-dom';
import { CatalogPage, MainPage, ProductPage } from '../../pages';
import NotFound from '../../pages/NotFound';

export const routes = createHashRouter([
    {
        path: '/',
        element: <MainPage/>,
        errorElement: <NotFound/>
    },
    {
        path: '/catalog',
        element: <CatalogPage/>,
    },
    {
        path: '/product',
        element: <ProductPage />,
    }
])