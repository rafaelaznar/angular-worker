import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ControlComponent } from './control/control.component';

export const routes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'control', component: ControlComponent },

];
