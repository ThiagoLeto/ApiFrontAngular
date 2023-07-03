import { Component, OnInit } from '@angular/core';
import { Registro } from './registro';
import { RegistroService } from './registro.service';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponent implements OnInit{
  registros: Registro[];

  constructor(private registroService: RegistroService){}

  ngOnInit(): void {
    this.registroService.getAll().subscribe(
      r => this.registros=r
    );
  }
}