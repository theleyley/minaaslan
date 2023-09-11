import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PortfolioModule} from './portfolio/portfolio.module';
import {CommonModule} from "@angular/common";
import {AboutModule} from "./about/about.module";
import {HomeModule} from "./home/home.module";

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
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
