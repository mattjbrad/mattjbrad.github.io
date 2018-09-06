import React from 'react'
import ListedDog from './ListedDog/ListedDog';
import classes from './List.css';

export default (props) => {

    let dogs = props.leaderboard.map((dog, index) => {
        return <ListedDog name={dog.name} image={dog.image} age={dog.age} index={index} score={dog.score} />
    });

    return (
        <ol className={classes.List}>
            {dogs}
        </ol>
    )
}
