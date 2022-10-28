import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../Component/Home";
import About from "../Component/About";
import Contact from "../Component/Contact";
import Post from "../Component/Post";

const GuestRouter = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/post",
        element: <Post />,
    },
]);

export default GuestRouter