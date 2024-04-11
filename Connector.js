/*
    Provides communication between a documentation html file in an iframe and the Documentation Explorer.
    Intended to bypass cross-site browser restrictions when viewing documentation locally.
    If this connector is not used, the documentation explorer will not be able to access the documentation content
    or generate a document outline.
*/

connector = {
  loaded: false,
  isChild: false,
  ready: false,
  registeredHandlers: [],

  register: function(eventName, handler) {
    var newHandler = {
      eventName: eventName,
      handler: handler,
      unregister: function() {
        var index = connector.registeredHandlers.indexOf(this);
        if (index > -1) {
          connector.registeredHandlers.splice(index, 1);
        }
      }
    };

    connector.registeredHandlers.push(newHandler);
  },

  triggerEvent: function(event) {
    for (var i = 0; i < connector.registeredHandlers.length; i++) {
      var handler = connector.registeredHandlers[i];
      if (event.data.eventType == handler.eventName) {
        handler.handler(event);
      }
    }
  },

  postParent: function(data) {
    window.parent.postMessage(data, '*');
  },

  postChild: function(contentWindow, data) {
    contentWindow.postMessage(data, '*');
  },

  goto: function(targetId) {
    var target = document.getElementById(targetId);
  
    if (target) {
      target.scrollIntoView();
    }
  },

  loadDoc: function(docId) {
    connector.postParent({ eventType: "load_doc", docId: docId });
  },

  sendHeaders: function(event) {
    var headers = document.querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]");
    var headerList = [];

    for (var i = 0; i < headers.length; i++) {
      headerList.push({
        id: headers[i].id,
        type: headers[i].tagName,
        text: headers[i].textContent
      });
    }

    connector.postParent({
      eventType: "header_list",
      headers: headerList
    });
  },

  initChild: function() {
    connector.register("get_headers", connector.sendHeaders);
    connector.register("goto", function(event) {
      connector.goto(event.data.target);
    });
  },

  init: function() {
    window.addEventListener('message', connector.triggerEvent);
    connector.loaded = true;

    console.log("Documentation connector initialized.");
  }
}

connector.init();

document.addEventListener("DOMContentLoaded", function () {
  if (window.parent) {
    connector.initChild();
    connector.postParent({ eventType: "loaded" });
    connector.isChild = true;

    console.log("Documentation connector child handlers loaded.");
  } else {
    // Let parent init itself.
    connector.isChild = false;
    console.log("Documentation connector cannot find window.parent. Skipping child handler initialization.");
  }

  connector.ready = true;
});