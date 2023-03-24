import { useRouteError } from "react-router-dom";
import Image from "../../components/Image/Image";
import errorImg from "./Images/constuction.svg";
import Footer from "../../components/Footer/Footer";
import Navigator from "../../global/Navigator/Navigator";
import style from "./style.module.css";
import { joinCls, randomImgUrl } from "../../utilities/text.utils";

export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	return (
		<div id="error-page" className={joinCls("container", style["error-page"])}>
			<Navigator />

			<div className="row justify-content-center text-center position-relative z-1">
				<Image className="w-75 w-lg-50" src={errorImg} />
				<h1>Oops!</h1>
				<p>This page is under construction, but we are ready to go! We are preparing something amazing and exciting for you. See you soon.</p>
				<p>
					<i>{error.statusText || error.message}</i>
				</p>
				<div className="col-8 col-lg-4 mt-1">
					<button className="text-uppercase btn btn-outline-gradient rounded-pill px-4">Back to Home</button>
				</div>
			</div>
			<Footer className="mt-10" />
		</div>
	);
}
