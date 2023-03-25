export const Movie = ({ image, title, duration, year, type, tagColor }) => {
    return (
        <article className="movie">
            <Image image={image} />
            <Title title={title} />
            <MovieDetails duration={duration} year={year} type={type} tagColor={tagColor} />
        </article>
    )
}

export const Image = ({ image }) => <img src={image} alt="movie" />

export const Title = ({ title }) => <h4>{title}</h4>

export const MovieDetails = ({ duration, year, type, tagColor }) => {
    return (
        <div className="movie-details">
            <p>{year} .</p>
            <p>{duration}</p>
            <div style={{
                color: `${tagColor}`
            }}>
                <p>{type}</p>
            </div>
        </div>
    )
}

export default Movie;