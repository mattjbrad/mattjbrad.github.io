import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './NavItem.css';

export default (props) => {
  return (
    <li className={classes.NavItem}>
        <NavLink exact activeClassName={classes.active} to={props.link}>
            {props.children}
        </NavLink>
    </li>
  )
}
