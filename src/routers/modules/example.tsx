import type { RouteObject } from '@/routers/interface';
import { LayoutIndex } from '@/routers/constant';
import Example from '@/pages/example';

const router: Array<RouteObject> = [
  {
    element: <LayoutIndex />,
    meta: {
      title: 'Example',
    },
    children: [
      {
        path: '/example',
        element: <Example />,
        meta: {
          requiresAuth: false,
          title: 'Example',
          key: 'example',
        },
      },
    ],
  },
];

export default router;
