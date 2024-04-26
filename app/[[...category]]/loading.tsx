import CategoriesLoading from "@/components/categories/loading";
import { FeatureMovieLoading } from "@/components/featuredMovie/loading";
import React from "react";

function MovieLoading() {
    return (
        <div style={{ height: "100%" }}>
            <FeatureMovieLoading />
            <CategoriesLoading />
        </div>
    );
}

export default MovieLoading;
