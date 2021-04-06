import { Component } from '@angular/core';
import { products } from './data';
import { formatDistanceToNow } from 'date-fns';

@Component({
	selector: 'mk-latest-products',
	templateUrl: './latest-products.component.html',
	styleUrls: ['./latest-products.component.scss']
})
export class LatestProductsComponent {
	products = products;
	formatDistanceToNow = formatDistanceToNow;
}
