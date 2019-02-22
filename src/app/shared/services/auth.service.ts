import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLoggedIn: boolean;

  constructor() { }

  set isLoggedIn(value: boolean) {
    this._isLoggedIn = value;
  }

  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }
}
