import { Controller, Get, Body, Post, Put } from '@nestjs/common';
import { ProductService } from './products.service';

@Controller('products')
export class ProductsCotroller {
  // constructor(private readonly appService: AppService) {}
  constructor(private readonly productService: ProductService) {}
  @Post()
  insertProducts(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ): any {
    return this.productService.insertProducts(prodTitle, prodDesc, prodPrice);
  }
  @Get()
  getProducts(): any {
    return this.productService.getProducts();
  }
  @Put()
  editProduct(): any {
    return this.productService.editProduct();
  }
}
