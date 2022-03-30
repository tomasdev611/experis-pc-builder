export interface HeaderItem {
	key: string,
	title: string,
}
export interface Header {
	cpu: HeaderItem[],
	motherboard: HeaderItem[],
	ram: HeaderItem[],
}