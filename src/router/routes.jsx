import { createBrowserRouter as Router } from "react-router-dom";
import App from "../App";
import SingleTask from "../components/SingleTask/SingleTask";
import { AppService } from "../services/appServices";

const routes = Router([
    {
        path: "/",
        elaement: <App />,
        children: [
            {
                path: "/",
                element: <App />,
            },
        ],
    },
    {
        path: "/single/:id",
        element: <SingleTask />,
        loader: async ({ params }) => {
            const check = await AppService.getAllTask(params.id);

            return check.data.data;
        },
    },
]);

export default routes;
