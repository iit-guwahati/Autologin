function checkForValidUrl(tabId, changeInfo, tab) {
	if (tab.url.indexOf("192.168.100.1") > -1) {
    chrome.pageAction.show(tabId);
    chrome.pageAction.onClicked.addListener(function(tab){
    		chrome.tabs.executeScript(tab.getId(), {file:'autologin.js'} );
		});
  }
};

chrome.tabs.onUpdated.addListener(checkForValidUrl);
chrome.extension.onMessage.addListener( function(request,sender,sendResponse){ sendResponse(localStorage);} );