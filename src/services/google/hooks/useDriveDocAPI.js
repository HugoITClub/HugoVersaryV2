import JSZip from "jszip";
import { useCallback, useEffect, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";

export default function useDriveDocAPI(initialFileId = "") {
	const gApiClient = useSelector((state) => state.google.gApiClient, shallowEqual);

	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState("");

	const request = useCallback(
		async function (fileId = "") {
			setIsLoading(true);

			// Get file from GG Drive as a Zip file
			const response = await gApiClient.drive.files.export({
				fileId,
				mimeType: "application/zip",
			});

			// Load Zip file
			const zip = await JSZip.loadAsync(response.body);

			// Get html file in Zip
			const rawHtmlContent = await zip.file(/.html/)[0].async("text");
			const htmlContent = rawHtmlContent.replace(/\ssrc/g, " data-src");

			// Create html element and load html content
			const htmlElement = document.createElement("html");
			htmlElement.innerHTML = htmlContent;

			// Load and map img files from Zip file
			const imgElements = htmlElement.querySelectorAll("img");
			for (const imgElement of imgElements) {
				const imgFilePath = imgElement.getAttribute("data-src");
				const imgSrc = await zip.file(imgFilePath).async("base64");
				imgElement.src = `data:image/jpeg;base64,${imgSrc}`;
			}

			// Remove redundant style
			htmlElement.querySelector("body").style = "";

			// Save to data
			setData(htmlElement.outerHTML);

			// Remove html element
			htmlElement.remove();

			setIsLoading(false);
		},
		[gApiClient]
	);

	useEffect(() => {
		if (initialFileId) request(initialFileId);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [initialFileId, gApiClient]);

	return {
		isLoading,
		data,
		request,
	};
}
