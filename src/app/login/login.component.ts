import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  userLevel: number;

  constructor(private router: Router,
              private auth: AuthService) { }

  login() {
    this.auth.isLoggedIn = true;
    this.auth.userGroup = this.userLevel;
    this.router.navigate(['/portal']);
  }

}
