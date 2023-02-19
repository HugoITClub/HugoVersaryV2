import { joinCls } from "../../../../../../utilities/text.utils";

import style from "./style.module.css";

export default function PowerRangersSpark({ isMounted, transitionTime, className, ...props }) {
  return (
    <svg className={joinCls(className, isMounted ? style["after"] : style["before"])} viewBox="0 0 88 75" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M4.16283 73L44 4L83.8372 73H4.16283Z" stroke="currentColor" style={{ transition: `${transitionTime}s` }} />
    </svg>
  );
}
