import styles from "./style.module.css";

function Skeleton({ width, height }: { width?: number; height: number }) {
    return <div className={styles.skeleton} style={{ width, height }}></div>;
}

export { Skeleton };
