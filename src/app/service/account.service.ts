import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Announcement} from "../model/announcement.model";
import {LoginRegisterInfo} from "../model/login-register-info.model";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { };

  public getAnnouncementsFromUserWithUsername(username: string): Observable<Announcement[]> {
    return this.http.get<Announcement[]>('https://gamepals.herokuapp.com/account/announcements/' + username);
  }

  public loginUser (username: string, password: string): Observable<any> {
    const headers = { 'content-type': 'application/json'};
    const body = JSON.stringify({username: username, password: password});
    const result = this.http.post('https://gamepals.herokuapp.com/account/login', body, {'headers':headers});
    // result.subscribe(data => {console.log(data)});
    return result;
  }

  public registerUser (username: string, password: string): Observable<any> {
    const headers = { 'content-type': 'application/json'};
    const body = JSON.stringify({username: username, password: password});
    const result = this.http.post('https://gamepals.herokuapp.com/account/register', body, {'headers':headers});
    // result.subscribe(data => {console.log(data)});
    return result;
  }


}
