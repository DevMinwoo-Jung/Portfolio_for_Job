import React, { memo } from 'react';
import style from './header.module.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import About from '../about/about';
import Projects from '../projects/projects';
import Contact from '../contact/contact';
import Main from '../main/main';

const Header = memo(() => {
  return (
  <Router>
    <div className={style.header}>
      <Link to="/Portfolio_for_Job/">
        <p className={style.content}>Home</p>
      </Link>
      <Link to="/Portfolio_for_Job/about">
        <p className={style.content}>About</p>
      </Link>
      <Link to="/Portfolio_for_Job/project">
        <p className={style.content}>Project</p>
      </Link>
      <Link to="/Portfolio_for_Job/contact">
        <p className={style.content}>Contact</p>
      </Link>
    </div>
    <Switch>
    <Route exact path="/Portfolio_for_Job/">
        <Main/>
      </Route>
      <Route path="/Portfolio_for_Job/about">
        <About/>
      </Route>  
      <Route path="/Portfolio_for_Job/project">
        <Projects/>
      </Route>  
      <Route path="/Portfolio_for_Job/contact">
        <Contact/>
      </Route>  
    </Switch>
  </Router>  
  );
});

export default Header;