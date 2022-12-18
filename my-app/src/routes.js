import Admin from './pages/admin';
import {ADMIN_ROUTE, BASKET_ROUTE, SHOP_ROUTE, BOOK_ROUTE, LOGIN_ROUTE, REGISTRATIONS_ROUTE} from './utils/consts';
import Basket from './pages/Basket';
import Shop from './pages/shop';
import Auth from './pages/auth';
import BookPage from './pages/BookPage';

 export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
 ]

 export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATIONS_ROUTE,
        Component: Auth
    },
    {
        path: BOOK_ROUTE + '/:id',
        Component: BookPage
    },

 ]