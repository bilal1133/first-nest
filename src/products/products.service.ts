import { Get, Injectable, NotFoundException } from '@nestjs/common';
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

  getSingleProducts(pId: string) {
    const [p, i] = this.findProduct(pId);
    if (!p) {
      throw new NotFoundException('No Product found 😧');
    }
    return p;
  }
  editProduct(): any {
    return this.products.find((single) => {});
  }
  deleteProduct(id: string): any {
    let [p, i] = this.findProduct(id);
    if (!p) {
      throw new NotFoundException('No Product found 😧');
    }
    this.products.splice(i, 1);
    return { message: 'Deleted 🤤' };
  }

  private findProduct(id: string): [p: Products, number: number] {
    let index = this.products.findIndex((single) => single.id === id);
    return [this.products[index], index];
  }
}
