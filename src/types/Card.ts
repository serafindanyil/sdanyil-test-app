export interface TCard {
	serialNumber: number;
	vagonNumber: number;
	date?: string;
	time?: string;
	passagers: number;
	isActive?: boolean;
	className?: string;
}
