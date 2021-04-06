import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSortModule } from '@angular/material/sort';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { LogoComponent } from './components/logo/logo.component';
import { FeatherIconsModule } from './feather-icons.module';

@NgModule({
	declarations: [
		LogoComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule,
		// Material
		MatButtonModule,
		MatIconModule,
		MatListModule,
		MatSidenavModule,
		MatToolbarModule,
		// Feather Icons
		FeatherIconsModule
	],
	exports: [
		FormsModule,
		ReactiveFormsModule,
		RouterModule,
		// Material
		MatButtonModule,
		MatCardModule,
		MatCheckboxModule,
		MatChipsModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,
		MatListModule,
		MatPaginatorModule,
		MatProgressBarModule,
		MatSelectModule,
		MatSidenavModule,
		MatSortModule,
		MatTableModule,
		MatToolbarModule,
		MatTooltipModule,
		// Feather Icons
		FeatherIconsModule,
		// Perfect Scrollbar
		PerfectScrollbarModule,
		// Custom
		LogoComponent
	]
})
export class SharedModule {}
