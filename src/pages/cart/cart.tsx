import React from "react";
import { Button, Table } from "react-bootstrap";
import { ArrowBarLeft } from "react-bootstrap-icons"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Item } from "../../models/Item";
import { removeFromCart, addToCart, decreaseFromCart } from "../../store/actions/buildActions";
import { selectCartItems } from "../../store/selectors/buildSelector";
import "./cart.scss";

function Cart() {
	const cartItems = useSelector(selectCartItems);
	const dispatch = useDispatch();

	const renderDetails = (item: Item) => {
		if (item.type === 'cpu') {
			return `Cors: ${item.cores}, Base Speed: ${item.base_speed}`;
		}
		if (item.type === 'motherboard') {
			return `Chipset: ${item.chipset}, Socket Type: ${item.socket_type}`;
		}
		if (item.type === 'ram') {
			return `Size: ${item.size}, Ram Type: ${item.ram_type}`;
		}
		return null;
	}

	const removeItemFromCart = (item: any) => {
		dispatch(removeFromCart(item));
	}

	const decreaseItemFromCart = (item: any) => {
		dispatch(decreaseFromCart(item));
	}

	const addItemFromCart = (item: any) => {
		dispatch(addToCart(item));
	}

  return (
		<div className="d-flex flex-column">
			<h1>Cart Page</h1>
			<Link to={'/'} className="align-self-end">
				<ArrowBarLeft size={48} cursor="pointer" />
				Back
			</Link>
			<Table className="text-center">
				<thead>
					<tr>
						<th>No</th>
						<th>Type</th>
						<th>Brand</th>
						<th>Model</th>
						<th>Details</th>
						<th>Price ($)</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{
						cartItems.map((item: any, index: number) => (
							<tr key={item.id}>
								<td>{index + 1}</td>
								<td>{item.type}</td>
								<td>{item.brand}</td>
								<td>{item.model}</td>
								<td>{renderDetails(item)}</td>
								<td>{item.price}</td>
								<td className="action">
									<Button className="btn-cart" onClick={() => decreaseItemFromCart(item)} disabled={item.count === 1}>
										-
									</Button>
									<span className="p-2">{item.count}</span>
									<Button className="btn-cart" onClick={() => addItemFromCart(item)}>
										+
									</Button>
									<Button variant="danger" className="btn-remove" onClick={() => removeItemFromCart(item)}>
										Remove
									</Button>
								</td>
							</tr>
						))
					}
				</tbody>
			</Table>
		</div>
	);
}

export default Cart;