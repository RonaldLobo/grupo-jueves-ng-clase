import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-products-display',
	templateUrl: './products-display.component.html',
	styleUrls: ['./products-display.component.css']
})
export class ProductsDisplayComponent implements OnInit {
	@Input() product;
	constructor() { }

	ngOnInit() {
	}

}
