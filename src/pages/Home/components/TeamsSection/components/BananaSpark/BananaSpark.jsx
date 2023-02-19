import { joinCls } from "../../../../../../utilities/text.utils";

import style from "./style.module.css";

export default function BananaSpark({ isMounted, className, ...props }) {
  return <div className={joinCls("border rounded-circle", className, isMounted ? style["after"] : style["before"])} {...props} />;
}
