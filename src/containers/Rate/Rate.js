
import React, { Component } from 'react'
import classes from './Rate.css';
import DogCard from '../../components/DogCard/DogCard';
import Spinner from '../../components/UI/Spinner/Spinner';

export default class Rate extends Component {
	state = {
		dog_one : {
			name		: null,
			age 		: null,
			image		: null,
			id			: null
		},
		dog_two : {
			name		: null,
			age 		: null,
			image		: null,
			id			:null
		},
		loadingDogs: false,
		winner : null
	}

	componentDidMount = () => {
		this.getNewDogComparison();	
	}

	getNewDogComparison = () => {
		fetch('https://woof.ratemy.dog/comparison')
			.then((response) => {
				this.setState({loadingDogs: true});
				return response.json()
			})
			.then((data) => {
				this.setState({
					dog_one : {
						name : data.dog_one.name,
						age  : data.dog_one.age,
						image: data.dog_one.image,
						id 	 : data.dog_one.id
					},
					dog_two : {
						name : data.dog_two.name,
						age  : data.dog_two.age,
						image: data.dog_two.image,
						id	 : data.dog_two.id
					}
				});
				this.setState({loadingDogs: false})
			})
			.catch(err => console.log(err));
	}

	postWinningDogResult = () => {
		const body = {
			dog_one : this.state.dog_one.id,
			dog_two : this.state.dog_two.id,
			winner 	: this.state.winner
		};
		console.log(body);
		fetch('https://woof.ratemy.dog/comparison', {
			method: 'post',
			body: JSON.stringify(body)
		}).then(response => response.json())
		  .then(response => console.log(response))
		  .catch(err => console.log(err));

	}

	winnerSelectedHandler = (event) => {
		//Choose the winner then once it is set in the state send the winning dog
		this.setState({
			winner: parseInt(event.currentTarget.id, 10)
		}, this.postWinningDogResult);
		//update the dogs for comparison
		this.getNewDogComparison();
	}

	render() {

		//Show the spinner if we are waiting for dogs, otherwise show the cards
		let dogs;
		if (this.state.loadingDogs) {
			dogs = <Spinner loadingText='Finding dogs'/>;
		}
		else { 
			dogs = (
				<div className={classes.Dogs}>
					<div className={classes.Thumbnail}>
						<DogCard 
							image={this.state.dog_one.image} 
							name={this.state.dog_one.name}
							age={this.state.dog_one.age}
							selected={this.winnerSelectedHandler}
							id={this.state.dog_one.id}
						/>
					</div>
					<div className={classes.Thumbnail}>
						<DogCard
							image={this.state.dog_two.image}
							name={this.state.dog_two.name}
							age={this.state.dog_two.age}
							selected={this.winnerSelectedHandler}
							id={this.state.dog_two.id}
						/>
					</div>
				</div>
			)
		}	

		return (
			<div className={classes.Rate}>
				{dogs}
			</div>
		)
	}
}
