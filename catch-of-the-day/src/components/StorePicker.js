import React from 'react';
import { getFunName } from '../helpers'

class StorePicker extends React.Component {
	myInput = React.createRef();
	goToStore = (event) => {
		// Stop form from submitting
		event.preventDefault();
		// Get storeName from input
		const storeName = this.myInput.current.value;
		// Reroute user to /store/storeName
		this.props.history.push(`/store/${storeName}`);
	}

	render()
	{
		return (
			<form action="" className="store-selector" onSubmit={this.goToStore}>
				<h2>Please Enter a store</h2>
				<input
					type="text"
					ref={this.myInput}
					required
					placeholder="Store Name"
					defaultValue={getFunName()}
				/>
				<button type="submit">Visit Store</button>
			</form>
		)
	}
}

export default StorePicker;
