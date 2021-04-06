import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Product } from './models/product.model';
import { products } from './data';

@Component({
	selector: 'mk-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
	products: Product[] = products;

	constructor(private title: Title) {}

	ngOnInit(): void {
		this.title.setTitle('Product List | Material Kit');
	}
}
