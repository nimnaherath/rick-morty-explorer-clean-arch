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
        <div className="bg-white shadow-md rounded-lg p-4 max-w-sm mx-auto">
            <img className="w-full h-48 object-cover rounded-t-lg" src={image} alt={name} />
            <div className="p-4">
            <h2 className="text-xl font-bold text-gray-800 mb-2">{name}</h2>
            <p className="text-gray-600"><strong>Status:</strong> {status}</p>
            <p className="text-gray-600"><strong>Species:</strong> {species}</p>
            {type && <p className="text-gray-600"><strong>Type:</strong> {type}</p>}
            <p className="text-gray-600"><strong>Gender:</strong> {gender}</p>
            <p className="text-gray-600"><strong>Origin:</strong> {origin.name}</p>
            <p className="text-gray-600"><strong>Location:</strong> {location.name}</p>
            <p className="text-gray-600"><strong>Episodes:</strong> {episode.length}</p>
            <p className="text-gray-600"><strong>Created:</strong> {new Date(created).toLocaleDateString()}</p>
            <a 
                className="text-blue-500 hover:underline mt-4 block" 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer"
            >
                View More
            </a>
            </div>
        </div>
    )
}

export default Card
