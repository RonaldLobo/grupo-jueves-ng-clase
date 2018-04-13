import { Injectable } from '@angular/core';
import { Product } from './product.model'

@Injectable()
export class ProductsService {
	public products: Product[] = [{
		name : 'arroz',
		price : 2000,
		description : 'Bolsa de arroz de 3 kg'
	}];
	constructor() { 

	}

	public getProducts(){
		return this.products;
	}

	public addProduct(newProduct:Product){
		this.products.push(newProduct);
	}

	public removeProduct(product:Product){
		this.products = this.products.filter(item => item !== product);
	}

	public editProduct(){

	}

}
