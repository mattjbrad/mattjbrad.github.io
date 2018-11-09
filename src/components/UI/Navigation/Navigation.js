import React from 'react'
import classes from './Navigation.css';
import NavItem from './NavItem/NavItem';

export default () => {
  return (
    <ul className={classes.Navigation}>
      <NavItem link="/"><i class="fas fa-dog"></i> Rate</NavItem>
      <NavItem link="/leaderboard"><i class="fas fa-list-ol"></i> Leaderboard</NavItem>
      <NavItem link="/upload"><i class="fas fa-file-upload"></i> Upload</NavItem>
    </ul>
  )
}
