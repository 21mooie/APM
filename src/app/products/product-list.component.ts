import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';


@Component({
    selector:'pm-products',
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css']
    
})

export class ProductListComponent implements OnInit{
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    _listFilter: string;
    errorMessage: string;
    

    showImage:boolean = false;
    filteredProducts: IProduct[];
    products: IProduct[] = []; 

    constructor(private _productService: ProductService){
    }

    ngOnInit(): void{
        this._productService.getProducts()
            .subscribe(products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
                        error => this.errorMessage = <any>error);
            
        // this.products = this._productService.getProducts();
        
    }

    get listFilter(): string{
        return this._listFilter;
    }

    set listFilter(value:string){
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    performFilter(filterBy: string): IProduct[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product:IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage(): void{
        this.showImage = !this.showImage;
    }

    onRatingClicked(message: string): void{
        this.pageTitle = 'Product List: ' + message;
    }
}