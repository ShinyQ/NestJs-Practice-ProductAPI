import { Injectable } from "@nestjs/common";
import { Product } from './products.model';

@Injectable()
export class ProductsService {
    private products: Product[] = [];

    tambahProduk(nama : string, deskripsi : string, harga : number){
        const produkId = Math.random().toString()
        const tambahProduk = new Product(produkId, nama, deskripsi, harga)
        this.products.push(tambahProduk)
        return produkId
    }
}