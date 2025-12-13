import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import routes from './routes';

const findRouteTitle = (pathname, routeArray) => {
  const normalizedPathname = pathname === '/' ? '/' : pathname.replace(/\/$/, '');

  for (const route of routeArray) {
    const normalizedRoutePath = route.path.replace(/\/$/, '');

    if (normalizedRoutePath === normalizedPathname) {
      if (route.children) {
        const indexRoute = route.children.find(child => child.index);
        return indexRoute ? indexRoute.title : route.title;
      }
      return route.title;
    }

    if (route.children && pathname.startsWith(`${normalizedRoutePath}/`)) {
      const childPath = pathname.replace(`${normalizedRoutePath}/`, '');
      const childMatch = route.children.find(child => {
        if (child.index) return childPath === '';
        return child.path && childPath === child.path.replace(/\/$/, '');
      });
      
      if (childMatch) {
        return childMatch.title;
      }
    }
  }

  return null; 
};


function TitleUpdater() {
  const location = useLocation();

  useEffect(() => {
    let title = findRouteTitle(location.pathname, routes);

    if (title) {
      document.title = title;
    } else {
      document.title = 'My Awesome App | Page Not Found';
    }

  }, [location.pathname]);

  return null;
}

export default TitleUpdater;