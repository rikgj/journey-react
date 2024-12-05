import styles from "./Gallery.module.scss";
import {useEffect, useState} from "react";


export function FramedPhoto() {
// take start ref as parameter
    // must fetch css and js separately
    // const url = "https://raw.githubusercontent.com/rikgj/journey-react/refs/heads/main/src/pages/Gallery.tsx"
    const url = "/photos/photo-1.html";

    const [data, setData] = useState("NO DATA");
    useEffect(() => {
        fetch(url)
            .then(response => response.text())
            .then(res => {
                console.log(res)
                setData(res)
            })
    }, []);
    return (
        <>
            <div className={styles.frame}>
                <div className={`${styles.framedPhotoInfo} ${styles.left} ${styles.code}`}>{data}</div>
                <div className={`${styles.framedPhotoInfo} ${styles.right} ${styles.code}`}>{data}</div>
                <div className={styles.framedPhoto}>
                    <iframe srcDoc={data} sandbox="al"  />
                </div>
            </div>
        </>
    )
}