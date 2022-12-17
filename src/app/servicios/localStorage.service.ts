/* import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { Departamento } from './departamentos.service';
import { find, filter } from 'rxjs/operators';
const MY_FAVORITES = 'myFavorites';

@Injectable({
    providedIn:'root'
})
export class LocalStorageService {
    private deptosFavSubject = new BehaviorSubject<Departamento[]>(null);
    deptosFav$ = this.deptosFavSubject.asObservable();
    
    constructor(private localStorageSvc: LocalStorageService){
        this.initialStorage();
    }
    addOrRemoveFavorite(departamento : Departamento): void{//Busca dentro de los favoritos, busca si existe o no ese favorito; en base a eso llama al añadir o a eliminar
        const {id} = departamento;
        const currentsFav = this.getFavoritesDeptos();
        const found = !!currentsFav.find((fav: Departamento)=>fav.id ==id);
        found ? this.removeFromFavorite(id) : this.addToFavorite(departamento);
    }

    private addToFavorite(departamento : Departamento):void {
        try{
            const currentsFav = this.getFavoritesDeptos();
            localStorage.setItem(MY_FAVORITES, JSON.stringify([...currentsFav, departamento]));
            this.deptosFavSubject.next([...currentsFav, departamento]);
        }catch (error){
            console.log('Error en addToFavorite', error);

        }
    }
    private removeFromFavorite(id : number):void{
        try{
            const currentsFav = this.getFavoritesDeptos();
            const departamentos = currentsFav.filter(item => item.id != id);
            localStorage.setItem(MY_FAVORITES, JSON.stringify([...departamentos]));
            this.deptosFavSubject.next([...departamentos]);
        }catch(error){
            console.log('Error removeFromFavorite ', error);
        }
    }

    getFavoritesDeptos():any{
        try {
            const deptosFav = JSON.parse(localStorage.getItem(MY_FAVORITES));
            this.deptosFavSubject.next(deptosFav); //Aqui guardamos los favoritos
            return deptosFav;
        }catch (error){
            console.log('Error en localStorage.service' , error)
        }
    }
    clearStorage() : void { //Para borrar la cache
        try {
            localStorage.clear();
        }catch (error) {
            console.log('Error limpiando la cache en localStorage.service' , error)
        }
    }
    private initialStorage():void{ //Crea un array vacio dentro del LocalStorage, si ya tiene personajes ahi no hace nada
        const currents = JSON.parse(localStorage.getItem(MY_FAVORITES));
        if (!currents){
            localStorage.setItem(MY_FAVORITES, JSON.stringify([]));
        }
        this.getFavoritesDeptos();

    }
    
} */