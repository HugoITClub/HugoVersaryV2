import { joinCls } from "../../utilities/text.utils";

export default function Image({ src, className, alt, ...props }) {
	return <img src={src} className={joinCls("img-fluid", className)} {...props} alt={alt} />;
}
