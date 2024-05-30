import Home from "./pages/Home";
import About from "./pages/About";
import Root from "./pages/Root";
import ClientManagement from "./pages/ClientManagement";
import MySchedule from "./pages/MySchedule";
import Revenue from "./pages/Revenue";

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
                path: "/clientmanagement",
                element: <ClientManagement />
            },
            {
                path: "myschedule",
                element: <MySchedule />
            },
            {
                path: "revenue",
                element: <Revenue />
            }
        ]
    }
];

export default routes;