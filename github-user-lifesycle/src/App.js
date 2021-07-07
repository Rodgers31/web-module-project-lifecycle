import React, { Component } from 'react';
import axios from 'axios';
import './index.css';

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
			<section className='section-style'>
				<div>
					<h1>My github User</h1>
					<div>
						<img src={this.state.mygit.avatar_url} alt='' />
						<p className='pmargin'>{this.state.mygit.login}</p>
					</div>
					<section>
						<h1>Followers</h1>
						<div className='followers-style'>
							{this.state.followers.map((follow) => {
								const { login, avatar_url } = follow;
								return (
									<div>
										<p className='pmargin'>{login}</p>
										<img src={avatar_url} alt='' />
									</div>
								);
							})}
						</div>
					</section>
				</div>
			</section>
		);
	}
}
