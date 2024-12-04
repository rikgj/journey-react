import styles from "./Gallery.module.scss";
import {FramedPhoto} from "./FramedPhoto.tsx";

export const Gallery = () => {


    return (
        <>
            <h1>A Gallery!</h1>
            <div className={styles.galleryContainer}>
                <FramedPhoto/>
            </div>
        </>
    )
}