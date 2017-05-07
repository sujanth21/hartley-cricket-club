import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlayerListPage } from './player-list';

@NgModule({
  declarations: [
    PlayerListPage,
  ],
  imports: [
    IonicPageModule.forChild(PlayerListPage),
  ],
  exports: [
    PlayerListPage
  ]
})
export class PlayerListModule {}
