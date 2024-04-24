import MovieContainer from "@/containers/movieContainer/MovieContainer";
import Movies from "@/mocks/movies.json";
import { notFound } from "next/navigation";

function MoviePage({ params }: { params: { id: string } }) {
    const movieDetail = Movies.results.find((movie) => movie.id.toString() === params.id);

    if (!movieDetail) {
        notFound();
    }

    return <MovieContainer movie={movieDetail} />;
}

export default MoviePage;
