import FeaturedMovie from "@/components/featuredMovie/FeaturedMovie";

export default function MovieContainer({ movie }) {
    return <FeaturedMovie movie={movie} isCompact={false} />;
}
