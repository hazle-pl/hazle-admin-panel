import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../routes';

const renderRoutes = (routes: any) => {
  return (
    <ul>
      {routes
        .filter((route: any) => route.visible !== false)
        .map((route: any) => (
          <li key={route.name}>
            <Link to={route.path}>{route.name}</Link>
            {route.childs && renderRoutes(route.childs)}
          </li>
        ))}
    </ul>
  );
};

const Header: React.FC = () => {
  return (
    <div className='content-container'>
      <img src='../img/global/logo.svg'/>
      <nav>
        {renderRoutes(routes)}
      </nav>
    </div>
  );
};

export default Header;
