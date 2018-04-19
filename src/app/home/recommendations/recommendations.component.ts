import {Component, OnInit} from '@angular/core';
import {GamesService} from './games.service';
import {RecommendedGames} from '../domain/recommended-games';
import {tap} from 'rxjs/operators';
import {map} from 'rxjs/operator/map';

@Component({
  selector: 'wtp-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})

export class RecommendationsComponent implements OnInit {
  recommendedGames: RecommendedGames;

  constructor(private gamesService: GamesService) {
  }

  ngOnInit() {
  }

  getRecommendations(): void {
    this.gamesService
      .getGames()
      .subscribe(games => {
        this.recommendedGames = games;
      });
  }

}
