import {
    createBrowserRouter,
} from "react-router";
import Home from "./Home";
import Appointment from "./Appointment";

let router = createBrowserRouter([
    {
        path: "/",
        Component: Home,
        // loader: loadRootData,
    },
    {
        path: "/appointments",
        Component: Appointment,
    }
]);

export default router;