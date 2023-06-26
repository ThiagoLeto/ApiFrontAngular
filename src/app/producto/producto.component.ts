import { Component } from '@angular/core';
import { ProductoService } from './producto.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  
  constructor(private http:HttpClient) {}

  llama_al_coso() {
    
  }
}
