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
        <div className="p-6 m-4">
            <div className="mb-8 space-y-2">
              <h1 className='text-3xl text-black font-bold text-center'>Characters</h1>
              <h2 className='text-xl text-gray-600 font-semibold text-center'>Rick and Morty</h2>
              <div className="w-24 h-1 mx-auto bg-blue-500 rounded my-4"></div>
            </div>
            <div className="grid grid-cols-4 gap-4">
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
        </div>
    )
}

export default Index
