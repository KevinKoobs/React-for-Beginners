import React from 'react';

class EditFishForm extends React.Component {
	handleChange = event => {
		// Update the fish
		// Take copy of current fish
		const updatedFish = {
			...this.props.fish,
			[event.currentTarget.name]: event.currentTarget.value
		};
		this.props.updateFish(this.props.fishKey, updatedFish);

	}

	render()
	{
		return (
			<div className="fish-edit">
				<input name="name" onChange={this.handleChange} value={this.props.fish.name}
				       type="text" placeholder="Fish name"/>
				<input name="price" onChange={this.handleChange} value={this.props.fish.price}
				       type="text" placeholder="Fish price"/>
				<select name="status" onChange={this.handleChange} value={this.props.fish.status}
				        placeholder="Fish status">
					<option value="available">Fresh</option>
					<option value="unavailable">Sold out</option>
				</select>
				<textarea name="desc" onChange={this.handleChange} value={this.props.fish.desc}
				          placeholder="Fish description"/>
				<input name="image" onChange={this.handleChange} value={this.props.fish.image}
				       type="text" placeholder="Fish image"/>

				<button onClick={() => {this.props.deleteFish(this.props.fishKey)} }>Delete fish</button>
			</div>
		);
	}
}

export default EditFishForm;
