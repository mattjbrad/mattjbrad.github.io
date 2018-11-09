import React, { Component } from 'react'
import List from '../../components/List/List';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './Leaderboard.css';

export default class Leaderboard extends Component {

  state = {
    leaderboard : [],
    loadingLeaderboard: true
  }

  componentDidMount = () => {
    fetch('https://woof.ratemy.dog/leaderboard')
      .then(response => response.json())
      .then((response) => {
        console.log(response);
        this.setState({leaderboard : response});
        this.setState({loadingLeaderboard: false});
      })
      .catch(err => console.log(err));
  }

  render() {

    let display;
    if(this.state.loadingLeaderboard===true){
      display = <Spinner loadingText='Loading leaderboard...'/>;
    } else {
      display = <List leaderboard={this.state.leaderboard} />;
    }
    return (
      <div className={classes.Leaderboard}>
        {display}
      </div>
    )
  }
}
