import { Component, OnInit, Input } from '@angular/core';
import {WorkAttribute, WorkModel} from "../../models/work.model";
import {Router} from '@angular/router';
import {WorkService} from "../../services/work.services";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input() excludedId?: number;
  works: WorkModel[] = [];

  constructor(private router: Router, private workService: WorkService) { }

  ngOnInit(): void {
    this.getWorkItems();
  }

  viewWork(work: WorkModel) {
    const route = work.attributes.slug;
    this.router.navigateByUrl(`/work/${route}`);
    this.excludedId = work.id;
    this.getWorkItems();
  }

  getWorkItems() {
    this.works = [];
    this.workService.getWork().subscribe((workItems) => {
      if (workItems) {

        if (this.excludedId) {
          workItems.forEach(item => {
            if (item.id !== this.excludedId) {
              this.works.push(item);
            }
          })
        } else {
          this.works = workItems;
        }

      }
    })
  }

}
