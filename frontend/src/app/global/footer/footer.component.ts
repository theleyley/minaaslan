import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';
import { GlobalModel } from '../models/global.model';
import { Router } from '@angular/router'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  globalItems: GlobalModel = {};
  constructor(private globalService: GlobalService, private router: Router) { }

  ngOnInit(): void {
    this.globalService.getGlobalItems().subscribe((items) => {
      this.globalItems = items;
    })
  }

  route(route: string) {
    this.router.navigateByUrl(route);
  }
}
