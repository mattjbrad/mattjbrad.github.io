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
        this.setState({leaderboard : response});
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
