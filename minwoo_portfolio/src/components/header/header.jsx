import React from 'react';
import style from './header.module.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import About from '../about/about';
import Project from '../project/project';
import Contact from '../contact/contact';
import Main from '../main/main';

const Header = () => {
  return (
  <Router>
    <div className={style.header}>
      <Link to="/">
        <p className={style.content}>Home</p>
      </Link>
      <Link to="/about">
        <p className={style.content}>About</p>
      </Link>
      <Link to="/project">
        <p className={style.content}>Project</p>
      </Link>
      <Link to="/contact">
        <p className={style.content}>Contact</p>
      </Link>
    </div>
    <Switch>
    <Route exact path="/">
        <Main/>
      </Route>
      <Route path="/about">
        <About/>
      </Route>  
      <Route path="/project">
        <Project/>
      </Route>  
      <Route path="/contact">
        <Contact/>
      </Route>  
    </Switch>
  </Router>  
  );
};

export default Header;