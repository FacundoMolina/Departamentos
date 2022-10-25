import {RouterModule, Routes } from '@angular/router';
import {InicioComponent } from './components/inicio/inicio.component';
import {ContactanosComponent} from "./components/Contactanos/contactanos.component";
import {DepartamentosComponent} from "./components/departamentos/departamentos.component";
import {DepartamentoComponent} from './components/departamento/departamento.component';
import {BuscadorComponent } from './components/buscador/buscador.component';
import { UbicacionesComponent } from './components/ubicaciones/ubicaciones.component';

const APP_Routes: Routes = [
    {path: "inicio", component: InicioComponent},
    {path: "contactanos", component: ContactanosComponent},
    {path: "departamentos", component: DepartamentosComponent},
    {path: "departamento/:id", component: DepartamentoComponent},
    {path: "buscar/:termino", component: BuscadorComponent},
    {path: "ubicaciones", component: UbicacionesComponent},
    {path: "**", pathMatch: "full", redirectTo: "inicio"}
];

export const APP_ROUTING = RouterModule.forRoot(APP_Routes);