import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductsToolbarComponent } from './components/products-toolbar/products-toolbar.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [
	{
		path: '',
		component: ProductsComponent
	}
];

@NgModule({
	declarations: [
		ProductCardComponent,
		ProductsToolbarComponent,
		ProductsComponent
	],
	imports: [
		CommonModule,
		SharedModule,
		RouterModule.forChild(routes)
	],
	exports: [RouterModule]
})
export class ProductsModule {}
