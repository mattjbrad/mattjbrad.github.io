import React, { Component } from 'react'
import List from '../../components/List/List';
import classes from './Leaderboard.css';

export default class Leaderboard extends Component {

  state = {
    leaderboard : []
  }

  componentDidMount = () => {
    fetch('https://woof.ratemy.dog/leaderboard')
      .then(response => response.json())
      .then((response) => {
        console.log(response);
        //duplicationg dogs to make the leaderboard bigger, remove when finished
        let leaderboard = [...response, ...response, ...response, ...response];
        this.setState({leaderboard : leaderboard});
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className={classes.Leaderboard}>
        <List leaderboard={this.state.leaderboard} />
      </div>
    )
  }
}
