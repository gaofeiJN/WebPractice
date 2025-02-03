document.onvisibilitychange = function () {
    console.log(`document.visibilityState=${this.visibilityState}`);

    let notify = new Notification("Page visibility changed",
        {
            body: document.visibilityState,
            image: "2.webp"
        });
    setTimeout(function () {
        notify.close()
    }, 10000);

    notify.onshow = () => {
        console.log('notification on show');
    }

    notify.onclose = () => {
        console.log('notification closed');
    }

}