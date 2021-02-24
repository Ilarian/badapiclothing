import { Injectable } from '@angular/core';
import {Observable, observable, of} from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Product } from "./product";
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private products = "https://bad-api-assignment.reaktor.com/v2/products/"
  private availability = "https://bad-api-assignment.reaktor.com/v2/availability/"

  getProducts(product: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.products + product)
  }

  constructor(
      private http: HttpClient,
  ) {}

}
