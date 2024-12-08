import styles from "./Gallery.module.scss";
import {FramedPhoto} from "./FramedPhoto.tsx";

export const Gallery = () => {
// take start ref as parameter
    // must fetch css and js separately
    // const url = "https://raw.githubusercontent.com/rikgj/journey-react/refs/heads/main/src/pages/Gallery.tsx"

    // const [photos, setPhotos] = useState([""]);
    // const [index, setIndex] = useState(1);
// const viteFlag = "window.__vite_plugin_react_preamble_installed__ = true";
    const urls = (Array.from({length: 4}).map((_, i) => `/photos/photo-${i+1}.html`));
    // useEffect(() => {
        // console.log(index);

        // Promise.all(urls.map(url => fetch(url)))
        //         .then(response => response.text())
        //     .then((values) => {
        //         setPhotos([...values.map(value => value.text())]);
        //         console.log(values.map(value => value.text()));
        //     })

        // fetch(url)
        //     .then(response => response.text())
        //     .then(res => {
        //         console.log(res);
        //         console.log(photos);
        //         if (res.length > 0 && !res.includes(viteFlag)) {
        //             setIndex(prevIndex => prevIndex + 1);
        //             setPhotos(prevState => {
        //                 return [...prevState.filter(s => s.length > 0), res]
        //             });
        //         }else{
        //             console.log("No more photos");
        //         }
        //     })
    // }, [index]);

    return (
        <>
            <h1>A Gallery!</h1>
            <div className={styles.galleryContainer}>
                {/*{photos.map((photo, index) => {*/}
                {/*    return <FramedPhoto key={index} srcDoc={photo}/>*/}
                {/*})}*/}
                {urls.map((url, index) => {
                    return <FramedPhoto key={index} srcDoc={url}/>
                })}
            </div>
        </>
    )
}