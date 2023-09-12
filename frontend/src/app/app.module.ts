import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {WorkModule} from './work/work.module';
import {CommonModule} from "@angular/common";
import {AboutModule} from "./about/about.module";
import {HomeModule} from "./home/home.module";
import {EthosModule} from "./ethos/ethos.module";
import {ContactModule} from "./contact/contact.module";
import { GlobalModule } from './global/global.module';
import {WorkService} from './services/work.services';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    WorkModule,
    AboutModule,
    HomeModule,
    EthosModule,
    ContactModule,
    GlobalModule
  ],
  providers: [WorkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
