import {Game} from '../domain/game';

export class GameAnim{
  game: Game;
  gameOpinion: string;

  constructor(game: Game, state: string) {
    this.game = game;
    this.gameOpinion = state;
  }
}
