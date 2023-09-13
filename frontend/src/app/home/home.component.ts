import { Component, OnInit } from '@angular/core';
import {WorkService} from "../services/work.services";
import {WorkAttribute, WorkModel} from "../models/work.model";
import {environment} from "../../environments/environment";
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  env = environment;
  pageData: any;
  constructor(private workService: WorkService, private router: Router) { }

  ngOnInit(): void {
    this.workService.getPageData().subscribe((data) => {
      if (data) {
        this.pageData = data.attributes;
      }
    })
  }

  buildPath(path: any) {
    return `${this.env.apiBase}${path}`;
  }

}
