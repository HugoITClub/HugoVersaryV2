import { Helmet } from "react-helmet";
import { matchPath, useLocation } from "react-router-dom";
import { HOME_PAGE_PATH } from "../../pages/Home/constants";
import { NAV_LINKS } from "./Navigator";

function Title() {
  const location = useLocation();

  const mavLinks = NAV_LINKS.reduce((result, NAV_LINK) => {
    if (NAV_LINK.children) result.push(...NAV_LINK.children);
    else result.push(NAV_LINK);
    return result;
  }, []);

  const matchedLink = mavLinks.find((navLink) => matchPath(navLink.path, location.pathname));
  const matchedPath = matchPath(matchedLink.path, location.pathname);

  let title = "Hugo English Club";
  if (matchedPath && matchedPath.pathname !== HOME_PAGE_PATH) title = `HUGO | ${matchedLink.name}`;

  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}

export default Title;
