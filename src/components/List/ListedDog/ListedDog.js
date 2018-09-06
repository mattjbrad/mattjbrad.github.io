import React from 'react'
import classes from './ListedDog.css';

export default (props) => {
  return (
      <div className={classes.ListedDog}>
        <li className={classes.ListItem}>
            <div className={classes.DogImage}>
              <img className={classes.Dog} src={props.image} alt="Dog"/>
            </div>
            <div className={classes.DogText}>
              {props.index+1+'.  '}  
              {props.name+', '+props.age+' years old'}
            </div>
        </li>
      </div>
  )
}
