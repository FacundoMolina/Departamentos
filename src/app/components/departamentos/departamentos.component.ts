import { Component, OnInit } from '@angular/core';
import { DepartamentosService, Departamento } from 'src/app/servicios/departamentos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html'
})
export class DepartamentosComponent implements OnInit {
  
  departamentos:Departamento[] = [];
  constructor(private _departamentosService:DepartamentosService, private router:Router) {
    console.log("constructor");
   }

  ngOnInit() {
    this.departamentos = this._departamentosService.getDepartamentos();
    //console.log(this.departamentos);
  }

  verDepartamento(idx:number){
    this.router.navigate(['/departamento',idx]);
  }

}
