import { Outlet, RouterProvider } from "react-router-dom";
import Head from "../components/Head/Head";
import Navigator from "../components/Navigator/Navigator";
import router from "../router/browserRouter";
import "./style.css";

function Root() {
  return (
    <div>
      {/* Common heads */}
      <Head />

      {/* Navigation bar */}
      <Navigator />

      {/* Page will render here */}
      <Outlet />
    </div>
  );
}

export default Root;
