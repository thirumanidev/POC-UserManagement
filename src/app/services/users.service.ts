import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interface/user';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  public getAll() {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    var url = environment.API_URLS.BASE_URL + environment.API_URLS.USERS;
    return this.httpClient.get<User[]>(url, {headers}).pipe(map(res => {
      return res;
    }));
  }

  public get(id: string) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    var url = environment.API_URLS.BASE_URL + environment.API_URLS.USERS + `/${id}`;
    return this.httpClient.get<User>(url, {headers}).pipe(map(res => {
      return res;
    }));
  }

}
