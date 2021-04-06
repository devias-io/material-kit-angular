import { Component } from '@angular/core';
import { orders } from './data';

@Component({
	selector: 'mk-latest-orders',
	templateUrl: './latest-orders.component.html',
	styleUrls: ['./latest-orders.component.scss']
})
export class LatestOrdersComponent {
	dataSource = orders;

	displayedColumns: string[] = ['ref', 'customer', 'date', 'status'];
}
