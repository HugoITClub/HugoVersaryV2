import { joinCls } from "../../../../../../utilities/text.utils";

import style from "./style.module.css";

export default function HeroesCompanySpark({ isMounted, className, ...props }) {
  return <div className={joinCls("border", className, isMounted ? style["after"] : style["before"])} {...props} />;
}
