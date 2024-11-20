import styles from "./MainPage.module.scss";

export const MainPage = () => {
    return (
        <>
            <h1>GreenHornDev</h1>
            <div className={styles.descriptionBackground}>
                <p className={styles.headerText}>A developing journey</p>
            </div>
        </>
    )
}