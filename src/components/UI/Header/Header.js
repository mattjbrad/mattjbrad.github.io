import React from 'react'
import classes from './Header.css';

export default () => {
  return (
    <div>
    <div className={classes.Header}>
      <h1>Rate My D<img src="dog2.png" alt="o" height="50" width="50"/>g</h1>
    </div>
    <div>
      <p className={classes.tagline}>Who's a good boy then?</p>
    </div>
    </div>
  )
}
