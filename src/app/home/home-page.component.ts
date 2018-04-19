import {Component, Input, OnInit} from '@angular/core';
import {User} from '../shared/user';
import {UserService} from './user.service';

@Component({
  selector: 'wtp-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  @Input() loggedUser: User;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService
      .getById(5)
      .subscribe(user => this.loggedUser = user);
  }

}
