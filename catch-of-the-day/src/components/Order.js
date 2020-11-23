import React from "react";
import {formatPrice} from "../helpers";
import {CSSTransition, TransitionGroup} from 'react-transition-group';

class Order extends React.Component {

	renderOrder = (key) => {
		const fish = this.props.fishes[key];
		const amount = this.props.order[key];
		const isAvailable = fish && fish.status === 'available';
		// If there is no fish, return nothing
		if (!fish) {
			return null;
		}

		if (isAvailable) {
			return (
				<CSSTransition classNames="order" key={key} timeout={{enter: 250, exit: 250}}>
					<li key={key}>
						<span>
							<TransitionGroup component="span" className="count">
								<CSSTransition classNames="count" key={amount} timeout={{enter: 250, exit: 250}}>
									<span>{amount}</span>
								</CSSTransition>
							</TransitionGroup>
							lbs
							{fish.name}

							{formatPrice(amount * fish.price)}
							<button onClick={() => this.props.removeFromOrder(key)}>&times;</button>
						</span>
					</li>
				</CSSTransition>
			)
		}
	};

	render()
	{
		const orderIds = Object.keys(this.props.order);
		const total = orderIds.reduce((prevTotal, key) => {
			const fish = this.props.fishes[key];
			const amount = this.props.order[key];
			const available = fish && fish.status === 'available';
			if (available) {
				return prevTotal + (amount * fish.price);
			}
			return prevTotal;
		}, 0);
		return (
			<div className="order-wrap">
				<h2>Your Order</h2>
				<TransitionGroup component="ul" className="order">
					{orderIds.map(this.renderOrder)}
				</TransitionGroup>
				<div className="total">
					Total: <strong>{formatPrice(total)}</strong>
				</div>
			</div>
		)
	}
}

export default Order;
