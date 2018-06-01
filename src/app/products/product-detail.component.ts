import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string ='Product Detail';
  product: IProduct;
  errorMessage: string = '';

  constructor(private _route:ActivatedRoute,private _service: ProductService,
              private _router: Router) { }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id'); 
    this.pageTitle += `: ${id}`;
    // this._service.getProducts()
    //         .subscribe(product => {
    //             this.product = product.filter(prod=>prod.productId===id)[0];
    //         },
    //                     error => this.errorMessage = <any>error);
    this._service.getProduct(id).subscribe(
      product => this.product = product,
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }

}
