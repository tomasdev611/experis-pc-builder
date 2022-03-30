export interface Item {
	id: number,
	type: string,
	brand: string,
	model: string,
	price: number,
	cores?: number,
	base_speed?: string,
	chipset?: string,
	socket_type?: string,
	size?: string,
	ram_type?: string,
	count: number,
}