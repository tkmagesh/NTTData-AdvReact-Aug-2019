import React, { Component, useState } from 'react';

let Spinner = () => {
	const [value, setValue] = useState(0);
	return(
		<section>
			<h1>Spinner</h1>
			<hr/>
			<input type="button" value="Decrement" onClick={evt => setValue(value-1)}/>
			<span> [ {value} ] </span>
			<input type="button" value="Increment" onClick={evt => setValue(value+1)}/>
		</section>
	);
}

/*class Spinner extends Component{
	state = { value : 0 };
	updateState = (delta) => {
		this.setState({ value : this.state.value + delta });
	}
	render(){
		return(
			<section>
				<h1>Spinner</h1>
				<hr/>
				<input type="button" value="Decrement" onClick={evt => this.updateState(-1)}/>
				<span> [ {this.state.value} ] </span>
				<input type="button" value="Increment" onClick={evt => this.updateState(1)}/>
			</section>
		)
	}
}*/

export default Spinner;