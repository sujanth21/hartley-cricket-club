import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { Players } from '../../data/players.interface';

@Component({
  selector: 'page-player',
  templateUrl: 'player.html',
})
export class PlayerPage implements OnInit{
  player: Players[];

  constructor ( private navParams: NavParams) {}

  ngOnInit() {
    this.player = this.navParams.data;
  }
}
