import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLoggedIn: boolean;
  private _userGroup: number;

  constructor(private router: Router) { }

  set isLoggedIn(value: boolean) {
    this._isLoggedIn = value;
  }

  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  set userGroup(value: number) {
    this._userGroup = value;
  }

  get userGroup(): number {
    return this._userGroup;
  }

  logout(): void {
    this._userGroup = undefined;
    this.isLoggedIn = undefined;
    this.router.navigate(['login']);
  }
}
