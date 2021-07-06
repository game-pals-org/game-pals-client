import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginStateService {

  private _isLogged: Observable<boolean> = new Observable<boolean>(o => o.next(false));
  private _username: string = 'guest';


  get isLogged(): Observable<boolean> {
    return this._isLogged;
  }

  set isLogged(value: Observable<boolean>) {
    this._isLogged = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  constructor() { }
}
