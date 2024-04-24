import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./style.module.css";
import { MovieI } from "@/types";

export default function MoviesSection({ title, movies }: { title: string | undefined; movies: MovieI[] }) {

    return (
        <div className={styles.moviesSection}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.movies}>
                {movies.map((movie) => (
                    <div className={styles.movie} key={movie.id}>
                        <Link href={`/movie/${movie.id}`}>
                            <Image
                                fill
                                unoptimized
                                alt={movie.title ? movie.title : ""}
                                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
