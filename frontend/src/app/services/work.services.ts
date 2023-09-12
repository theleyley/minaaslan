import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {delay, map} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {WorkModel} from "../models/work.model";


@Injectable()
export class WorkService {

    public baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = `${environment.apiBase}`;
    }

    getWork(): Observable<WorkModel[]> {
        const url = `${this.baseUrl}/api/work-entries?populate[workRow][populate]=*`;
        return this.http.get<any>(url, {withCredentials: true})
            .pipe(map((response) => {
                return response.data;
            }, (err: any) => {
                return err;
            }));
    }
}