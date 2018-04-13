import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model'

@Component({
	selector: 'app-products-add',
	templateUrl: './products-add.component.html',
	styleUrls: ['./products-add.component.css']
})
export class ProductsAddComponent implements OnInit {
	@Output() addedProduct: EventEmitter<Product> = new EventEmitter<Product>();
	public productName: string = ''
	public productDescription: string = '';
	public descriptionDisabled: boolean = true;
	constructor() { }

	ngOnInit() {
	}

	public addProduct(){
		let product = new Product();
		product.name = this.productName || 'Frijoles';
		product.price = 4000;
		product.description = this.productDescription || 'Frijoles negros 2 kg';
		this.addedProduct.emit(product);
		this.productName = '';
		this.productDescription = '';
	}

	public toogleDescription(){
		this.descriptionDisabled = !this.descriptionDisabled;
	}

}
