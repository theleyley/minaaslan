import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {delay, map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {PortfolioModel} from '../models/porfolio.model';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class PortfolioService {

    public baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = `${environment.local}`;
    }

    getPortfolioItems(): Observable<PortfolioModel[]> {
        const url = `${this.baseUrl}/portfolios`;
        return this.http.get<any>(url, {withCredentials: true})
            .pipe(map((response) => {
                return response.data;
            }, (err: any) => {
                return err;
            }));
    }
}