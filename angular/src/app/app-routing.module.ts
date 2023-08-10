import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultadosComponent } from './resultados/resultados.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path:'', redirectTo:'home', pathMatch:'full'
  },
  {path:'home', component: HomeComponent},
  {path:'resultados', component: ResultadosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
