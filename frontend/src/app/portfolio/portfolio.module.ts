import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import {PortfolioService} from "./services/portfolio.service";
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
      PortfolioService
  ],
  exports: [
      PortfolioComponent
  ]
})
export class PortfolioModule { }
