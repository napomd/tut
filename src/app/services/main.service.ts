import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { BaseService } from './baseservice.service';

@Injectable()
export class MainService  extends BaseService {

  constructor(http:Http) { 
    super("", http);
  }

  getImages(body: any) {
    return this.http.post(this.url, body, this.options).map(response => response.json());
  }

  updateImage(body: any){
    return this.http.post(`${this.url}delete`, body, this.options).map(response => response.json());
  }

}
