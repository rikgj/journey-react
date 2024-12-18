import styles from "./Gallery.module.scss";
import {FramedPhoto} from "./FramedPhoto.tsx";

export const Gallery = () => {
    const urls = (Array.from({length: 8}).map((_, i) => `/photos/photo-${i+1}.html`));

    return (
        <>
            <h1>A Gallery!</h1>
            <div className={styles.galleryContainer}>
                {urls.map((url, index) => {
                    return <FramedPhoto key={index} srcDoc={url}/>
                })}
            </div>
        </>
    )
}