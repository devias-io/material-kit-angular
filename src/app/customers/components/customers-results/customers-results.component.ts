import {
	AfterViewInit,
	Component,
	Input,
	ViewChild
} from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from '../../models/customer.model';

@Component({
	selector: 'mk-customers-results',
	templateUrl: './customers-results.component.html',
	styleUrls: ['./customers-results.component.scss']
})
export class CustomersResultsComponent implements AfterViewInit {
	@Input() customers: Customer[] = [];

	@ViewChild(MatPaginator) paginator: MatPaginator;

	dataSource = new MatTableDataSource<Customer>();

	displayedColumns: string[] = ['select', 'name', 'email', 'location', 'phone', 'registrationDate'];

	selection = new SelectionModel<Customer>(true);

	ngOnInit(): void {
		this.dataSource.data = this.customers;
	}

	ngAfterViewInit(): void {
		this.dataSource.paginator = this.paginator;
	}

	isSelected(customerId: string): boolean {
		return !!this.selection.selected.find((customer) => customer.id === customerId);
	}

	isAllSelected(): boolean {
		const numSelected = this.selection.selected.length;
		const numRows = this.dataSource.data.length;

		return numSelected === numRows;
	}

	onSelectAll(): void {
		if (this.isAllSelected()) {
			this.selection.clear();
		} else {
			this.dataSource.data.forEach((row) => this.selection.select(row));
		}
	}
}
