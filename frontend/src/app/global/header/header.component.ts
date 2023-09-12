import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { GlobalService } from '../services/global.service';
import { GlobalModel } from '../models/global.model';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  globalItems: GlobalModel = {};
  constructor(private router: Router, private globalService: GlobalService,) { }

  ngOnInit(): void {
    this.globalService.getGlobalItems().subscribe((items) => {
      this.globalItems = items;
    })
  }

  route(route: string) {
    this.router.navigateByUrl(route);
  }

}
