import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { DepartamentosService } from 'src/app/servicios/departamentos.service';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html'
})
export class DepartamentoComponent{
  departamento:any = {};
  constructor(private activatedRoute: ActivatedRoute,
              private _departamentosService : DepartamentosService) {
    this.activatedRoute.params.subscribe(params=>{
      this.departamento = this._departamentosService.getDepartamento(params['id']);
      console.log(this.departamento);
    })
   }

}
