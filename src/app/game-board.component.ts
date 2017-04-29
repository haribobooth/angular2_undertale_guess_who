import { Component, OnInit } from '@angular/core';

import { CharacterService } from './character.service';
import { Character } from './models/Character';

@Component({
  selector: 'game-board',
  templateUrl: './game-board.component.html'
})

export class GameBoard {
  characters: Character[];

  constructor(private characterService: CharacterService) {
  };

  ngOnInit(): void {
    this.characterService.getCharacters((returnedData: any) => {
      this.characters = returnedData
    });
  }
}
