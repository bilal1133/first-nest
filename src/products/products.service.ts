import { Get, Injectable } from '@nestjs/common';
import { Products } from './products.model';
@Injectable()
export class ProductService {
  products: Products[] = [];

  insertProducts(title: string, description: string, price: number): Products {
    const product = new Products(
      this.products.length.toString(),
      title,
      description,
      price,
    );
    this.products.push(product);
    return product;
  }

  getProducts(): Products[] {
    return this.products;
  }
  editProduct(): any {
    return this.products.find((single) => {});
  }
}
