// 1) check if service-worker feature is enabled in the browser
//    => we don't know if it available in the current browser
if('serviceWorker' in navigator) { // navigator is the browser ;) => "in" checks if the object is available
    // register file as a service-worker
    navigator.serviceWorker
        .register('/sw.js')
        // .register('/sw.js', {scope: '/help/'}) // it is possible to restrict the scope of a ServiceWorker
        // register returns a Promise, which might take some time to finish
        .then(function() {
            console.log('ServiceWorker registered!')
        });
}
