import React from 'react'
import classes from './Navigation.css';
import NavItem from './NavItem/NavItem';

export default () => {
  return (
    <ul className={classes.Navigation}>
      <NavItem link="/">Rate</NavItem>
      <NavItem link="/leaderboard">Leaderboard</NavItem>
      <NavItem link="/upload">Upload</NavItem>
    </ul>
  )
}
