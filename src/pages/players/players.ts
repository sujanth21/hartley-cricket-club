import { Component, OnInit } from '@angular/core';

import { Players } from '../../data/players.interface';
import players from '../../data/players';

import { PlayerListPage } from '../player-list/player-list';

@Component({
  selector: 'page-players',
  templateUrl: 'players.html',
})
export class PlayersPage implements OnInit{
  playerCollection: { year: String, players: Players[], icon: String }[];
  playerListPage = PlayerListPage;

  ngOnInit() {
    this.playerCollection = players;
  }
}
