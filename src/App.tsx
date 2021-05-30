import React from 'react';
import { renderRoutes, RouteConfig } from 'react-router-config';
import { Layout } from 'src/components';

export const App: React.FC<RouteConfig> = ({ route }) => (
  <Layout>{renderRoutes(route.routes)}</Layout>
);

App.displayName = 'App';