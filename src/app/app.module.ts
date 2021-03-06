import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { CharacterService } from './character.service';
import { GameBoard } from './game-board.component';
import { CharacterCard } from './character-card.component';

@NgModule({
  imports:      [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    GameBoard,
    CharacterCard
  ],
  providers: [ CharacterService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
