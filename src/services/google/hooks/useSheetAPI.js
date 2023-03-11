import { useCallback, useEffect, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { SHEET_ID } from "../constants";

export default function useSheetAPI(sheetName, fromColumn, toColumn, { earlyTake = 0, earlySkip = 0 }) {
	const gApiClient = useSelector((state) => state.google.gApiClient, shallowEqual);

	const [isLoading, setIsLoading] = useState(false);
	const [isFull, setIsFull] = useState(false);
	const [data, setData] = useState([]);

	const request = useCallback(
		async function (take, skip, oldData = []) {
			// Check if Google API Client is initiated
			if (!gApiClient) return "Google API Client is not initiated.";

			setIsLoading(true);

			// Get data from spreadsheet
			const totalSkip = oldData.length + skip;
			const response = await gApiClient.sheets.spreadsheets.values.get({
				spreadsheetId: SHEET_ID,
				range: `${sheetName}!${fromColumn}${totalSkip + 2}:${toColumn}${totalSkip + take + 2 - 1}`,
			});

			// Process data
			const { result } = response;
			if (!result || !result.values) return "Google API Client: Unexpected error";

			setIsLoading(false);
			setData([...oldData, ...result.values]);

			// Check is get full of data
			if (result.values.length < take) setIsFull(true);

			return "Google API Client: Success";
		},
		[sheetName, fromColumn, toColumn, gApiClient]
	);

	useEffect(() => {
		if (earlyTake) request(earlyTake, earlySkip);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [sheetName, gApiClient]);

	return {
		isLoading,
		isFull,
		data,
		getMore: (take, skip = 0) => request(take, skip, data),
	};
}
