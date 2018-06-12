import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/Rx';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';


@Injectable()
export class BaseService {

    //protected url: string = environment.url;
    //url: string = "http://localhost:3000/"; 
    url: string = "https://itufinalpro.eu-gb.mybluemix.net/"
    headers: Headers;
    protected options: RequestOptions;
    http: Http;

    constructor(rsc: string, http: Http) {
        this.url = this.url.concat(rsc);
        this.http = http;
        this.headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        this.options = new RequestOptions({ headers: this.headers });
    }

    getAll() {
        return this.getRequest(this.url);
    }

    getById(id: any) {
        return this.getRequest(this.url + "/" + id);
    }

    protected getRequest(url: string) {
      return this.http.get(url, this.options).map( response => response.json());
    //  this.authentication.checkToken(return this.http.get(url, this.options).map( response => response.json());)

    }

    add(body: any) {
        return this.http.post(this.url, body, this.options).map(response => response.json());
       // this.authentication.checkToken(return this.http.post(this.url, body, this.options).map(response => response.json());)

    }

    delete(id: number) {
      return this.http.delete(this.url + '/' + id, this.options).map(response => response.json());
        //this.authentication.checkToken(return this.http.delete(this.url + '/' + id, this.options).map(response => response.json());)

    }

    update(body: any=[]) {

        return this.http.put(this.url, body, this.options).map(response => response.json());
        //this.authentication.checkToken(return this.http.delete(this.url + '/' + id, this.options).map(response => response.json());)

    }

}
