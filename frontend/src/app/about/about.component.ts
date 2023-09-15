import { Component, OnInit } from '@angular/core';
import {WorkService} from "../services/work.services";
import {environment} from "../../environments/environment";
import {Router} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  env = environment;
  pageData: any;

  constructor(private workService: WorkService, private router: Router) { }

  ngOnInit(): void {
    this.workService.getAboutPageData().subscribe((data) => {
      if (data) {
        this.pageData = data.attributes;
      }
    })
  }

  buildPath(path: any) {
    return `${this.env.apiBase}${path}`;
  }

  buildImagePath(path: any) {
    if (this.env.production === true) {
      return `${path}`;
    }else {
      return `${this.env.apiBase}${path}`;
    }
  }

}
