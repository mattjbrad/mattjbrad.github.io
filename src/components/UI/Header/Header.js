import React from 'react'
import classes from './Header.css';

export default () => {
  return (
    <div className={classes.Header}>
      {/* <img className={classes.logo} src="/img/large-orange-logo.png"></img> */}
      <h1 className={classes['logo-text']} style={{marginRight:'-20px'}}>rate</h1><img className={classes.logo} src="/img/logo-old.png"></img> <h1 className={classes['logo-text']} style={{marginLeft:'-20px'}}>dog </h1>
      <img className={classes['logo-small']} src="/img/logo-small-notext.png"></img>
    </div>
  )
}
