import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

/*
const PORT = 3000;
const HOST = "localhost";
export const URL = `http.//${HOST}:${PORT}`;
*/

export class ProductoService {

  constructor(private http:HttpClient) { }

  getProducto() {
    this.http.get(
      `http://localhost:3000/productos/`
    )
    .subscribe(data => console.log(data))
  }
}