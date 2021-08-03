import { Get, Injectable } from '@nestjs/common';
import { Products } from './products.model';
@Injectable()
export class ProductService {
  products: Products[] = [];

  insertProducts(title: String, description: String, price: number): Products {
    let product = new Products(
      this.products.length.toString(),
      title,
      description,
      price,
    );
    this.products.push(product);
    return product;
  }
}
