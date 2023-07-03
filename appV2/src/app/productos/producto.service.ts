import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from './producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private url: string = "http://localhost:3000/productos/"


  constructor( private http: HttpClient ){}

  getAll(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.url);
  }
  getId(id:number): Observable<Producto>{
    return this.http.get<Producto>(this.url+'/'+id);
  }
  getNombre(nombre:string): Observable<Producto>{
    return this.http.get<Producto>(this.url+'/'+nombre);
  }

  add(producto:Producto):Observable<Producto>{
    return this.http.post<Producto>(this.url, producto)
  }
  
  updateAll(producto:Producto):Observable<Producto>{
    return this.http.put<Producto>(this.url, producto);
  }

  deleteId(id: number):Observable<Producto>{
    return this.http.delete<Producto>(this.url + id)
  }
  deleteNombre(nombre: string):Observable<Producto>{
    return this.http.delete<Producto>(this.url + nombre)
  }
}
