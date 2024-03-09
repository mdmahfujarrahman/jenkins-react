import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routes from "./router/routes.jsx";
import StoreProvider from "./context/AppContext.jsx";

const app = ReactDOM.createRoot(document.getElementById("root"));
app.render(
    <StoreProvider>
        <RouterProvider router={routes} />
    </StoreProvider>
);
