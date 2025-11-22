import {
    createBrowserRouter,
} from "react-router";
import Home from "./Home";
import Goal from "./ServiceProvider/Goal";
import ServiceProviderLayout from "../Componnets/Layouts/ServiceProviderLayout";

let router = createBrowserRouter([
    {
        path: "/",
        Component: Home,
    },
    {
        path: "/service-provider",
        Component: ServiceProviderLayout,
        children: [
            {
                path: "/service-provider/:id/goal",
                Component: Goal,
            },
        ],
    }
]);

export default router;