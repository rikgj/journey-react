import {NavigationBar} from "./NavigationBar.tsx";
import {Outlet} from "react-router-dom";
import "./Layout.module.scss";

export const Layout = () => {
    return (
        <>
            <header>
                <NavigationBar/>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                <p>Footer content | Not sure what to put here | Just another one</p>
            </footer>
        </>
    )
}