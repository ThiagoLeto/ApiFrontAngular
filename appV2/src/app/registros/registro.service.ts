import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Registro } from './registro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private url: string = "http://localhost:3000/registros"

  constructor( private http: HttpClient ){}

  getAll(): Observable<Registro[]>{
    return this.http.get<Registro[]>(this.url);
  }
  getPrecio(precios:number): Observable<Registro[]>{
    return this.http.get<Registro[]>(this.url+'/precio/'+precios);
  }
  getFecha(fechas:string): Observable<Registro[]>{
    return this.http.get<Registro[]>(this.url+'/fecha/'+fechas);
  }

  add(registro:Registro):Observable<Registro>{
    return this.http.post<Registro>(this.url, registro)
  }
  updateAll(registro:Registro):Observable<Registro>{
    return this.http.put<Registro>(this.url, registro);
  }

  deletePrecio(precio: number):Observable<Registro>{
    return this.http.delete<Registro>(this.url+'/precio/'+precio)
  }
  deleteFecha(fecha: string):Observable<Registro>{
    return this.http.delete<Registro>(this.url+'/precio/' + fecha)
  }
}
