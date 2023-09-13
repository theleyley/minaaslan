import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {WorkComponent} from "./work/work.component";
import {HomeComponent} from "./home/home.component";
import {EthosComponent} from "./ethos/ethos.component";
import {ContactComponent} from "./contact/contact.component";
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
    path: 'work/:id',
    component: WorkComponent,
  },
  {
    path: 'ethos',
    component: EthosComponent,
    pathMatch: 'full'
  },
  {
    path: 'contact',
    component: ContactComponent,
    pathMatch: 'full'
  },
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
