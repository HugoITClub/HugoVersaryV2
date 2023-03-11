import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setIsPageLoading } from "./actions";

function SuspenseFallback() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setIsPageLoading(true));
		return () => dispatch(setIsPageLoading(false));

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
}

export default function AppSuspense({ children }) {
	return <Suspense fallback={<SuspenseFallback />}>{children}</Suspense>;
}
