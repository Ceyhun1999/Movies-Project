import HomeContainer from "@/containers/homeContainer/HomeContainer";
import Movies from "@/mocks/movies.json";

function HomePage({
    params,
}: {
    params: {
        category: string[];
    };
}) {

    let selectedCategory;

    if (params.category.length > 0) {
        selectedCategory = true;
    }
    return (
        <HomeContainer
            selectedCategory={{
                id: params.category?.[0] ?? "",
                movies: selectedCategory ? Movies.results.slice(0, 7) : [],
            }}
        />
    );
}

export default HomePage;
