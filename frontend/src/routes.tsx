import { ROUTES } from '@/constants/routes';

import CartProvider from '@/context/cart/CartProvider';

import Main from '@/domain/main/pages';
import { ProductList, ProductDetail } from '@/domain/product/pages';
import Cart from '@/domain/cart/pages';
import OrderList from '@/domain/order/pages';

import App from './App';
import ToastProvider from './context/toast/ToastProvider';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Main /> },
      {
        path: ROUTES.PRODUCT_LIST,
        element: (
          <CartProvider>
            <ToastProvider>
              <ProductList />
            </ToastProvider>
          </CartProvider>
        ),
      },
      {
        path: ROUTES.PRODUCT_DETAIL,
        element: (
          <CartProvider>
            <ProductDetail />
          </CartProvider>
        ),
      },
      {
        path: ROUTES.CART,
        element: (
          <CartProvider>
            <Cart />
          </CartProvider>
        ),
      },
      { path: ROUTES.ORDER_LIST, element: <OrderList /> },
    ],
  },
];

export default routes;
