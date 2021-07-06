import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {
	state = {
		mygit: [],
		followers: [],
	};

	componentDidMount() {
		axios
			.get('https://api.github.com/users/Rodgers31')
			.then((res) => {
				console.log('initial response', res);

				this.setState({
					...this.state,
					mygit: res.data,
				});
			})
			.catch((err) => {
				console.log(err);
			});

		axios
			.get('https://api.github.com/users/Rodgers31/followers')
			.then((res) => {
				console.log('initial response', res);

				this.setState({
					...this.state,
					followers: res.data,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		return (
			<div>
				<h1>My github User</h1>
				<div>
					<img src={this.state.mygit.avatar_url} alt='' />
					<p>{this.state.mygit.login}</p>
				</div>
				<div>
					<h1>Followers</h1>
					{this.state.followers.map((follow) => {
						const { login, avatar_url } = follow;

						return (
							<div>
								<p>{login}</p>
								<img src={avatar_url} alt='' />
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
