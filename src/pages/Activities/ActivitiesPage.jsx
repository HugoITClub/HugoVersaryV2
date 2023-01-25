import { useMatch } from "react-router-dom";
import { ACTIVITIES_PAGE_PATH } from "./constants";

function ActivitiesPage() {
  const {
    params: { name },
  } = useMatch(ACTIVITIES_PAGE_PATH);
  return <div>Activities {name} Page</div>;
}

export default ActivitiesPage;
