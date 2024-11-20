import {NavigationBar} from "../components/NavigationBar.tsx";

export const ErrorPage = () => {
    return (
        <>
            <header>
                <NavigationBar/>
            </header>
            <main>
                <h1>Page Not Found</h1>
                <p>Sorry, the page you are looking for was not found 👷‍♂️</p>
            </main>
        </>
    );
}