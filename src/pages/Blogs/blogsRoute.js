import { lazy } from "react";
import { BLOGS_PAGE_PATH } from "./constants";

const BlogsPage = lazy(() => import("./BlogsPage"));

const blogsRoute = {
	path: BLOGS_PAGE_PATH,
	element: <BlogsPage />,
};

export default blogsRoute;
