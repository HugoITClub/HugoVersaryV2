import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/Error/ErrorPage";
import homeRoute from "../pages/Home/homeRoute";
import Root from "../global/Root";
import teamRoute from "../pages/Teams/teamsRoute";
import activitiesRoute from "../pages/Activities/activitiesRoute";
import blogRoute from "../pages/Blogs/blogsRoute";
import aboutUsRoute from "../pages/AboutUs/aboutUsRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [homeRoute, teamRoute, activitiesRoute, blogRoute, aboutUsRoute],
  },
]);

export default router;
