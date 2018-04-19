import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login/login.service';
import {User} from '../../shared/user';

@Component({
  selector: 'wtp-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {
  currentUser: User;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
      this.loginService
        .login('A', 'B')
        .subscribe(user => this.currentUser = user );
  }

}
