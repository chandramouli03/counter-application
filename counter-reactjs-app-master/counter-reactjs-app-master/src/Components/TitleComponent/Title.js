import React, { Component } from 'react'
import css from './Title.css'

class Title extends Component {

	constructor(props){
		super(props)

		this.state = {
			title: 'This is dummy Title',
			isInputBox: false
		}

	}

	editHandler(){
		this.setState({
			...this.state,
			isInputBox: true
		})
	}

	inputChange(event){
		this.setState({
			...this.state,
			title: event.target.value
		})
	}

	keyPressHandler(event){
		if(event.key === 'Enter'){
			this.setState({
				...this.state,
				isInputBox: false
			})
		}
	}

	blurhandler(event){
		this.setState({
			...this.state,
			isInputBox: false
		})
	}


	render(){

		let titleOutput = null;

		if(this.state.isInputBox){
			titleOutput = (
				<div className='Title'>
					<input 
						type='text'
						onChange= { (event) => this.inputChange(event) }
						onKeyPress= { (event) => this.keyPressHandler(event) }
						onBlur = { (event) => this.blurhandler(event) }
						className='form-control' 
						value={ this.state.title } 
					/>
				</div>
			)
		}
		else{
			titleOutput = (
				<div className='d-flex Title'>
					<h1 className='display-4'>{ this.state.title }</h1>
					<span onClick={ () => this.editHandler() } className='ml-auto editIcon'>
						<i className="fas fa-pencil-alt"></i>
					</span>
				</div>
			)
		}


		return (
			<div>
				{ titleOutput }
			</div>
		)
	}
}

export default Title;