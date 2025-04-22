import CharacterCollection from "../collections/CharacterCollection";

interface CharacterRepositoryContract {
  all(): Promise<CharacterCollection[]>;
}

export default CharacterRepositoryContract;
