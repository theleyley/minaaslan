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
  workId: any;
  workDataId: any;
  constructor(private route: ActivatedRoute, private workService: WorkService) { }

  ngOnInit(): void {
    this.workId = this.route.snapshot.paramMap.get('id');
    this.workService.getWorkItem(this.workId).subscribe((data) => {
      if(data && data.length) {
        this.workData = data[0].attributes;
        this.workDataId = data[0].id;
      }
    })
  }

  buildPath(path: any) {
    return `${this.env.apiBase}${path}`;
  }

  isNonImageMediaType(type: string) {
    let isValid = false;

    if (type === 'YouTube Video' || type === 'PDF') {
        isValid = true;
    }

    return isValid;
  }

}
