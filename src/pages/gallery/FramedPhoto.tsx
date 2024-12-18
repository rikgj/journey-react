import styles from "./Gallery.module.scss";
import {useEffect, useState} from "react";


type FramedPhotoProps = {
    srcDoc: string;
}

export function FramedPhoto(props: FramedPhotoProps) {
    const initialData = '';
    const [data, setData,] = useState(initialData);
    const getData = async (url: string) => {
        const response = await fetch(url);
        return await response.text();
    }

    useEffect(() => {
        getData(props.srcDoc).then(data => {
            console.log(data);
            setData(data);
        });
    },[props.srcDoc])

    if (data === initialData) {
        return <div>Loading...</div>
    }
    return (
        <>
            <div className={styles.frame}>
                <div className={`${styles.framedPhotoInfo} ${styles.right} ${styles.code}`}>{data}</div>
                <div className={styles.framedPhoto}>
                    <iframe src={props.srcDoc} sandbox=""/>
                </div>
            </div>
        </>
    )
}