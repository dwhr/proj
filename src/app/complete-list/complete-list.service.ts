import { Injectable } from '@angular/core';
import { model } from '../reg-model';
import { HttpClient } from '@angular/common/http';
import { environment } from '.././../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CompleteListService {
  baseurl = environment.ServiceUrl;
  /* url:any; */
  constructor(private http : HttpClient) { }

  getcompletelist() : Observable<model>{
   const url = this.baseurl + '/display';
    return this.http.get<model>(url);
  }
 /*  editingList(_id):Observable<model>{
   var url=this.baseurl+'/edit';
    return this.http.put<model>(url,_id);
  } */

  deleteList(_id) : Observable<model>{
    var url = this.baseurl + '/delete' + '/' + _id;
    return this.http.delete<model>(url);
  }

}
