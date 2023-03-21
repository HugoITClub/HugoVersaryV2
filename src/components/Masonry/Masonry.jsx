import { joinCls } from "../../utilities/text.utils";

export default function Masonry({ images = [], direction = "column", columns = 3, gutter = 0, renderItem, className, ...props }) {
	const columnsContent = new Array(columns).fill().map(() => []);
	for (let i = 0; i < images.length; ++i) columnsContent[i % columns].push(images[i]);

	console.log(images);
	console.log(columnsContent);

	return (
		<div className={joinCls("row", `g-${gutter}`, className)} {...props}>
			{columnsContent.map((column, index) => (
				<div key={`${column.join("-")}-${index}`} className="col">
					<div className={joinCls("row flex-column", `g-${gutter}`)}>{column.map((image) => renderItem(image))}</div>
				</div>
			))}
		</div>
	);
}
