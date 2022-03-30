import React, { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartCheckFill } from "react-bootstrap-icons"
import { fetchAllItems, addToCart } from "../../store/actions/buildActions";
import { selectItems } from "../../store/selectors/buildSelector";
import { Item } from "../../models/Item";
import { Header, HeaderItem } from "../../models/header";
import { productHeaders } from "../../constants/headers";

function Build() {
	const allItems = useSelector(selectItems);
	const [items, setItems] = useState([]);
	const [selectedPart, setSelectedPart] = useState('cpu');
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAllItems());
	}, [dispatch]);

	useEffect(() => {
		const items = allItems.filter((item: Item) => item.type === selectedPart);
		setItems(items);
	}, [selectedPart, allItems]);

	const addItemToCart = (item: Item) => {
		dispatch(addToCart(item));
	}

	const renderItems = () => {
		const headers = productHeaders[selectedPart as keyof Header];
		return (
			<Table className="text-center">
				<thead>
					<tr>
						<th>No</th>
						{
							headers.map((h: HeaderItem, index: number) => (
								<th key={index}>{h.title}</th>
							))
						}
						<th>Add Product</th>
					</tr>
				</thead>
				<tbody>
					{
						items.map((item: Item, index: number) => (
							<tr key={item.id}>
								<td>{index + 1}</td>
								{
									headers.map((h: HeaderItem) => (
										<td key={item[h.key as keyof Item]}>{item[h.key as keyof Item]}</td>
									))
								}
								<td>
									<Button variant="primary" onClick={() => addItemToCart(item)}>
										Add
									</Button>
								</td>
							</tr>
						))
					}
				</tbody>
			</Table>
		)
	}

  return (
		<div className="d-flex flex-column">
		<h1>Build Page</h1>
			<Link to={`/cart`} className="align-self-end">
				<CartCheckFill size={48} cursor="pointer" />
			</Link>
			<div>
				<Form.Label>Select Custom Part</Form.Label>
				<Form.Select value={selectedPart} onChange={(event: any) => setSelectedPart(event.target.value)}>
					<option value="cpu">CPU</option>
					<option value="motherboard">Motherboard</option>
					<option value="ram">RAM</option>
				</Form.Select>
			</div>
			<div className="mt-3">
				{
					renderItems()
				}
			</div>
		</div>
	);
}

export default Build;