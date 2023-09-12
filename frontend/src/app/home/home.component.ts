import { Component, OnInit } from '@angular/core';
import {WorkService} from "../services/work.services";
import {WorkAttribute, WorkModel} from "../models/work.model";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  works: WorkModel[] = [];
  env = environment;
  constructor(private workService: WorkService) { }

  ngOnInit(): void {
    this.workService.getWork().subscribe((workItems) => {
      if (workItems) {
        this.works = workItems;
        console.log(this.works);
      }
    })
  }

  buildPath(path: any) {
    return `${this.env.apiBase}${path}`;
  }

  viewWork(metadata: WorkAttribute) {
    console.log(metadata);
  }

}
