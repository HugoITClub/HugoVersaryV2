import { POSTS_PAGE_PATH } from "./constants";
import PostsPage from "./PostsPage";

const postsRoute = {
	path: POSTS_PAGE_PATH,
	element: <PostsPage />,
};

export default postsRoute;
