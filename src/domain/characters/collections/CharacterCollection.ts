import Character from "../models/character";

class CharacterCollection {
  public characters: Character[] = [];

  constructor(characters: Character[]) {
    this.characters = characters;
  }

}

export default CharacterCollection;
