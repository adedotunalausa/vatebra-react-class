import { useMyAppContext } from "./App";

const MovieDetails = ({ duration, year, type, tagColor }) => {
    const { name } = useMyAppContext();
    return (
        <div className="movie-details">
            <p>{year} .</p>
            <p>{duration}</p>
            <div style={{
                color: `${tagColor}`
            }}>
                <p>{type}</p>
            </div>
            <h1>{name}</h1>
        </div>
    )
}

export default MovieDetails;