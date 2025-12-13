import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import Product from './pages/Product'; 
import WebDev from './pages/WebDev';
import Devops from './pages/Devops';

const APP_BASE_TITLE = 'My Awesome App';

const routes = [
  { 
    path: '/', 
    element: <HomePage />, 
    title: `${APP_BASE_TITLE}` 
  },
  { 
    path: '/about', 
    element: <AboutPage />, 
    title: `${APP_BASE_TITLE} | About Us` 
  },
  { 
    path: '/contact', 
    element: <ContactPage />, 
    title: `${APP_BASE_TITLE} | Get In Touch` 
  },
  {
    path: '/products',
    element: <Product />,
    title: `${APP_BASE_TITLE} | Products`,
    children: [
      {
        index: true, 
        element: <h1>Welcome to Products</h1>, 
        title: `${APP_BASE_TITLE} | Product Dashboard` 
      },
      {
        path: 'web-dev',
        element: <WebDev />,
        title: `${APP_BASE_TITLE} | Web Development`
      },
      {
        path: 'devops',
        element: <Devops />,
        title: `${APP_BASE_TITLE} | DevOps`
      },
    ]
  },
];

export default routes;