import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartamentosService } from 'src/app/servicios/departamentos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {
[x: string]: any;
  departamentos:any[]=[]
  termino: string=""
  constructor(private activatedRoute:ActivatedRoute,
              private _departamentosService: DepartamentosService,
              private router:Router) { }

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.departamentos=this._departamentosService.buscarDepartamentos(params['termino']);
      console.log(this.departamentos);
    });
  }
  
  verDepartamento(idx:number){
    this.router.navigate(['/departamento',idx]);
  }

}
