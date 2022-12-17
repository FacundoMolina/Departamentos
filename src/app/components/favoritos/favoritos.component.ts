import { Component, OnInit, NgModule } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { DepartamentosService, Departamento} from 'src/app/servicios/departamentos.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
})

export class FavoritosComponent{
  favoritos: Departamento [] = [];
  constructor(private activatedRoute: ActivatedRoute,
              private _departamentosService : DepartamentosService) 
  {
/*     this.activatedRoute.params.subscribe(params=>{
    
//console.log(this.departamento);
  }) */
  }

  ngOnInit(): void {
    this.favoritos = this._departamentosService.getMisFavoritos();
  }


}
