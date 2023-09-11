import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent,
    pathMatch: 'full'
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    pathMatch: 'full'
  },
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
