import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import TitleUpdater from './TitleUpdater';
import routes from './routes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';

function App() {
  const location = useLocation();
  
  const getAllPaths = (routesArray) => {
    const paths = [];
    routesArray.forEach(route => {
      paths.push(route.path);
      if (route.children) {
        route.children.forEach(child => {
          if (child.index) {
            paths.push(route.path);
          } else if (child.path) {
            paths.push(`${route.path}/${child.path}`);
          }
        });
      }
    });
    return paths.filter(Boolean);
  };
  
  const allPaths = getAllPaths(routes);
  if (!allPaths.includes('/')) {
    allPaths.push('/');
  }
  
  const shouldRenderNavbar = allPaths.some(path => 
    location.pathname === path || location.pathname.startsWith(`${path}/`)
  );

  return (
    <>
      {shouldRenderNavbar && <Navbar />}
      
      <TitleUpdater />
      
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}>
            {route.children && route.children.map((child, childIndex) => (
              <Route 
                key={childIndex} 
                index={child.index} 
                path={child.path} 
                element={child.element} 
              />
            ))}
          </Route>
        ))}
        
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
