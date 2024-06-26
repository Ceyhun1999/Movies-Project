import MovieContainer from "@/containers/movieContainer/MovieContainer";
import Movies from "@/mocks/movies.json";
import { notFound } from "next/navigation";

async function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function MoviePage({ params }: { params: { id: string } }) {
    await delay(2000);
    const movieDetail = Movies.results.find((movie) => movie.id.toString() === params.id);

    if (!movieDetail) {
        notFound();
    }

    return <MovieContainer movie={movieDetail} />;
}

export default MoviePage;
