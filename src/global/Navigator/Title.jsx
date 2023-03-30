import { Helmet } from "react-helmet";
import { matchPath, useLocation } from "react-router-dom";
import { HOME_PAGE_PATH } from "../../pages/Home/constants";

function Title({ navLinks = [] }) {
	const location = useLocation();

	const flattenedNavLinks = navLinks.reduce((result, NAV_LINK) => {
		if (NAV_LINK.children) result.push(...NAV_LINK.children);
		else result.push(NAV_LINK);
		return result;
	}, []);

	let title = "Hugo English Club";

	const matchedLink = flattenedNavLinks.find((navLink) => matchPath(navLink.path, location.pathname));
	if (matchedLink) {
		const matchedPath = matchPath(matchedLink.path, location.pathname);

		if (matchedPath && matchedPath.pathname !== HOME_PAGE_PATH) title = `HUGO | ${matchedLink.name}`;
	}

	return (
		<Helmet>
			<title>{title}</title>
		</Helmet>
	);
}

export default Title;
