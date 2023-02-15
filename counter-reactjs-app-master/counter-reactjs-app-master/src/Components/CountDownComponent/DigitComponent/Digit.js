import React from 'react'
import css from './Digit.css'

const Digit = (props) => {
	return (
		<div className="Digit mx-3 text-center" style={{ borderColor: props.color }}>
			<h1 className="display-2 py-3 style={ { border: props.color } }">
				{ props.value < 10 ? `0${props.value}` : props.value }
			</h1>
		</div>
	)
}

export default Digit