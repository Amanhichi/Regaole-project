import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl='http://localhost:3000/add-data';

  constructor(private http:HttpClient){}

  adduser(data:{name:String;email:String;mobile:string;pin_code:string;budget:string;}):Observable<any>{
    return this.http.post(this.apiUrl,data);
  }
}
