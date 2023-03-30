import { useEffect, useRef, useState } from "react";
import { joinCls } from "../../utilities/text.utils";
import Skeleton from "../Skeleton/Skeleton";

export default function Image({ src, lazy = true, fade = true, className, alt, ...props }) {
	const skeletonRef = useRef();
	const [isIntersected, setIsIntersected] = useState(false);

	useEffect(() => {
		if (!lazy) return;

		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					setIsIntersected(true);
					observer.unobserve(skeletonRef.current);
				}
			},
			{
				root: null,
				rootMargin: "0px",
				threshold: 0.8,
			}
		);

		if (skeletonRef.current) observer.observe(skeletonRef.current);

		return () => observer.disconnect();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (!lazy) return <img src={src} className={joinCls("img-fluid", fade && "fadeIn animated", className)} alt={alt} />;

	return isIntersected ? (
		<img src={src} className={joinCls("img-fluid", fade && "fadeIn animated", className)} {...props} alt={alt} />
	) : (
		<div ref={skeletonRef} className={joinCls("w-100 h-100 overflow-hidden", className)}>
			<Skeleton className="w-100 h-100" />
		</div>
	);
}
