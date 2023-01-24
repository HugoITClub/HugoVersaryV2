import { joinCls } from "../../../utilities/text.utils";
import "./style.css";

export default function Button({ className, children, ...props }) {
  return (
    <button className={joinCls("btn rounded-pill", className)} {...props}>
      {children}
    </button>
  );
}
