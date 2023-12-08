import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routes from './routes';
import Header from './components/header';


const App: React.FC = () => {

  useEffect(() => {
    const checkDarkTheme = localStorage.getItem('darkTheme') === 'true';

    if (checkDarkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
    
  }, []);

  return (
    <>
      <Router>
        <header>
          <Header/>
        </header>
        <div className='content'>
          <Switch>
            {routes.map((route) => (
              <Route key={route.name} exact path={route.path}>
                <route.component />
              </Route>
            ))}
          </Switch>
        </div>
        <footer>
          footer
        </footer>
        <ToastContainer />
      </Router>
    </>
  );
};

export default App;
