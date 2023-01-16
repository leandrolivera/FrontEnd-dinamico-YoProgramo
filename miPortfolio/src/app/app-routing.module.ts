import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { GuardGuard } from './services/guard.guard';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: 'portfolio',component:PortfolioComponent, canActivate:[GuardGuard]},
  {path:'iniciar-sesion',component:IniciarSesionComponent},
  {path:'',redirectTo:'iniciar-sesion',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
