import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private urlApi  = 'http://cors.localhost:3000/registros';
  private urlApiProductos  = 'http://cors.localhost:3000/productos';

  constructor(private http: HttpClient) { }
  public getData():Observable<any>{
    return this.http.get<any>(this.urlApi);
  }
  public getDataProductos():Observable<any>{
    return this.http.get<any>(this.urlApiProductos);
  }
  public postData( data:any[] ){
    return this.http.post(this.urlApiProductos,data )
  }
}
