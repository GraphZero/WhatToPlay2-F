import {Component, OnInit} from '@angular/core';
import {GamesService} from './games.service';
import {RecommendedGames} from '../domain/recommended-games';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {GameAnim} from './gameAnim';
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';
import {UserService} from '../user.service';
import {log} from 'util';
import {NgbDropdown, NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import {Game} from '../domain/game';

@Component({
    selector: 'wtp-recommendations',
    templateUrl: './recommendations.component.html',
    styleUrls: ['./recommendations.component.css'],
    animations: [
        trigger('flyInOut', [
            state('notRated', style({transform: 'translateX(0)'})),
            transition('void => *', [
                style({
                    transform: 'translateX(-100%) scale(0.5)',
                }),
                animate(500)
            ]),
            transition('* => INTERESTED', [
                style({
                    backgroundColor: '#32CD32',
                }),
                animate('600ms ease-in', style({
                    backgroundColor: '#32CD32',
                    transform: 'translateX(100%) scale(0.5)'
                }))
            ]),
            transition('* => NOT_INTERESTED', [
                style({
                    backgroundColor: '#CD5C5C',
                }),
                animate('600ms ease-in', style({
                    backgroundColor: '#eee',
                    transform: 'translateX(100%) scale(0.5)'
                }))
            ]),
            transition('* => void', [
                animate(500, style({transform: 'translateX(100%)'}))
            ])
        ])
    ],
    providers: [NgbDropdownConfig]
})

export class RecommendationsComponent implements OnInit {
    recommendedGames: RecommendedGames;
    gamesAnims: GameAnim[];
    searchedGames: Game[];
    dropdown: string;

    constructor(private gamesService: GamesService,
                private spinnerService: Ng4LoadingSpinnerService,
                private userService: UserService,
                private dropDown: NgbDropdown) {
    }

    ngOnInit() {
        this.spinnerService.show();
        this.getRecommendations();
    }

    getRecommendations(): void {
        this.gamesService
            .getGames(this.userService.user.id)
            .subscribe(games => {
                this.recommendedGames = games;
                this.gamesAnims = this.recommendedGames.games.map(value => new GameAnim(value, 'notRated'));
                this.spinnerService.hide();
            });
    }

    sendOpinion(game: GameAnim, opinion: string) {
        this.gamesService
            .sendOpinion(this.userService.user.id, game.game.id, opinion)
            .subscribe((res) => {
                console.log(res);
            });
        game.gameOpinion = opinion;
        const index = this.gamesAnims.indexOf(game, 0);
        setTimeout(() => this.gamesAnims.splice(index, 1), 600);
        if (this.gamesAnims.length < 5) {
            this.getMoreGames();
        }
    }

    getMoreGames(): void {
        this.gamesService
            .getGames(this.userService.user.id)
            .subscribe(games => {
                games
                    .games
                    .map(value => new GameAnim(value, 'notRated'))
                    .forEach(game => this.gamesAnims.push(game));
            });
    }

    onSearchChange(): void {
        this.gamesService
            .getGamesByName(this.dropdown)
            .subscribe(res => {
                this.searchedGames = res;
            });
    }

    updateInput(game: Game) {
        this.dropdown = game.name;
        this.gamesAnims.unshift(new GameAnim(game, 'notRated'));
    }
}
