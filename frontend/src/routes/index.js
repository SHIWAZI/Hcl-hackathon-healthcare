import {
    createBrowserRouter,
} from "react-router";
import Home from "./Home";
import Services from "./Services";
import ServiceDetails from "./ServiceDetails";
import HealthTopics from "./HealthTopics";
import Contact from "./Contact";

let router = createBrowserRouter([
    {
        path: "/",
        Component: Services,
        // loader: loadRootData,
    },
    {
        path: "/home",
        Component: Home,
    },
    {
        path: "/services",
        Component: Services,
    },
    {
        path: "/services/:id",
        Component: ServiceDetails,
    },
    {
        path: "/health-topics",
        Component: HealthTopics,
    },
    {
        path: "/contact",
        Component: Contact,
    },
]);

export default router;