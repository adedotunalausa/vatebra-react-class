import Form from "./Form";
import { useMyAppContext } from "./App";
import { Movie } from "./Movie"

export const MovieList = () => {

    const { movieList } = useMyAppContext();

    return (
        <div className="movie-list">
            {
                movieList.map((movie) => {
                    const { id, image, title, year, duration, type, tagColor } = movie;
                    return <Movie
                        key={id}
                        image={image}
                        title={title}
                        year={year}
                        duration={duration}
                        type={type}
                        tagColor={tagColor}
                    />
                })
            }
            {/* <Form /> */}
        </div>
    )
}