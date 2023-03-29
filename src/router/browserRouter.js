import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/Error/ErrorPage";
import homeRoute from "../pages/Home/homeRoute";
import Root from "../global/Root";
import teamRoute from "../pages/Teams/teamsRoute";
import blogRoute from "../pages/Blogs/blogsRoute";
import hugoClubRoute from "../pages/AboutUs/HugoClub/HugoClubRoute";
import meetingsRoute from "../pages/Activities/Meetings/MeetingsRoute";
import eventsRoute from "../pages/Activities/Events/MeetingsRoute";
import postsRoute from "../pages/Posts/postsRoute";
import projectTeamRoute from "../pages/AboutUs/ProjectTeam/projectTeamRoute";
import FAQPageRoute from "../pages/AboutUs/FAQ/FAQPageRoute";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [homeRoute, teamRoute, meetingsRoute, eventsRoute, blogRoute, hugoClubRoute, projectTeamRoute, postsRoute, FAQPageRoute],
	},
]);

export default router;
