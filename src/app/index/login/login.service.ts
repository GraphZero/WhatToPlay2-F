import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {User} from '../../shared/user';

@Injectable()
export class LoginService {

  constructor() {
  }

  public login(username: string, password: string): Observable<User> {
    const user = new User(1, 'TestUser', 'test123');
    return of(user);
  }

}
