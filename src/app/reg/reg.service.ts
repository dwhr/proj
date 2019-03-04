import { Injectable } from '@angular/core';
import {model} from '../reg-model';
import {HttpClient} from '@angular/common/http';
import {environment} from './../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegService {
  
    baseurl=environment.ServiceUrl;
    url=this.baseurl+'/create';
  constructor(private http:HttpClient) { }

  getregvalue(hold):Observable<model>{
    return this.http.post<model>(this.url,hold);
}
}