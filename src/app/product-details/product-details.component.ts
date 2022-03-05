import { products } from './../products';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { CartService } from '../servicios/cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product:any;
  addToCart(products: any) {
    this.cartService.addToCart(products);
    window.alert('Your product has been added to the cart!');
  }

  
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService) {
     }
submit(){
  console.log('Este boton funciona')
  //(window as any).Mercadopago.setPublishableKey("TEST-1fa514ff-2b79-44e2-ae7b-0f50da10ea78");
    //  (window as any).Mercadopago.getIdentificationTypes();
    
}
     
  ngOnInit(): void {
     // First get the product id from the current route.
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('productId'));

  // Find the product that correspond with the id provided in route.
  this.product = products.find(product => product.id === productIdFromRoute);
  
  }

}
