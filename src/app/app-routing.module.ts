import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/vistas/login/login.component';
import { DashboardComponent } from './components/vistas/dashboard/dashboard.component';
import { NuevoComponent } from './components/vistas/nuevo/nuevo.component';
import { EditComponent } from './components/vistas/edit/edit.component';

const routes: Routes = [
  {path: '' , redirectTo: 'login', pathMatch:'full'}, //dejamos por defecto el login
  {path: 'login', component:LoginComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'nuevo', component:NuevoComponent},
  {path: 'edit/:idGuia', component:EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

//Exportamos las rutas
export const routingComponents = [LoginComponent, DashboardComponent, NuevoComponent, EditComponent];