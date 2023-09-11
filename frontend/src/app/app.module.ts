import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PortfolioModule} from './portfolio/portfolio.module';
import {CommonModule} from "@angular/common";
import {AboutModule} from "./about/about.module";
import {HomeModule} from "./home/home.module";
import {EthosModule} from "./ethos/ethos.module";
import {ContactModule} from "./contact/contact.module";
import { GlobalModule } from './global/global.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    PortfolioModule,
    AboutModule,
    HomeModule,
    EthosModule,
    ContactModule,
    GlobalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
