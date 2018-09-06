import React from 'react'
import classes from './Header.css';

export default () => {
  return (
    <div className={classes.Background}>
      <div className={classes.Header}>
        <h1>rate my d<span className={classes.Emoji}>🐶</span>g</h1>
      </div>
      <div>
        <p className={classes.tagline}>Who's a good boy then?</p>
      </div>
    </div>
  )
}
