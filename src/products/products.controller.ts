import { Controller, Get, Body, Post } from '@nestjs/common';
import { ProductService } from './products.service';

@Controller('products')
export class ProductsCotroller {
  // constructor(private readonly appService: AppService) {}
  constructor(private readonly productService: ProductService) {}
  @Post()
  insertProducts(
    @Body('title') prodTitle: String,
    @Body('description') prodDesc: String,
    @Body('price') prodPrice: number,
  ): any {
    return this.productService.insertProducts(prodTitle, prodDesc, prodPrice);
  }
}
