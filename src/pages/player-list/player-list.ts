import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { PlayerPage } from '../player/player';

import { Players } from '../../data/players.interface';

@Component({
  selector: 'page-player-list',
  templateUrl: 'player-list.html',
})
export class PlayerListPage implements OnInit{
  playerGroup: { grade: String, players: Players[], icon: String };
  playerPage = PlayerPage;

  constructor ( private navParams: NavParams){}

  ngOnInit() {
    this.playerGroup = this.navParams.data;
  }
}
