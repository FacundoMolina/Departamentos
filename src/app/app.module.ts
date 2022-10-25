import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Rutas
import { APP_ROUTING } from './app.routes';

//Servicios
import {DepartamentosService} from './servicios/departamentos.service';

//bootstrap
//import { NgModule } from '@ng-bootstrap/ng-bootstrap'; //En el video lo tiene pero a mi me tira error

//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactanosComponent } from './components/Contactanos/contactanos.component';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';
import { DepartamentoComponent } from './components/departamento/departamento.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { DepartamentoTarjetaComponent } from './components/departamento-tarjeta/departamento-tarjeta.component';
import { UbicacionesComponent } from './components/ubicaciones/ubicaciones.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    ContactanosComponent,
    DepartamentosComponent,
    DepartamentoComponent,
    BuscadorComponent,
    DepartamentoTarjetaComponent,
    UbicacionesComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    BrowserAnimationsModule,
    //NgModule //En el video lo tiene, no me tira error, igual lo saque
  ],
  providers: [
    DepartamentosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
