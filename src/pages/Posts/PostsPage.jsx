import useSheetAPI from "../../services/google/hooks/useSheetAPI.js";
import Footer from "../../components/Footer/Footer";
import { POSTS_PAGE_PATH } from "./constants";
import style from "./style.module.css";
import useDriveDocAPI from "../../services/google/hooks/useDriveDocAPI.js";
import { useMatch } from "react-router-dom";
export default function PostsPage() {
	const {
		params: { fileId },
	} = useMatch(POSTS_PAGE_PATH);
	console.log(fileId);
	const { data, isLoading } = useDriveDocAPI(fileId);

	return (
		<div className="bg-white pt-5">
			<div className="container">
				<div className="row">
					<div className="col-8">
						<div dangerouslySetInnerHTML={{ __html: data }} />
					</div>
				</div>
			</div>
			<Footer className="mt-10 bg-light" />
		</div>
	);
}
