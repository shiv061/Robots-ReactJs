import React, {Component} from 'react';
import CardList from '../containers/CardList';
import {robots} from '../robots';
import SearchBox from '../containers/SearchBox';
import Scroll from '../containers/Scroll';
import '../index.css';

class App extends Component {
		constructor()	{
			super();
			this.state = {
				'robots':[],
				'searchfield': ''
		}
	}
		componentDidMount()	{
			fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users=> {this.setState({'robots':users})})
		}

		onsearchchange = (event) =>	{
			this.setState({searchfield:event.target.value})
			

	}
		render()	{
		const filterered = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
			})
		return (
		<div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchchange={this.onsearchchange} />
            <Scroll>
				<CardList robots={filterered}/>
			</Scroll>
		</div>
	);

	}
	
}

export default App;