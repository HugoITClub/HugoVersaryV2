import { lazy } from "react";
import { POSTS_PAGE_PATH } from "./constants";

const PostsPage = lazy(() => import("./PostsPage"));

const postsRoute = {
	path: POSTS_PAGE_PATH,
	element: <PostsPage />,
};

export default postsRoute;
