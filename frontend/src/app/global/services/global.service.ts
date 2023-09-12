import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {delay, map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {GlobalModel} from '../models/global.model';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class GlobalService {

    public baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = `${environment.apiBase}`;
    }

    getGlobalItems(): Observable<GlobalModel> {
        const url = `${this.baseUrl}/api/global?populate=links`;
        return this.http.get<any>(url, {withCredentials: true})
            .pipe(map((response) => {
                return response.data;
            }, (err: any) => {
                return err;
            }));
    }
}