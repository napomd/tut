import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { BaseService } from './baseservice.service';

@Injectable()
export class MainService  extends BaseService {

  constructor(http:Http) { 
    super("", http);
  }

}
