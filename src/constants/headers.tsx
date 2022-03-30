import { Header } from "../models/header";

export const productHeaders: Header = {
	cpu: [
		{
			key: 'type', title: 'Type',
		},
		{
			key: 'brand', title: 'Brand',
		},
		{
			key: 'cores', title: 'Cors',
		},
		{
			key: 'model', title: 'Model',
		},
		{
			key: 'base_speed', title: 'Base Speed',
		},
		{
			key: 'price', title: 'Price ($)',
		}
	],
	motherboard: [
		{
			key: 'type', title: 'Type',
		},
		{
			key: 'brand', title: 'Brand',
		},
		{
			key: 'chipset', title: 'Chipset',
		},
		{
			key: 'model', title: 'Model',
		},
		{
			key: 'socket_type', title: 'Socket Type',
		},
		{
			key: 'price', title: 'Price ($)',
		}
	],
	ram: [
		{
			key: 'type', title: 'Type',
		},
		{
			key: 'brand', title: 'Brand',
		},
		{
			key: 'size', title: 'Size',
		},
		{
			key: 'model', title: 'Model',
		},
		{
			key: 'ram_type', title: 'Ram Type',
		},
		{
			key: 'price', title: 'Price ($)',
		}
	],
};