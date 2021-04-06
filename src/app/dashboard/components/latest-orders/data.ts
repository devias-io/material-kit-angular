import { v4 as uuid } from 'uuid';

export const orders = [
	{
		id: uuid(),
		amount: 30.5,
		createdAt: 1555016400000,
		customer: {
			name: 'Ekaterina Tankova'
		},
		status: 'pending',
		ref: 'CDD1049'
	},
	{
		id: uuid(),
		amount: 25.1,
		createdAt: 1555016400000,
		customer: {
			name: 'Cao Yu'
		},
		status: 'delivered',
		ref: 'CDD1048'
	},
	{
		id: uuid(),
		amount: 10.99,
		createdAt: 1554930000000,
		customer: {
			name: 'Alexa Richardson'
		},
		status: 'refunded',
		ref: 'CDD1047'
	},
	{
		id: uuid(),
		amount: 96.43,
		createdAt: 1554757200000,
		customer: {
			name: 'Anje Keizer'
		},
		status: 'pending',
		ref: 'CDD1046'
	},
	{
		id: uuid(),
		amount: 32.54,
		createdAt: 1554670800000,
		customer: {
			name: 'Clarke Gillebert'
		},
		status: 'delivered',
		ref: 'CDD1045'
	},
	{
		id: uuid(),
		amount: 16.76,
		createdAt: 1554670800000,
		customer: {
			name: 'Adam Denisov'
		},
		status: 'delivered',
		ref: 'CDD1044'
	}
];
