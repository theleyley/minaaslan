import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WorkService} from '../services/work.services';

@Component({
  selector: 'ms-portfolio',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  work: any;
  constructor(private route: ActivatedRoute, private workService: WorkService) { }

  ngOnInit(): void {
    const workId = this.route.snapshot.paramMap.get('id');
    this.workService.getWorkItem(workId).subscribe((data) => {
      if(data && data.length) {
        this.work = data[0].attributes;
      }
    })
  }

}
