import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkComponent } from './work.component';
import {HttpClientModule} from '@angular/common/http';
import { WorkItemComponent } from './work-item/work-item.component';



@NgModule({
  declarations: [
    WorkComponent,
    WorkItemComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
  ],
  exports: [
      WorkComponent,
      WorkItemComponent
  ]
})
export class WorkModule { }
