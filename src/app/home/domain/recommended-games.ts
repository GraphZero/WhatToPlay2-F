import {User} from '../../shared/user';
import {Game} from './game';

export class RecommendedGames {
  owningUserId: number;
  games: Game[];
}
