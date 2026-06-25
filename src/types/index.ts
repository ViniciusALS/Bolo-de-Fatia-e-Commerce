export interface User {
	id?: number;
	firstName?: string;
	lastName?: string;
	email?: string;
	telephone?: string;
	password?: string;
	passwordConfirmation?: string;
}

export interface Product {
	id: number;
	name: string;
	price: number;
	imagePath: string;
	isFavorite?: boolean;
}
