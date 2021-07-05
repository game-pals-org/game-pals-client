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
    return this.http.post('https://gamepals.herokuapp.com/account/login',  JSON.stringify({username: username, password: password}), {'headers':headers});
  }

  public registerUser (username: string, password: string): Observable<any> {
    const headers = { 'content-type': 'application/json'};
    return this.http.post('https://gamepals.herokuapp.com/account/register', JSON.stringify({username: username, password: password}), {'headers':headers});
  }


}
