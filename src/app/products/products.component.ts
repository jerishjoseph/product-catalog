import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
    products = require("../../products.json");
    items: any;
    filterOption = '';

    ngOnInit() {
      this.items = this.products['productDetails'];
      console.log("initialised");
    }

    onSelect(category: any) {
      let result: any = [];
      this.products['productDetails']?.forEach((item: any) => {
        if(item.category == category) {
          result.push(item)
        }
      });
      this.items = result;
    }

    sort(field: any) {
      let result: any = this.products['productDetails'];
      result?.sort((a: any,b: any)=>{
        return a[field] - b[field]
      })
      this.items = result;
    }
}
