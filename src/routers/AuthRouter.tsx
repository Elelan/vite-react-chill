import { useLocation, Navigate } from 'react-router-dom';

import { useAppSelector } from '@/hooks';
import { rootRouter } from '@/routers';
import type { RouteObject } from '@/routers/interface';

export const searchRoute = (path: string, routes: RouteObject[] = []): RouteObject => {
  let result: RouteObject = {};
  for (const item of routes) {
    if (item.path === path) return item;
    if (item.children) {
      const res = searchRoute(path, item.children);
      if (Object.keys(res).length) result = res;
    }
  }
  return result;
};

const AuthRouter = ({ children }: { children: JSX.Element }) => {
  const { token } = useAppSelector((state) => state.global);

  const { pathname } = useLocation();
  const route = searchRoute(pathname, rootRouter);

  // * 判断当前路由是否需要访问权限(不需要权限直接放行)
  if (!route.meta?.requiresAuth) return children;

  // * 判断是否有Token
  if ((!token || token.length === 0) && pathname !== '/login')
    return <Navigate to="/login" replace />;

  // * 当前账号有权限返回 Router，正常访问页面
  return children;
};

export default AuthRouter;
