import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { BaseService } from './baseservice.service';

@Injectable()
export class LoginService extends BaseService {

  constructor(http:Http) { 
    super("login", http);
  }

  getLogin(body: any) {
    return this.http.post(this.url, body, this.options).map(response => response.json());
  }

}
