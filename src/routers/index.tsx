import { Navigate, useRoutes } from 'react-router-dom';
import { RouteObject } from '@/routers/interface';
import Login from '@/pages/login';

const metaRouters: Record<
  string,
  {
    [key: string]: any;
  }
> = import.meta.glob('./modules/*.tsx', { eager: true });

export const routerArray: RouteObject[] = [];

Object.keys(metaRouters).forEach((item) => {
  Object.keys(metaRouters[item]).forEach((key: any) => {
    routerArray.push(...metaRouters[item][key]);
  });
});

export const rootRouter: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/login" />,
  },
  {
    path: '/login',
    element: <Login />,
    meta: {
      requiresAuth: false,
      title: 'Login',
      key: 'login',
    },
  },
  ...routerArray,
  {
    path: '*',
    element: <Navigate to="/sample" />,
  },
];

const Router = () => {
  const routes = useRoutes(rootRouter);
  return routes;
};

export default Router;
