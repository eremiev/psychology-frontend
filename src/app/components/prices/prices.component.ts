import { Component, OnInit } from '@angular/core';
import { PriceService } from './price.service';

@Component({
	selector: 'app-prices',
	templateUrl: './prices.component.html',
	styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {

	constructor(private priceService: PriceService) { }

	ngOnInit() {
		this.priceService.setPrices();
	}

}
