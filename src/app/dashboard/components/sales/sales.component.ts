import {
	Component,
	OnInit
} from '@angular/core';
import { Chart } from 'chart.js';

@Component({
	selector: 'mk-sales',
	templateUrl: './sales.component.html',
	styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
	ngOnInit(): void {
		const data = {
			datasets: [
				{
					backgroundColor: '#3F51B5',
					barPercentage: 0.5,
					barThickness: 12,
					categoryPercentage: 0.5,
					data: [18, 5, 19, 27, 29, 19, 20],
					label: 'This year',
					maxBarThickness: 10
				},
				{
					backgroundColor: '#EEEEEE',
					barPercentage: 0.5,
					barThickness: 12,
					categoryPercentage: 0.5,
					data: [11, 20, 12, 29, 30, 25, 13],
					label: 'Last year',
					maxBarThickness: 10
				}
			],
			labels: ['1 Aug', '2 Aug', '3 Aug', '4 Aug', '5 Aug', '6 Aug']
		};

		const chartOptions = {
			animation: false,
			cornerRadius: 20,
			layout: { padding: 0 },
			legend: { display: false },
			maintainAspectRatio: false,
			responsive: true,
			scales: {
				xAxes: [
					{
						ticks: {
							fontColor: '#546E7A'
						},
						gridLines: {
							display: false,
							drawBorder: false
						}
					}
				],
				yAxes: [
					{
						ticks: {
							beginAtZero: true,
							fontColor: '#546E7A',
							min: 0
						},
						gridLines: {
							borderDash: [2],
							borderDashOffset: [2],
							color: 'rgba(0, 0, 0, 0.12)',
							drawBorder: false,
							zeroLineBorderDash: [2],
							zeroLineBorderDashOffset: [2],
							zeroLineColor: 'rgba(0, 0, 0, 0.12)'
						}
					}
				]
			},
			tooltips: {
				backgroundColor: '#fafafa',
				bodyFontColor: '#546E7A',
				borderColor: 'rgba(0, 0, 0, 0.12)',
				borderWidth: 1,
				enabled: true,
				footerFontColor: '#546E7A',
				intersect: false,
				mode: 'index',
				titleFontColor: '#546E7A'
			}
		};

		new Chart('sales-chart', {
			type: 'bar',
			data: data,
			options: chartOptions
		});
	}
}
