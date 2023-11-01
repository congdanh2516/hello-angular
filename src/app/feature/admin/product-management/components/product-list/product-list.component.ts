import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductListService } from '../../services/product-list/product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  name: string = "Angular";
  age: number = 17;

  imgUrl: string = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/800px-Angular_full_color_logo.svg.png";

  selected : string = '3';

  status: boolean = false;

  color: string = "yellow";

  temp: any;
  
  productList7: Array<Product> | undefined;

  constructor(private productListService: ProductListService) {
    this.getProductListComponent();
  }

  getProductListComponent() {
    this.productListService.getProductList().subscribe({
      next: ((data) => {
        console.log("data: ", data);
      }),
      error: ((error) => {
        console.log(error);
      })
    })
  }

  addNewProduct() {
    let newProduct: Product = {
      name: 'Product 100',
      image: "asdsfafa",
      price: 100
    }
    console.log("new product: ", newProduct);
    this.productListService.addProduct(newProduct).subscribe({
      next: (() => {
        console.log("thanh cong");
      }),
      error: ((error) => {
        console.log(error);
      })
    })
  }


  showMessage(attr: any) {
    this.temp = attr;
    alert(this.temp);
  }

  getContent(e: any) {
    alert(e.target.value)
  }

  count: number = -5;

  numberArray: Array<number> = [1, 2, 3, 4];

  productList: Array<any> = [
    {
      name: "Product 1",
      price: 1000,
    },
    {
      name: "Product 2",
      price: 1400,
    },
    {
      name: "Product 3",
      price: 1500,
    },
  ]

}
