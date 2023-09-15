import { Component, OnInit } from '@angular/core';
import {WorkService} from "../services/work.services";
import {environment} from "../../environments/environment";
import {Router} from '@angular/router';
import {BehaviorSubject, interval, take} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  env = environment;
  pageData: any;
  _powerWord$ = new BehaviorSubject(''); //you can set initial value as per your need
  powerWordList: any;
  counter = interval(900);
  constructor(private workService: WorkService, private router: Router) { }

  ngOnInit(): void {
    this.workService.getPageData().subscribe((data) => {
      if (data) {
        this.pageData = data.attributes;
        this.powerWordList = data.attributes.word;

        if (this.powerWordList) {
          this._powerWord$.next(this.powerWordList[0]['Word']);
          this.startPowerWordStream();
        }
      }
    })

  }

  startPowerWordStream() {
      const stream = this.counter.pipe(take(this.powerWordList.length));
      stream.subscribe(number => {
        // The condition accounts for the first item already being set
        if (number > 0) {
          this._powerWord$.next(this.powerWordList[number]['Word']);
          if ((number + 1) === this.powerWordList.length) {
            this.startPowerWordStream();
          }
        }
      });
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
