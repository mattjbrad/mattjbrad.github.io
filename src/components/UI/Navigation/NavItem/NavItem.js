import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './NavItem.css';

export default (props) => {
  console.log(props.children);

  return (
    <li className={classes.NavItem}>
        <NavLink exact activeClassName={classes.active} to={props.link}>
          <span className={classes.Icon}>{props.children[0]}</span>
          <span className={classes.Text}>{props.children[1]}</span>
        </NavLink>
    </li>
  )
}
