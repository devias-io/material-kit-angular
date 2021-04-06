import { v4 as uuid } from 'uuid';
import { subHours } from 'date-fns';

const now = new Date()

export const products = [
	{
		id: uuid(),
		image: 'assets/images/products/product_1.png',
		name: 'Dropbox',
		updatedAt: subHours(now, 2)
	},
	{
		id: uuid(),
		image: 'assets/images/products/product_2.png',
		name: 'Medium Corporation',
		updatedAt: subHours(now, 2)
	},
	{
		id: uuid(),
		image: 'assets/images/products/product_3.png',
		name: 'Slack',
		updatedAt: subHours(now, 3)
	},
	{
		id: uuid(),
		image: 'assets/images/products/product_4.png',
		name: 'Lyft',
		updatedAt: subHours(now, 5)
	},
	{
		id: uuid(),
		image: 'assets/images/products/product_5.png',
		name: 'GitHub',
		updatedAt: subHours(now, 9)
	}
];
