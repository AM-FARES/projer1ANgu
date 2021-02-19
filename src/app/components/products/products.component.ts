import { Product } from './../../model/product.model';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products:Product[];

  constructor(private ProductsService:ProductsService) { }

  ngOnInit(): void {
  }

  onGetAllProducts(){
    this.ProductsService.getAllProducts().subscribe(data=>{
      this.products=data;
    })
  }

}
