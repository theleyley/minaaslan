import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkComponent } from './work.component';
import {HttpClientModule} from '@angular/common/http';
import { WorkItemComponent } from './work-item/work-item.component';
import {GlobalModule} from '../global/global.module';



@NgModule({
  declarations: [
    WorkComponent,
    WorkItemComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    GlobalModule
  ],
  providers: [
  ],
  exports: [
      WorkComponent,
      WorkItemComponent
  ]
})
export class WorkModule { }
