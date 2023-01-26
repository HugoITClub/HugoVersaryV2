import { useMatch } from "react-router-dom";
import { TEAMS_PAGE_PATH } from "./constants";

function TeamsPage() {
  const {
    params: { name },
  } = useMatch(TEAMS_PAGE_PATH);
  return <div>Team {name} Page</div>;
}

export default TeamsPage;
