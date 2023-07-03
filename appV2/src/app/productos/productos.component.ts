import { Component, OnInit } from '@angular/core';
import { Registro } from '../registros/registro';
import { Producto } from './producto';
import { ProductoService } from './producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{
  productos: Producto[]

  constructor(private productoService: ProductoService){}

  ngOnInit(): void {
    this.productoService.getAll().subscribe(
      p => this.productos = p
    );
  }
}
