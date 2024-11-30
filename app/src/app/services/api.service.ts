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
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Im1vaGFtZWQgZWxuYWdhciIsImVtYWlsIjoibW9oYW1lZGVsbmFnYXJAZ21haWwuY29tIiwiaWF0IjoxNzMyOTA5MDI5LCJleHAiOjE3MzI5MTk4Mjl9.bECaG4hQbYvkwEZBJ6ZQsHw96urdih1Mvp6HFByj4vU',
    });
    return this._HttpClient.post('http://localhost:10000/new-leave' , data , {headers})
   }

  getCountries():Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Im1vaGFtZWQgZWxuYWdhciIsImVtYWlsIjoibW9oYW1lZGVsbmFnYXJAZ21haWwuY29tIiwiaWF0IjoxNzMyOTA5MDI5LCJleHAiOjE3MzI5MTk4Mjl9.bECaG4hQbYvkwEZBJ6ZQsHw96urdih1Mvp6HFByj4vU',

    });
    return this._HttpClient.get('http://localhost:10000/all-countries' , {headers})
  }
}
