import React from 'react'
import classes from './DogCard.css';

export default (props) => {
  return (
      <div id={props.id} className={classes.DogCard} onClick={props.selected}>
            <img className={classes.Img} src={props.image} alt={props.alt} />
            <p className={classes.Description}><span className={classes.Name}>{props.name}. </span>{props.age} years old</p>
      </div>
  )
}
