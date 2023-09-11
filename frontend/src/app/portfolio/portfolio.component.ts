import { Component, OnInit } from '@angular/core';
import {PortfolioService} from "./services/portfolio.service";
import {PortfolioModel} from "./models/porfolio.model";

@Component({
  selector: 'ms-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portfolioItems: PortfolioModel[] = [];
  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.getPortfolioItems().subscribe((items) =>{
      this.portfolioItems = items;
    })
  }

}
