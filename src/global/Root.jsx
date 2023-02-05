import { Outlet } from "react-router-dom";
import Navigator from "./Navigator/Navigator";

import "./style/root.style.css";
import "./style/button.style.css";
import "./style/text.style.css";
import "./style/spacing.style.css";
import "./style/custom.style.css";

function Root() {
  return (
    <div>
      {/* Navigation bar */}
      <Navigator />

      {/* Page will render here */}
      <Outlet />
    </div>
  );
}

export default Root;
