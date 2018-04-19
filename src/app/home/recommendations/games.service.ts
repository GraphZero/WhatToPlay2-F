import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {url} from '../../localhost';
import {RecommendedGames} from '../domain/recommended-games';

@Injectable()
export class GamesService {

  constructor(private httpClient: HttpClient) {
  }

  getGames(): Observable<RecommendedGames> {
    return this.httpClient
      .get<RecommendedGames>(url + '/getSuggestionsForUser/?userId=1');
  }

}
