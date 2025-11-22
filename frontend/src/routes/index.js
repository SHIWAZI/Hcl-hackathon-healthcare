import {
    createBrowserRouter,
} from "react-router";
import Home from "./Home";
import Goal from "./ServiceProvider/Goal";
import ServiceProviderLayout from "../components/Layouts/ServiceProviderLayout";
import CreateGoal from "./ServiceProvider/CreateGoal";
import NotFound from "../components/common/NotFound";

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
                path: "/service-provider/goals",
                Component: Goal,
            },
            {
                path: "/service-provider/goal/create",
                Component: CreateGoal,
            },
            {
                path: "/service-provider/:page",
                Component: NotFound,
            },
        ],
    }
]);

export default router;