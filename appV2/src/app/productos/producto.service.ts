import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private url: string = "http://localhost:3000/productos/"

  constructor() { }
}
