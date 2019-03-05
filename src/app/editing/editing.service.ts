import { Injectable } from '@angular/core';
import {model} from '../reg-model';
import {HttpClient} from '@angular/common/http';
import {environment} from './../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditingService {
  baseurl=environment.ServiceUrl;
  
  constructor(private http:HttpClient) { }

  editedvalue(hold,_id):Observable<model>{
    var url=this.baseurl+'/edit'+'/'+_id;
    return this.http.put<model>(url,hold);
}

editingList(_id):Observable<model>{
  var url=this.baseurl+'/find'+'/'+_id;
   return this.http.get<model>(url);
}
}