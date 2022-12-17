import { AfterContentInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DepartamentosService, Departamento } from 'src/app/servicios/departamentos.service';
import { Router } from '@angular/router';
import { retry } from 'rxjs';


@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html'
})
export class DepartamentosComponent implements OnInit, AfterContentInit {
  
  departamentos:Departamento[] = [];
  constructor(private _departamentosService:DepartamentosService,
              private cdref: ChangeDetectorRef,//Usar esto cuando se buguea angular
              private router:Router){}
              
  ngAfterContentInit(): void { //Usar esto cuando se buguea angular
   this.cdref.detectChanges();
   this.leerFavoritoLocalStorage();
  }

  ngOnInit() {
    this.departamentos = this._departamentosService.getDepartamentos();
  }

  verDepartamento(idx:number){
    this.router.navigate(['/departamento',idx]);
  }
  onPage(event:any){
    //console.log("Evento onPage" , event);
  }
  
  getIcon(isFavorite: boolean):string{
    return isFavorite ? 'bi bi-star-fill': 'bi bi-star';
  }

  cambiarValorFavorito(idx:number){
    this._departamentosService.cambiarFavorito(idx);
    this._departamentosService.misFavoritos();
  }

/*   guardarFavoritoLocalStorage() {
    const favoritos = [];
    favoritos.push({}); //aqui guardamos el id
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    //guardamos todos los valores a almacenar
    //guardamos todos los valores en un vector
  } */
  leerFavoritoLocalStorage() {
    if(!localStorage.getItem('favoritos')){//Si no existe no hace nada
      console.log("No hay ningun favorito actualmente");
      return;
    }
    const favoritos = JSON.parse(localStorage.getItem('favoritos')!);
    console.log("A continuacion se mostrara los favoritos cargados previamente del localstorage");
    console.log(favoritos);
    for (let i = 0; i <favoritos.length; i++){
      var valor = favoritos[i];
      this._departamentosService.cambiarFavoritoAVerdadero(valor);
    }
  }
  
  
}