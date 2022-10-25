import { Component} from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { icon, Marker } from 'leaflet';
import { Inject, Input, OnInit } from '@angular/core';
 
//9 de julio -24.788970020163735, -65.41025653559548
//Belgrano -24.787704955859404, -65.40737449076312
export const DEFAULT_LAT = -24.788970020163735;
export const DEFAULT_LON =  -65.41025653559548;
export const Belgrano = 'Belgrano';
export const SantaFe = 'Santa Fe';
export const Plaza9Julio = 'Plaza Principal Salta';
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';

@Component({
  selector: 'app-ubicaciones',
  templateUrl: './ubicaciones.component.html'
})
export class UbicacionesComponent implements OnInit {
    private map:any;
    title='myApp';
    @Input() lat: number = DEFAULT_LAT; //Interactua con leafnet y trae latitud
    @Input() lon: number = DEFAULT_LON; //Interactua con leafnet y trae longitud
    @Input() titulo1: string = Belgrano ;
    @Input() titulo2: string = SantaFe;
    @Input() titulo3: string = Plaza9Julio;
   
    constructor() {
    }
   
    ngOnInit(): void {
      this.initMap();
    }
   
   
   
    private initMap(): void 
    {
        //configuración del mapa
        this.map = L.map('map', {
          center: [this.lat, this.lon], //Nos ubicamos en una latitud y longitud determinada
          attributionControl: false,
          zoom: 14,
        });
   
        //iconos personalizados
        var iconDefault = L.icon({
          iconRetinaUrl,
          iconUrl,
          shadowUrl,
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          tooltipAnchor: [16, -28],
          shadowSize: [41, 41]
        });
       L.Marker.prototype.options.icon = iconDefault;
        //titulo
        const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="https://1938.com.es">Web Inteligencia Artificial</a>'
        });
   
        //Marca con pop up
        //Belgrano -24.787704955859404, -65.40737449076312
        //Santa Fe -24.791148973354876, -65.4045115654405
        //Plaza9Julio -24.78904926201014, -65.41024721476356
        const Belgrano = L.marker([-24.787704955859404, -65.40737449076312]).bindPopup(this.titulo1);
        const SantaFe = L.marker([-24.791148973354876, -65.4045115654405]).bindPopup(this.titulo2);
        const Plaza9Julio = L.marker([-24.78904926201014, -65.41024721476356]).bindPopup(this.titulo3);
        Belgrano.addTo(this.map);
        SantaFe.addTo(this.map);
        Plaza9Julio.addTo(this.map);
   
        //Marca forma de circulo
        /*const mark = L.circleMarker([this.lat, this.lon]).addTo(this.map);
        mark.addTo(this.map);*/
   
   
      //Ruta. Elegimos 2 puntos y graficamos su ruta
      /*L.Routing.control({
        router: L.Routing.osrmv1({
          //serviceUrl: `https://router.project-osrm.org/route/v1/`
        }),
        showAlternatives: false,
        fitSelectedRoutes: false,
        show: false,
        routeWhileDragging: true,
        waypoints: [
          L.latLng(this.lat, this.lon), //Ubicamos un punto
          L.latLng(lat, lon) //Ubicamos otro punto
        ]
      }).addTo(this.map);*/
        tiles.addTo(this.map);
  }
}