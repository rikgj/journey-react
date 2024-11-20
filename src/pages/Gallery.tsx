import styles from "./Gallery.module.scss";

export const Gallery = () => {
    return (
        <>
            <h1>A Gallery!</h1>
            <div className={styles.galleryContainer}>
                <div className={styles.galleryFrame}>
                    <div className={styles.galleryPhoto}></div>
                </div>
                <div className={styles.galleryFrame}>
                    <div className={styles.galleryPhoto}></div>
                </div>
                <div className={styles.galleryFrame}>
                    <div className={styles.galleryPhoto}></div>
                </div>
            </div>
        </>
    )
}