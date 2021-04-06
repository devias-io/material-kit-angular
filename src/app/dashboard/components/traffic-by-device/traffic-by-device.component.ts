import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
	selector: 'mk-traffic-by-device',
	templateUrl: './traffic-by-device.component.html',
	styleUrls: ['./traffic-by-device.component.scss']
})
export class TrafficByDeviceComponent implements OnInit {
	devices = [
		{
			color: '#3F51B5',
			icon: 'laptop_mac',
			title: 'Desktop',
			value: 63
		},
		{
			color: '#e53935',
			icon: 'tablet',
			title: 'Tablet',
			value: 15
		},
		{
			color: '#FB8C00',
			icon: 'phone',
			title: 'Mobile',
			value: 23
		}
	];

	ngOnInit(): void {
		const data = {
			datasets: [
				{
					backgroundColor: [
						'#3F51B5',
						'#e53935',
						'#FB8C00'
					],
					borderColor: '#fff',
					borderWidth: 8,
					data: [63, 15, 22],
					hoverBorderColor: '#fff'
				}
			],
			labels: ['Desktop', 'Tablet', 'Mobile']
		};

		const options = {
			animation: false,
			cutoutPercentage: 80,
			layout: { padding: 0 },
			legend: { display: false },
			maintainAspectRatio: false,
			responsive: true,
			tooltips: {
				backgroundColor: '#fafafa',
				bodyFontColor: '#546E7A',
				borderColor: 'rgba(0, 0, 0, 0.12)',
				borderWidth: 1,
				enabled: true,
				footerFontColor: '#546E7A',
				intersect: false,
				mode: 'index',
				titleFontColor: '#263238'
			}
		};

		new Chart('traffic-chart', {
			type: 'doughnut',
			data: data,
			options: options
		});
	}
}
