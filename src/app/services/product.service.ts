import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  SERVER_URL = 'http://localhost:3333';

  constructor(private http: HttpClient) { }
  public getProducts(){
    return this.http.get(`${this.SERVER_URL}/products`)
  }
}
