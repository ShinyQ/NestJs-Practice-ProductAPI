import { Controller, Post, Body, Get } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService : ProductsService){}

    @Post()
    tambahProduk(
        @Body('judul') judul: string, 
        @Body('harga') harga: number, 
        @Body('deskripsi') deskripsi: string
        ): 
    any {
        const produk = this.productsService.tambahProduk(
            judul, 
            deskripsi, 
            harga
        )
        return {id: produk}
    }
}