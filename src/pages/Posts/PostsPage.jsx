import useSheetAPI from "../../services/google/hooks/useSheetAPI.js";
import Footer from "../../components/Footer/Footer";

import style from "./style.module.css";
import useDriveDocAPI from "../../services/google/hooks/useDriveDocAPI.js";
export default function PostsPage() {
	const { data, isLoading } = useDriveDocAPI("11eZ0pSGFHuoEhtZxKoNJkvDoOOsjpRMAF4kfqDJYCoQ");

	return (
		<div className="container">
			<div dangerouslySetInnerHTML={{ __html: data }} />
			<Footer className="mt-10 bg-light" />
		</div>
	);
}
