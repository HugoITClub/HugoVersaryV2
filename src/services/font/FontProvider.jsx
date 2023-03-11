import { useEffect } from "react";
import { useDispatch } from "react-redux";
import FontFaceObserver from "fontfaceobserver";
import { setFontLoading } from "./actions";

export function FontProvider({ children }) {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setFontLoading(true));

		const fonts = ["Montserrat", "Lato"];
		const fontObservers = fonts.map((font) => new FontFaceObserver(font));
		Promise.all(fontObservers.map((fontObserver) => fontObserver.load())).then(() => dispatch(setFontLoading(false)));
	}, []);

	return children;
}
