import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkComponent } from './work.component';
import {HttpClientModule} from '@angular/common/http';
import {GlobalModule} from '../global/global.module';
import {MarkdownModule} from "ngx-markdown";
import {YouTubePlayerModule} from "@angular/youtube-player";



@NgModule({
  declarations: [
    WorkComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    GlobalModule,
    MarkdownModule.forRoot(),
    YouTubePlayerModule
  ],
  providers: [
  ],
  exports: [
      WorkComponent
  ]
})
export class WorkModule { }
