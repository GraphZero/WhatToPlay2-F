import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../shared/user';
import {of} from 'rxjs/observable/of';

@Injectable()
export class UserService {
  user = new User(1, 'TestUser', 'test123');

  constructor(private http: HttpClient) {
  }

  getById(id: number) {
    return of(this.user);
  }

  create(user: User) {
    return of(this.user);
  }

  update(user: User) {
    return of(this.user);
  }

  delete(id: number) {
    return of(this.user);
  }

}
