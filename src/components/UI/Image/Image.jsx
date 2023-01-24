import { joinCls } from "../../../utilities/text.utils";

export default function Image({ src, className, ...props }) {
  return <img src={src} className={joinCls("img-fluid", className)} {...props} />;
}
