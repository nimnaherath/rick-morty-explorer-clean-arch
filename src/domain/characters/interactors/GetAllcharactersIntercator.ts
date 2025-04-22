import CharacterRepository from "../repositories/CharacterRepository";

class GetAllcharactersIntercator{
    constructor(private characterRepository: CharacterRepository) {}

    async execute() {
        const characters = await this.characterRepository.all();
        return characters;
    }
}

export default GetAllcharactersIntercator