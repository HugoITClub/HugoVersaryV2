import { joinCls } from "../../utilities/text.utils";

import style from "./style.module.css";

export default function Skeleton({ className, height = "1rem", width = "100%", children, ...props }) {
  return <div className={joinCls(style["skeleton"], className)} style={{ height, width }} {...props} />;
}
