import React from "react";
import Movies from "@/mocks/movies.json";
import Genres from "@/mocks/genres.json";
import FeaturedMovie from "@/components/featuredMovie/FeaturedMovie";
import Categories from "@/components/categories/Categories";
import MoviesSection from "@/components/moviesSection/MoviesSection";

function HomeContainer({ selectedCategory }: { selectedCategory: any }) {
    return (
        <div>
            <FeaturedMovie movie={Movies.results[0]} isCompact={true} />
            <Categories categories={Genres.genres.slice(0, 5)} />
            <MoviesSection
                title={Genres.genres.find((genre) => genre.id === +selectedCategory.id)?.name}
                movies={selectedCategory.movies}
            />
        </div>
    );
}

export default HomeContainer;
