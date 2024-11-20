import {NavigationBar} from "./NavigationBar.tsx";
import {Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <>
        <header>
            <NavigationBar/>
        </header>
            <main>
                <Outlet/>
            </main>
        </>
    )
}