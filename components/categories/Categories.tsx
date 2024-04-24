import React from "react";
import Link from "next/link";
import { CategoriesItemI } from "@/types";
import styles from "./styles.module.css";

export default function Categories({ categories }: { categories: CategoriesItemI[] }) {
    return (
        <div className={styles.categories}>
            {categories.map((category) => (
                <Link key={category.id} className={styles.category} href={`/${category.id}`}>
                    <div className={styles.name}>{category.name}</div>
                </Link>
            ))}
        </div>
    );
}
