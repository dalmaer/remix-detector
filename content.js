window.addEventListener("message", function (event) {
  // Check that the message is from the injected script
  if (event.source === window && event.data.type === "remix-site-detected") {
    // Handle the 'setStorage' action
    if (event.data.origin) {
      // Use chrome.storage.local.set to store the data
      chrome.storage.local.set({
        [event.data.origin]: true,
      });
    }
  }
});

function injectScript(file, node) {
  var th = document.getElementsByTagName(node)[0];
  var s = document.createElement("script");
  s.setAttribute("type", "text/javascript");
  s.setAttribute("src", file);
  th.appendChild(s);
}
injectScript(chrome.runtime.getURL("detect_remix.js"), "body");
