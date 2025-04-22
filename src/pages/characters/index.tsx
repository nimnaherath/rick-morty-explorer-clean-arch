import { useState, useEffect } from 'react'
import CharacterCollection from '../../domain/characters/collections/CharacterCollection'
import GetAllcharactersIntercator from '../../domain/characters/interactors/GetAllcharactersIntercator'
import CharacterRepository from '../../domain/characters/repositories/CharacterRepository'


function Index() {
    const [characters, setCharacters] = useState<CharacterCollection>()

    useEffect(() => {

        const getCharactersInteractor = new GetAllcharactersIntercator(
            new CharacterRepository()
        )

        getCharactersInteractor
            .execute()
            .then((characterCollections: CharacterCollection) => {
                setCharacters(characterCollections)
            });
    }, [])

    if (!characters) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <h1>Characters</h1>
            {characters && characters.characters.map((character) => (
                <div key={character.id}>
                    <h2>{character.name}</h2>
                    <p>Status: {character.status}</p>
                    <p>Species: {character.species}</p>
                    <img src={character.image} alt={character.name} />
                </div>
            ))}
        </div>
    )
}

export default Index
