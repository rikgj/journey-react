import styles from "./Gallery.module.scss";
import {useEffect, useState} from "react";
import html_beautify from "js-beautify";


type FramedPhotoProps = {
    srcDoc: string;
}
const html_format_options ={
    "indent_size": "4",
    "indent_char": " ",
    "max_preserve_newlines": "5",
    "preserve_newlines": true,
    "keep_array_indentation": false,
    "break_chained_methods": false,
    "indent_scripts": "normal",
    "brace_style": "collapse",
    "space_before_conditional": false,
    "unescape_strings": false,
    "jslint_happy": false,
    "end_with_newline": false,
    "wrap_line_length": "0",
    "indent_inner_html": false,
    "comma_first": false,
    "e4x": false,
    "indent_empty_lines": false
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
            const bodyStart = data.indexOf('<body>');
            const bodyEnd = data.indexOf('</body>');
            const body = data.substring(bodyStart + 6, bodyEnd);
            const styleStart = data.indexOf('<style>');
            const styleEnd = data.indexOf('</style>');
            const style = data.substring(styleStart + 7, styleEnd);
            const scopedHtml = body + `<style>${style}</style>`;

            setData(html_beautify.html(scopedHtml, html_format_options));
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