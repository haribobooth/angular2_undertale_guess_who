export class Character {

  name: string;
  species: string;
  town: string;
  hair: string;
  tall: boolean;
  url: string;

  constructor(details: {
    name: string,
    species: string,
    town: string,
    hair: string,
    tall: boolean,
    url: string
  }) {
    this.name = details.name;
    this.species = details.species;
    this.town = details.town;
    this.hair = details.hair;
    this.tall = details.tall;
    this.url = details.url;
  };

  question(key: string, value: string|boolean): boolean {
    return (this[key] === value)
  };

}
