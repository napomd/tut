import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { BaseService } from './baseservice.service';

@Injectable()
export class SettingsService extends BaseService {

  constructor(http:Http) { 
    super("settings", http);
  }

  getSettings(body: any) {
    return this.http.post(this.url, body, this.options).map(response => response.json());
  }

  updateSettings(body: any){
    return this.http.post(`${this.url}/update`, body, this.options).map(response => response.json());
  }

}
