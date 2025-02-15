let worker;
if ("serviceWorker" in navigator) {
    window.addEventListener('load', (e) => {
        console.log(navigator.serviceWorker);

        navigator.serviceWorker.register('serviceWorker.js')
            .then((resolve) => {
                worker = resolve;
                console.log(worker);
            }, (reject) => {
                console.log(reject);
            });
    });
}