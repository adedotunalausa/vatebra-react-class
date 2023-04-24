import Image from "./Image";
import Title from "./Title";
import MovieDetails from "./MovieDetails";

export const Movie = ({ image, title, duration, year, type, tagColor }) => {
    return (
        <article className="movie">
            <Image image={image} />
            <Title title={title} />
            <MovieDetails duration={duration} year={year} type={type} tagColor={tagColor} />
        </article>
    )
}

export default Movie;