import { joinCls } from "../../utilities/text.utils";

export default function Image({ src, className, alt, ...props }) {
  return <img src={src} className={joinCls("img-fluid object-fit-cover", className)} {...props} alt={alt} />;
}
