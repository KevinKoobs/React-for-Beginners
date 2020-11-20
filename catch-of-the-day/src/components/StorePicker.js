import React from 'react';
import { getFunName } from '../helpers'

class StorePicker extends React.Component {
	render()
	{
		return (
			<form action="" className="store-selector">
				<h2>Please Enter a store</h2>
				<input type="text" defaultValue={getFunName()} required placeholder="Store Name"/>
				<button type="submit">Visit Store</button>
			</form>
		)
	}
}

export default StorePicker;
