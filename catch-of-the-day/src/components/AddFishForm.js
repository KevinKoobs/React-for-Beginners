import React from 'react';

class AddFishForm extends React.Component {

	nameRef = React.createRef();
	priceRef = React.createRef();
	statusRef = React.createRef();
	descRef = React.createRef();
	imageRef = React.createRef();

	createFish = (event) => {
		event.preventDefault();
		// Build a object for Fish
		const Fish = {
			name: this.nameRef.current.value,
			price: parseFloat(this.priceRef.current.value),
			status: this.statusRef.current.value,
			desc: this.descRef.current.value,
			image: this.imageRef.current.value,
		}
		// Update state of App.js
		this.props.addFish(Fish);
		// Refresh form
		event.currentTarget.reset();
	}

	render() {
		return (
			<form action="" className="fish-edit" onSubmit={this.createFish}>
				<input name="name" ref={this.nameRef} type="text" placeholder="Fish name"/>
				<input name="price" ref={this.priceRef} type="text" placeholder="Fish price"/>
				<select name="status" ref={this.statusRef} placeholder="Fish status">
					<option value="available">Fresh</option>
					<option value="unavailable">Sold out</option>
				</select>
				<textarea name="desc" ref={this.descRef} placeholder="Fish description" />
				<input name="image" ref={this.imageRef} type="text" placeholder="Fish image"/>
				<button type="submit">Add Fish</button>
			</form>
		)
	}
}

export default AddFishForm
