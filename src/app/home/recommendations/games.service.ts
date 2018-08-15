import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {url} from '../../localhost';
import {RecommendedGames} from '../domain/recommended-games';
import {Game} from '../domain/game';

@Injectable()
export class GamesService {

    constructor(private httpClient: HttpClient) {
    }

    getGamesById(gameId: number): Observable<Game> {
        return this.httpClient
            .get<Game>(url + '/getSuggestionsForUser/?userId=' + gameId);
    }

    getGames(userId: number): Observable<RecommendedGames> {
        return this.httpClient
            .get<RecommendedGames>(url + '/getSuggestionsForUser/?userId=' + userId);
    }

    getGamesByName(input: string): Observable<Game[]> {
        return this.httpClient
            .get<Game[]>(url + '/findGameContaining/?field=' + input);
    }

    sendOpinion(userId: number, gameId: number, interest: string): Observable<Object> {
        const totalUrl = url + '/addRating?userId=' + userId + '&gameId=' + gameId + '&userRating=' + interest;
        return this.httpClient.post(totalUrl, {});
    }


}
