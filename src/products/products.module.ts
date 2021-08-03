import { Module } from '@nestjs/common';
import { ProductService } from './products.service';
import { ProductsCotroller } from './products.controller';

@Module({
  controllers: [ProductsCotroller],
  providers: [ProductService],
})
export class ProductsModule {}
