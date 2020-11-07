window.onload = () => {
    'use strict';
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('../../sw.js')
            .then(() => {
                console.info("Added PWA support !")
            });
    }
}