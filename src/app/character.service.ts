import { Injectable } from '@angular/core';
import { Character } from './models/Character';

@Injectable()

export class CharacterService {
  getCharacters(callback: any): void {
    const url = 'http://localhost:5000/api/characters.json';

    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () => {
      if(request.status !== 200) return;

      const returnedData = JSON.parse(request.responseText);
      callback(returnedData);
    };
    request.send();
  };
}
