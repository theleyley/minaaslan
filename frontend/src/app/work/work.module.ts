import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkComponent } from './work.component';
import {HttpClientModule} from '@angular/common/http';
import {GlobalModule} from '../global/global.module';



@NgModule({
  declarations: [
    WorkComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    GlobalModule
  ],
  providers: [
  ],
  exports: [
      WorkComponent
  ]
})
export class WorkModule { }
