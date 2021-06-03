import { Redirect } from 'react-router-dom';
import { RouteConfig } from 'react-router-config';
import { App } from 'src/App';
import { Home } from 'src/views';

export const routes: RouteConfig[] = [
  {
    component: App,
    routes: [
      {
        path: '/',
        component: Home,
        exact: true
      },
      {
        path: '*',
        component: () => <Redirect to="/" />
      }
    ]
  }
];
