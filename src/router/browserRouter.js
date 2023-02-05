import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/Error/ErrorPage";
import homeRoute from "../pages/Home/homeRoute";
import Root from "../global/Root";
import teamRoute from "../pages/Teams/teamsRoute";
import blogRoute from "../pages/Blogs/blogsRoute";
import aboutUsRoute from "../pages/AboutUs/aboutUsRoute";
import meetingsRoute from "../pages/Activities/Meetings/MeetingsRoute";
import eventsRoute from "../pages/Activities/Events/MeetingsRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [homeRoute, teamRoute, meetingsRoute, eventsRoute, blogRoute, aboutUsRoute],
  },
]);

export default router;
