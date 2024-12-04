import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {MainPage} from "./pages/MainPage.tsx";
import {ErrorPage} from "./pages/ErrorPage.tsx";
import {About} from "./pages/About.tsx";
import {Gallery} from "./pages/gallery/Gallery.tsx";
import {Layout} from "./components/Layout.tsx";

const basicRoutes = createBrowserRouter([
    {
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <MainPage/>,
            },
            {
                path: '/about',
                element: <About/>,
            },
            {
                path: '/gallery',
                element: <Gallery/>,
            },
        ],
    },
])

const Routes = () => {
    return <RouterProvider router={basicRoutes}/>
}

function App() {
    return (
        <>
            <Routes/>
        </>
    )
}

export default App
