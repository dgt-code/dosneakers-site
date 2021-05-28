import React from 'react';
import { renderRoutes, RouteConfig } from 'react-router-config';

export const App: React.FC<RouteConfig> = ({ route }) => (
  <React.Fragment>
    {renderRoutes(route.routes)}
  </React.Fragment>
);

App.displayName = 'App';