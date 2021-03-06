import React from 'react'
import classes from './ListedDog.css';

export default (props) => {
  return (
      <li className={classes.Li}>
        <div className={classes.ListedDog}>   
          <div className={classes.DogImage}>
            <img className={classes.Thumbnail} src={props.image} alt="Dog"/>
          </div>
          <div className={classes.DogText}>
            <div className={classes.DogName}>
              {props.name}
            </div>
            <div className={classes.DogAge}>
              {props.age+' years old'}
            </div>     
           </div>
        </div>
      </li>
  )
}
