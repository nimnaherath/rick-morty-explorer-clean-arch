import CharacterCollection from "../collections/CharacterCollection";
import CharacterRepositoryContract from "../contracts/CharacterRepositoryContract";
import Character from "../models/character";
import axios from "axios";

class CharacterRepository implements CharacterRepositoryContract {
  async all(): Promise<CharacterCollection> {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character"
    );
    const data = response.data;

    return new CharacterCollection(
      data.results.map((character: Character) => character)
    );
  }
}

export default CharacterRepository;
