import { Injectable } from "@angular/core";
@Injectable()
export class DepartamentosService {
    private departamentos : Departamento [] = [
        {
          nombre: "Departamento 1",
          bio: "Depto 1 descripción genérica",
          img: "assets/img/Depto1.jpg",
          //aparicion: "1941-11-01",
          //casa:"DC"
        },
        {
          nombre: "Departamento 2",
          bio: "Depto 2 descripción genérica",
          img: "assets/img/Depto2.jpg",
          //aparicion: "1939-05-01",
          //casa:"DC"
        },
        {
          nombre: "Departamento 3",
          bio: "Depto 3 descripción genérica",
          img: "assets/img/Depto3.jpg",
          //aparicion: "1964-01-01",
          //casa: "Marvel"
        },
        {
          nombre: "Departamento 4",
          bio: "Depto 4 descripción genérica",
          img: "assets/img/Depto4.jpg",
          //aparicion: "1962-05-01",
          //casa:"Marvel"
        }
      ];
    constructor() {
        //console.log("Servicio listo para usarse");
    }

    getDepartamentos():Departamento[]{
        return this.departamentos;
    }
    getDepartamento(idx: number)
    {
      return this.departamentos[idx];
    }

    buscarDepartamentos(termino:string){
      const departamentosArr:Departamento[]=[];
      termino=termino.toLowerCase();
      for (const departamento of this.departamentos){
        const nombre = departamento.nombre.toLowerCase();
        if(nombre.includes(termino))
        departamentosArr.push(departamento)
      }
      return departamentosArr;
    }
  

}

export interface Departamento{
    nombre: string;
    bio: string;
    img: string;
    //aparicion: string; //para volver a colocarlo agregarlo a departamentos.component.html
    //casa: string;
};