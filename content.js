function findVideoUrl() {
	vonst video = document.querySelector('video');
	return video ? video.src : null;
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.action === "findVideo") {
		const videoUrl = findVideoUrl();
		if (videoUrl) {
			sendResponse({ found: true, url: videoUrl});
		} else {
			sendResponse({ found: false });
		}
	}
});