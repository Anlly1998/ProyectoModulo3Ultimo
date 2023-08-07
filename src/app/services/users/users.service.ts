import { Injectable } from '@angular/core';
import { LoginI } from '../../components/models/login.interface';
import { ResponseI } from '../../components/models/response.interface';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url:string = 'http://localhost:8000/api/';

  constructor( private http:HttpClient) { }

  //Login
  LoginByEmail(form:LoginI): Observable<ResponseI>{
    let direccion = this.url + "login";
    return this.http.post<ResponseI>(direccion, form);
  }

  //Logout
  LogoutUser(token:any): Observable<ResponseI>{
    let direccion = this.url + "logout";
    return this.http.post<ResponseI>(direccion, token);
  }
}
