import React from "react";
import withRouter from "../contexts/routing";
import "./Confirmation.css";

class Confirmation extends React.Component {
	render() {
		const { orderId } = this.props.location.state;

		return (
			<>
				<p id='confirmation-message'>
					Congratulations, your Order { orderId } has been successfully placed<br /> <br/>
					Expect your tacos in 60 minutes or they are on us!
				</p>
				<div id="return">
					<button 
						onClick={() => this.props.navigate('/order/create')}
					>- Place another order</button>
				</div>
				<div id="return">
					<button 
						onClick={() => this.props.navigate('/admin')}
					>- View all orders</button>
				</div>
			</>
		)
	}
}

export default withRouter(Confirmation);
