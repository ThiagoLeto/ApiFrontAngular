import { Component } from '@angular/core';
import { Registro } from '../registro';
import { RegistroService } from '../registro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-registro',
  templateUrl: './post-registro.component.html',
  styleUrls: ['./post-registro.component.css']
})
export class PostRegistroComponent {
  reg: Registro = new Registro()

  constructor(private registroService:RegistroService, private router: Router) {}

  crear():void{
    console.log(this.reg);
  }

}
