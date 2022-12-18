import { Injectable } from "@angular/core";
@Injectable()
export class DepartamentosService {
    private departamentos : Departamento [] = [
        {
          id:0,
          nombre: "Belgrano",
          descripcion: `"Departamento amoblado en una ubicación inmejorable, a solo dos cuadras de la plaza principal, dos cuadras de la Iglesia San Francisco y a una cuadra de la Seccional 1ra de Policía.
          El mismo cuenta con dos dormitorios con placard, cama Queen o dos camas singles por cuarto (no cuchetas).
          La cocina a gas natural, heladera, vajilla y utensillos para seis personas. Calefacción.
          En el living tiene un divan cama para dos personas, WiFi, TV con conexión a la señal de cable y mesa.
          Los dormitorios tienen piso flotante, uno con aire acondicionado
          Cochera en el mismo edificio (opcional)"`,
          img:["assets/img/Belgrano/Belgrano0.jpeg","assets/img/Belgrano/Belgrano1.jpeg","assets/img/Belgrano/Belgrano2.jpeg","assets/img/Belgrano/Belgrano3.jpeg","assets/img/Belgrano/Belgrano4.jpeg","assets/img/Belgrano/Belgrano5.jpeg"],
          isFavorite : false,
        },
        {
          id:1,
          nombre: "Santa Fe Planta Baja",
          descripcion: `Fino departamento amueblado con somier Queen (o dos singles) y cama de una plaza, TV por cable, aire acondicionado, WiFi
          En el sector cocina tenemos un desayunador, pava eléctrica, horno microondas, anafe, heladera y vajilla para cuatro personas.
          El edificio tiene para uso común SAUNA, HIDROMASAJE y GIMANSIO. Cochera para auto mediano o pequeño (opcional)
          Ubicado en pleno centro de la ciudad de Salta, en el casco histórico, a metros del Convento de San Bernardo.,`,
          img:["assets/img/Santa Fe PB/SantaFePB0.jpeg","assets/img/Santa Fe PB/SantaFePB1.jpeg","assets/img/Santa Fe PB/SantaFePB1.jpeg","assets/img/Santa Fe PB/SantaFePB2.jpeg","assets/img/Santa Fe PB/SantaFePB3.jpeg","assets/img/Santa Fe PB/SantaFePB4.jpeg"],
          isFavorite : false,
        },
        {
          id:2,
          nombre: "Santa Fe 5 piso",
          descripcion: `Fino departamento amueblado con somier Queen (o dos singles) y cama de una plaza, TV por cable, aire acondicionado, WiFi.\n
          En el sector cocina tenemos un desayunador, pava eléctrica, horno microondas, anafe, heladera y vajilla para cuatro personas.
          El edificio tiene para uso común SAUNA, HIDROMASAJE y GIMANSIO. Cochera para auto mediano o pequeño (opcional)
          Ubicado en pleno centro de la ciudad de Salta, en el casco histórico, a metros del Convento de San Bernardo.`,
          img:["assets/img/Santa Fe 5/SantaFe50.jpeg","assets/img/Santa Fe 5/SantaFe51.jpeg","assets/img/Santa Fe 5/SantaFe52.jpeg","assets/img/Santa Fe 5/SantaFe53.jpeg"],
          isFavorite : false,
        },
/*         {
          id:3,
          nombre: "Departamento 4",
          descripcion: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
          img:["assets/img/Depto10.jpg","assets/img/Depto11.jpg","assets/img/Depto12.jpg"],
          isFavorite : true,
        } */
      ];

    constructor() {
    }
    getDepartamentos():Departamento[]{
        return this.departamentos;
    }
    getDepartamento(idx: number)
    {
      return this.departamentos[idx];
    }
    cambiarFavorito(i :number){
      if(this.departamentos[i].isFavorite==true){
        this.departamentos[i].isFavorite=false;
      }
      else{
        this.departamentos[i].isFavorite=true;
      }
    }
    cambiarFavoritoAVerdadero(i :number){
      this.departamentos[i].isFavorite=true;
    }
    misFavoritos(){
       const favoritos : string[] = [];
       for (let i = 0; i <this.departamentos.length; i++) {
        if(this.departamentos[i].isFavorite==true){
          favoritos.push(JSON.stringify(this.departamentos[i].id));   
      }

      }
      console.log(favoritos);
      localStorage.setItem('favoritos', JSON.stringify(favoritos));
    }
    getMisFavoritos()
    {
      let vectorDepto =[];
      for (let i = 0; i <this.departamentos.length; i++) {
        if(this.departamentos[i].isFavorite==true){
          vectorDepto.push(this.departamentos[i]);
          console.log("depto a mostrar..", [i]);
          
        }
        else{
          console.log("No tenes ningun favorito guardado");
        }
      }
      return vectorDepto; 
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
    id:number;
    nombre: string;
    descripcion: string;
    img: string[];
    isFavorite: boolean,
};