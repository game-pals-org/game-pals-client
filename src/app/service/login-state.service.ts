import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginStateService {

  private _isLogged: boolean = false;
  private _username: string = '';


  get isLogged(): boolean {
    return this._isLogged;
  }

  set isLogged(value: boolean) {
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
