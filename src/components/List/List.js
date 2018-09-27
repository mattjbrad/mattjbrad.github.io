import React from 'react'
import ListedDog from './ListedDog/ListedDog';
import classes from './List.css';

export default (props) => {

    let leaderboard = props.leaderboard.map((dog, index) => {
        return <ListedDog name={dog.name} image={dog.image} age={dog.age} index={index} score={dog.score} />
    });

    console.log(leaderboard);

    return (
        <ol className={classes.List}>
            <div className={classes.left}>
                {leaderboard.slice(0, 5)}
            </div>
            <div className={classes.right}>
                {leaderboard.slice(5, 10)}
            </div>
        </ol>
    )
}
