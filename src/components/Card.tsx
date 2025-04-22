type CardProps = {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: { name: string; url: string };
    location: { name: string; url: string };
    image: string;
    episode: string[];
    url: string;
    created: string;
};

function Card({ id, name, status, species, type, gender, origin, location, image, episode, url, created }: CardProps) {
    return (
        <div>
            <h2>{id}</h2>
            <img src={image} alt={name} />
            <p>Status: {status}</p>
            <p>Species: {species}</p>
            <p>Type: {type}</p>
            <img src={image} alt={name} style={{ width: '200px', height: '200px' }} />
            <h2>{name}</h2>
            <p><strong>Status:</strong> {status}</p>
            <p><strong>Species:</strong> {species}</p>
            {type && <p><strong>Type:</strong> {type}</p>}
            <p><strong>Gender:</strong> {gender}</p>
            <p><strong>Origin:</strong> {origin.name}</p>
            <p><strong>Location:</strong> {location.name}</p>
            <p><strong>Episodes:</strong> {episode.length}</p>
            <p><strong>Created:</strong> {new Date(created).toLocaleDateString()}</p>
            <a href={url} target="_blank" rel="noopener noreferrer">View More</a>
        </div>
    )
}

export default Card
