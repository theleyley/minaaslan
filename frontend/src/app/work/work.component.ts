import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WorkService} from '../services/work.services';
import {environment} from "../../environments/environment";

@Component({
  selector: 'ma-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  workData: any;
  env = environment;
  constructor(private route: ActivatedRoute, private workService: WorkService) { }

  ngOnInit(): void {
    const workId = this.route.snapshot.paramMap.get('id');
    this.workService.getWorkItem(workId).subscribe((data) => {
      if(data && data.length) {
        this.workData = data[0].attributes;
      }
    })
  }

  buildPath(path: any) {
    return `${this.env.apiBase}${path}`;
  }

}
