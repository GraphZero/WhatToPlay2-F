import {Collection} from './collection';
import {Franchise} from './franchise';
import {Developer} from './developer';
import {GameMode} from './game-mode';
import {Genre} from './genre';
import {PlayerPerspective} from './player-perspective';
import {Cover} from './cover';
import {Website} from './website';

export class Game {
  id: number;
  name: string;
  slug: string;
  url: string ;
  summary: string;
  storyline: string;
  hypes: number;
  popularity: number;
  rating: number;
  ratingCount: number;
  aggregatedRating: number;
  aggregatedRatingCount: number;
  totalRating: number;
  totalRatingCount: number;
  createdAt: string;
  updatedAt: string;
  firstReleaseDate: string;
  collection: Collection;
  franchise: Franchise;
  developer: Developer[];
  gameMode: GameMode[];
  genre: Genre[];
  playerPerspective: PlayerPerspective[];
  website: Website[];
  status: string;
  timeToBeat: number;
  esrb: string;
  pegi: string;
  external: string;
  cover: Cover;
}