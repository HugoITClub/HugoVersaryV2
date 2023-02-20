import { joinCls } from "../../../../utilities/text.utils";
import style from "./style.module.css";

export default function FooterSpark({ isMounted, className, ...props }) {
  return <div className={joinCls(className, isMounted ? style["after"] : style["before"])} {...props} />;
}
