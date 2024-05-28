import Home from "./pages/Home";
import About from "./pages/About";
import Providers from "./pages/Providers";
import Patients from "./pages/Patients";
import Root from "./pages/Root";
import ClientManagement from "./pages/ClientManagement";

const routes = [
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/providers",
                element: <Providers />
            },
            {
                path: "/patients",
                element: <Patients />
            },
            {
                path: "/clientmanagement",
                element: <ClientManagement />
            }
        ]
    }
];

export default routes;