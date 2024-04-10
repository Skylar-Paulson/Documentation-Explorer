/*
    Provides communication between a documentation html file in an iframe and the Documentation Explorer.
    Intended to bypass cross-site browser restrictions when viewing documentation locally.
    If this connector is not used, the documentation explorer will not be able to access the documentation content
    or generate a document outline.
*/

window.addEventListener('message', function(event) {
    var message = event.data.message;
    var sender = event.source;

    if (message == "get_headers") {
      var headers = document.querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]");

      var headerList = [];
      for (var i = 0; i < headers.length; i++) {
        headerList.push({
          id: headers[i].id,
          type: headers[i].tagName,
          text: headers[i].textContent
        });
      }

      window.parent.postMessage({
        message: "header_list",
        headers: headerList
      }, "*");
    } else if (message == "goto") {
      var target = document.getElementById(event.data.target);

      if (target) {
        target.scrollIntoView();
      }
    }
});

document.addEventListener("DOMContentLoaded", function () {
if (window.parent) {
    window.parent.postMessage({ message: "loaded" }, '*');
}
});