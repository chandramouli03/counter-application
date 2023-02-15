import React, { Component } from 'react';

class Controller extends Component{
	constructor(props){
		super(props)

		this.state = {
			start: true,
			pause: false,
			lap: false,
			reset: false
		}
	}

	//start handller state
	startHandller(event){
		this.setState({
			...this.state,
			start: false,
			pause: true,
			lap: true
		})

		this.props.start();
	}

	//pause handller state
	pauseHandller(event){
		this.setState({
			...this.state,
			start: true,
			pause: false,
			lap: false,
			reset: true
		})

		this.props.pause();
	}

	lapHandller(){
		this.props.lap();
	}

	resetHandller(event){
		this.setState({
			start: true,
			pause: false,
			lap: false,
			reset: false
		})

		this.props.reset();
	}

	getController(){
		let buttonOutput = null;

		if(this.state.start && !this.state.reset){
			buttonOutput = (
				<div>
					<button className='btn btn-success btn-lg px-5 ml-5'
						onClick={ (event) => this.startHandller(event) }
						>Start
					</button>
				</div>
			)
		}
		else if(this.state.pause && this.state.lap){
			buttonOutput = (
				<div>
					<button className='btn btn-primary btn-lg px-5 ml-5'
						onClick={ (event) => this.pauseHandller(event) }
						>Pause
					</button>

					<button className='btn btn-warning btn-lg px-5 ml-5'
						onClick={ (event) => this.lapHandller(event) }
						>Lap
					</button>
				</div>
			)
		}
		else if(this.state.start && this.state.reset){
			buttonOutput = (
				<div>
					<button className='btn btn-success btn-lg px-5 ml-5'
						onClick={ (event) => this.startHandller(event) }
						>Start
					</button>

					<button className='btn btn-danger btn-lg px-5 ml-5'
						onClick={ (event) => this.resetHandller(event) }
						>Reset
					</button>
				</div>
			)
		}

		return buttonOutput;
	}


	render(){
		return this.getController();
	}
}

export default Controller

