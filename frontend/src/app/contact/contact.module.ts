import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MarkdownModule } from 'ngx-markdown';



@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MarkdownModule.forRoot()
  ]
})
export class ContactModule { }
