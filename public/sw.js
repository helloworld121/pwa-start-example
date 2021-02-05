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


// IMPLEMENTATION:
// "self" gives access to the ServiceWorker itself
// we don't have access to the DOM in the ServiceWorker
self.addEventListener('install', function(event){
    console.log('[Service Worker] Installing ServiceWorker...', event);
});

self.addEventListener('activate', function(event){
    console.log('[Service Worker] Activating ServiceWorker...', event);
    return self.clients.claim(); // this line is necessary right now
});
