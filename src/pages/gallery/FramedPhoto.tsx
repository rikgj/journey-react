import styles from "./Gallery.module.scss";


type FramedPjotoProps = {
    srcDoc: string;
}

export function FramedPhoto(props: FramedPjotoProps) {
    return (
        <>
            <div className={styles.frame}>
                <div className={`${styles.framedPhotoInfo} ${styles.left} ${styles.code}`}>{props.srcDoc}</div>
                <div className={`${styles.framedPhotoInfo} ${styles.right} ${styles.code}`}>{props.srcDoc}</div>
                <div className={styles.framedPhoto}>
                    <iframe src={props.srcDoc} sandbox=""  />
                </div>
            </div>
        </>
    )
}