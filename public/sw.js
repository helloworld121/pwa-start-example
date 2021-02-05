// ENABLE:
// ServiceWorker only work on HTTPS!!! except for localhost

// SCOPE:
// the FOLDER where the ServiceWorker is added, defines its scope
// the SCOPE defines the files for which the ServiceWorker is applied
// adding the ServiceWorker to the root-folder ensures, that the ServiceWorker applies to all files

// REGISTER:
// the ServiceWorker needs to be registered in every page of the application, because we don't know
// which page the User is going to visit
// possibilities
// 1) on every html-page
// 2) app.js => if it is registered on every html-page => than we only need to register it once

// ACTIVATE:
// to activate a new ServiceWorker or if the ServiceWorker-code was CHANGED
// => it is necessary to CLOSE the browser tab
// the behaviour is based on the fact, that replacing a current ServiceWorker might break the page
//    because the page might interact with the current ServiceWorker
// => it is also possible to use DevTools in the Browser to reload the ServiceWorker
//    configuration to auto-reload


// IMPLEMENTATION:
// "self" gives access to the ServiceWorker itself
// we don't have access to the DOM in the ServiceWorker
self.addEventListener('install', function(event){
    console.log('[Service Worker] Installing ServiceWorker...', event);
});

// ATTENTION:
// ACTIVATING a ServiceWorker won't work on a running page
// => because the current page might interact with an old version of the service worker
//    and activating the new one might break the application
// => it is necessary to close the "tab" or "browser window" to activate the new ServiceWorker
self.addEventListener('activate', function(event){
    console.log('[Service Worker] Activating ServiceWorker...', event);
    return self.clients.claim(); // this line is necessary right now
});


// reacting to outgoing HTTP-Request
self.addEventListener('fetch', function(event){
    console.log('[Service Worker] Fetching something...', event);
    // event.respondWith(null);
    // event.respondWith(fetch(event.request));
});
