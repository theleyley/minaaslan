import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { GlobalService } from './services/global.service';
import { CardsComponent } from './cards/cards.component';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  providers: [
    GlobalService
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CardsComponent
  ]
})
export class GlobalModule { }
