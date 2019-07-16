import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { ProductService } from "src/app/shared-data/services/product.service";
import { Router } from "@angular/router";
import { Product } from "src/app/shared-data/models/product.model";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"]
})
export class ProductComponent implements OnInit {
  rows = [];
  cache: any = {};
  @ViewChild("headerTemplate") headerTemplate: TemplateRef<any>;
  columns = [];
  @ViewChild("actionTemplate") actionTemplate: TemplateRef<any>;
  loadingIndicator: boolean;
  constructor(private router: Router, private proS: ProductService) {}

  ngOnInit() {
    console.log(this.headerTemplate);
    this.columns = [
      {
        name: "Category",
        prop: "Category",
        headerTemplate: this.headerTemplate,

        width: 300,
        draggable: false
      },
      {
        name: "ProductName",
        prop: "ProductName",
        headerTemplate: this.headerTemplate,
        width: 300,
        draggable: false
      },
      {
        name: "ProductShortCode",
        prop: "ProductShortCode",
        headerTemplate: this.headerTemplate,
        width: 300,
        draggable: false
      },
      {
        name: "Actions",
        prop: "Actions",
        headerTemplate: this.headerTemplate,
        cellTemplate: this.actionTemplate,
        width: 300,
        draggable: false
      }
    ];
    this.loadingIndicator = true;
    this.proS.getProducts().subscribe(res => {
      console.log(res);
      const data = res["data"]
      this.rows = data;
      this.loadingIndicator = false;
      // console.log(this.rows);
      // const page: Page = {
      //   pageNumber: 0,
      //   totalPages: 1,
      //   totalElements: 9,
      //   size: 3
      // };
      // this.page = page;
    });
  }

  navigateToEdit(product: Product) {
    // debugger;
    this.router.navigate([`products/edit/${product._id}` , {data:product} ]);
  }
}
