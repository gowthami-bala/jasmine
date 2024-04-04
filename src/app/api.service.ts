import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl=  'https://jsonplaceholder.typicode.com/posts'
  constructor(private http:HttpClient) { }

  getUSers() {
    return this.http.get(this.baseUrl);
  }

  postUsers(data:any) {
    return this.http.get(this.baseUrl,data);
  }

}
