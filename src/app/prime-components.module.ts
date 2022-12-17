import { NgModule } from '@angular/core';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';



@NgModule({
 exports:[CarouselModule,ButtonModule]
})
export class PrimeComponentsModule { }
