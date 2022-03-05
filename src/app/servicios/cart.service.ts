import { products } from './../products';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  addToCart(products: { id: number; name: string; price: number; description: string; }[]) {
    throw new Error('Method not implemented.');
  }
  items = [];
 /* addToCart(products: any) {
    this.items.push(products: string[],);
  }*/

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
  constructor(
    private http: HttpClient
  ) { }
}
