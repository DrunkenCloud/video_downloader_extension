document.getElementbyId('downloadBtn').addEventListener('click', () => {
	chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		chrome.tabs.sendMessage(tabs[0].id, { action: "findVideo" }, (response) => {
			if (response.found) {
				chrome.runtime.sendMessage({ action: "downloadVideo", url: response.url }, (res) => {
					const status = document.getElementbyId('status');
					if (res.success) {
						status.textContent = "Download Started!";
					} else {
						status.textContent = `Error: ${res.error}`;
					}
				});
			} else {
				document.getElementById('status').textContent = "No video found on this page.";
			}
		});
	});
});