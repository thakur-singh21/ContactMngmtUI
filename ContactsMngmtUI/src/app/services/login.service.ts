import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/model/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
  };
  private baseUrl = 'http://localhost:8080/cm/';


  public saveUsers(user: any) {
    return this.http.post(this.baseUrl + 'save', user);
  }
  public login(user: any) {
    console.log(user);

    return this.http.post<User>(this.baseUrl + 'login', user, this.httpOptions);
  } n
}
