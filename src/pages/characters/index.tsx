import { useState, useEffect } from 'react'
import CharacterCollection from '../../domain/characters/collections/CharacterCollection'
import GetAllcharactersIntercator from '../../domain/characters/interactors/GetAllCharactersIntercator'
import CharacterRepository from '../../domain/characters/repositories/CharacterRepository'
import Card from '../../components/Card'


function Index() {
    const [characters, setCharacters] = useState<CharacterCollection>()

    useEffect(() => {

        const getCharactersInteractor = new GetAllcharactersIntercator(
            new CharacterRepository()
        )

        getCharactersInteractor
            .execute()
            .then((characterCollections: CharacterCollection) => {
                setCharacters(characterCollections);
            });
    }, [])

    return (
        <div>
            <h1>Characters</h1>
            {characters && characters.characters.map((character) => (
            <Card
                key={character.id}
                name={character.name}
                status={character.status}
                species={character.species}
                id={character.id}
                type={character.type}
                gender={character.gender}
                origin={character.origin}
                location={character.location}
                image={character.image}
                episode={character.episode}
                url={character.url}
                created={character.created}
            />
            ))}
        </div>
    )
}

export default Index
