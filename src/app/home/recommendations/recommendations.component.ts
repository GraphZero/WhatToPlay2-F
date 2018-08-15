import {Component, OnInit} from '@angular/core';
import {GamesService} from './games.service';
import {RecommendedGames} from '../domain/recommended-games';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {GameAnim} from './gameAnim';
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';

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
      transition('* => Liked', [
        style({
          backgroundColor: '#32CD32',
        }),
        animate('600ms ease-in', style({
          backgroundColor: '#32CD32',
          transform: 'translateX(100%) scale(0.5)'
        }))
      ]),
      transition('* => Disliked', [
        style({
          backgroundColor: '#CD5C5C',
        }),
        animate('600ms ease-in', style({
          backgroundColor: '#eee',
          transform: 'translateX(100%) scale(0.5)'
        }))
      ]),
      transition('* => Neutral', [
        style({
          backgroundColor: '#00BFFF',
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
  ]
})

export class RecommendationsComponent implements OnInit {
  recommendedGames: RecommendedGames;
  gamesAnims: GameAnim[];

  constructor(private gamesService: GamesService,
              private spinnerService: Ng4LoadingSpinnerService) {
  }

  ngOnInit() {
    this.spinnerService.show();
    this.getRecommendations();
  }

  getRecommendations(): void {
    this.gamesService
      .getGames()
      .subscribe(games => {
        this.recommendedGames = games;
        this.gamesAnims = this.recommendedGames.recommendedGames.map(value => new GameAnim(value, 'notRated'));
        this.spinnerService.hide();
      });
  }

  sendOpinion(game: GameAnim, opinion: string) {
    game.gameOpinion = opinion;
    const index = this.gamesAnims.indexOf(game, 0);
    setTimeout(() => this.gamesAnims.splice(index, 1), 600);
    if (this.gamesAnims.length < 5) {
      this.getMoreGames();
    }
  }

  getMoreGames(): void {
    this.gamesService
      .getGames()
      .subscribe(games => {
        games.recommendedGames.map(value => new GameAnim(value, 'notRated')).forEach(game => this.gamesAnims.push(game));
      });
  }

}
