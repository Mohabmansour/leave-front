import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  _HttpClient = inject(HttpClient);

  constructor() {

   }

  adminLogin(data:any):Observable<any>{

   return this._HttpClient.post('http://localhost:10000/login' , data )
  }

  addNewUser(data:any):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${ document.cookie }`
    });
    return this._HttpClient.post('http://localhost:10000/new-leave' , data , {headers})
   }
   getUserDetails(data:any):Observable<any>{

    return this._HttpClient.post('http://localhost:10000/get-leave-details' , data )
   }
  getCountries():Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${ document.cookie }`

    });
    return this._HttpClient.get('http://localhost:10000/all-countries' , {headers})
  }
}
