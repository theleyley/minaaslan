import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { MarkdownModule } from 'ngx-markdown';



@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    MarkdownModule.forRoot()
  ]
})
export class AboutModule { }
