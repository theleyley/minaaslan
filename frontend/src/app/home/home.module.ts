import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {GlobalModule} from '../global/global.module';
import { MarkdownModule } from 'ngx-markdown';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    GlobalModule,
    MarkdownModule.forRoot()
  ]
})
export class HomeModule { }
