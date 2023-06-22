import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  data: any[]=[];
  constructor( private apiService : ApiService ) {  }
  ngOnInit(): void {
    this.llenarData();
  }
  llenarData(){
    this.apiService.getData().subscribe(data => {
      this.data=data; 
      console.log(this.data.find( (x)=>x._id==="648b57d6fb911367b557771f" ));
      return this.data.find( (x)=>x._id==="648b57d6fb911367b557771f" )
    })
  }
}
