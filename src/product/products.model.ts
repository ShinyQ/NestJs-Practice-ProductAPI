export class Product {

    // id: string
    // nama: string
    // deskripsi: string
    // harga: number

    // constructor(id:string, nama:string, deskripsi:string, harga:number) {
    //     this.id = id;
    //     this.nama = nama
    //     this.harga = harga
    //     this.deskripsi = deskripsi
    // };

    constructor(
        public id: string, 
        public nama: string, 
        public deskripsi: string, 
        public harga: number
    ) {}
}