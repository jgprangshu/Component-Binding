import { Component } from '@angular/core';
import { Products } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  productAtIndex;
  products : Products[] = [
    new Products(1 ,  'Shampoo' , 1 , 50),
    new Products(2 ,  'Toothpaste' , 4 , 35),
    new Products(3 ,  'Oil' , 3 , 55),
    new Products(4 ,  'Cream' , 2 , 150),
    
  ];
  

  changeStockValue(productData:{ productID: number, updatedValue : number}){
      this.productAtIndex= this.products.find(this.findProducts, [productData.productID]);
      this.productAtIndex.productQuantity=  this.productAtIndex.productQuantity + productData.updatedValue;
  }

  findProducts(productData){
    return productData.productID === this[0];
  }


}
