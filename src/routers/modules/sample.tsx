import type { RouteObject } from '@/routers/interface';
import { LayoutIndex } from '@/routers/constant';
import Sample from '@/pages/sample';

const router: Array<RouteObject> = [
  {
    element: <LayoutIndex />,
    meta: {
      title: 'Sample',
    },
    children: [
      {
        path: '/sample',
        element: <Sample />,
        meta: {
          requiresAuth: false,
          title: 'Sample',
          key: 'sample',
        },
      },
    ],
  },
];

export default router;
