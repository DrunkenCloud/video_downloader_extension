chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.action === "downloadVideo") {
		chrome.downloads.download({
			url: request.url,
			filename: "video.mp4"
		}, (downloadId) => {
			if (chrome.runtime.lastError){
				sendResponse({ success: false, error: chrome.runtime.lastError.message });
			} else {
				sendResponse({ success: true, downloadId: downloadId});
			}
		});
		return true;
	}
});