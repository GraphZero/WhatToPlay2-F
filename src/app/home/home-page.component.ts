import {Component, Input, OnInit} from '@angular/core';
import {User} from '../shared/user';
import {UserService} from './user.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'wtp-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  animations: [
    trigger('anim', [
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'scale(1.1)'
        }),
        animate(1000)
      ])]
    )]
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

  getUrl() {
    return 'url(\'../../assets/piramid.png\')';
  }

}
