import { useEffect } from "react";
import { useDispatch } from "react-redux";
import FontFaceObserver from "fontfaceobserver";
import { setFontLoading } from "./actions";

export function FontProvider({ children }) {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setFontLoading(true));

		const fonts = ["Google Sans", "Google Sans"];
		const fontObservers = fonts.map((font) => new FontFaceObserver(font));
		Promise.all(fontObservers.map((fontObserver) => fontObserver.load())).then(() => dispatch(setFontLoading(false)));

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return children;
}
