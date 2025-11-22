import {
    createBrowserRouter,
} from "react-router";
import Home from "./Home";

let router = createBrowserRouter([
    {
        path: "/",
        Component: Home,
        // loader: loadRootData,
    },
]);

export default router;