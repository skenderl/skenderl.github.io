window.onload = () => {
    "use strict";
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("../../sw.js").then(() => {
            console.info("Added PWA support !");
        });
    }

    let _cheatSequence = [];

    document.onkeydown = (e) => {
        e = e || window.event;
        if ((_cheatSequence.length === 0 && e.key === "ArrowUp") || _cheatSequence.length > 0) {
        if (_cheatSequence.length < 11) {
            _cheatSequence.push(e.key);
            if (_cheatSequence.length === 11) {
                handleCheat(_cheatSequence.join(""));
                _cheatSequence = [];
            }
        }
        }
    };
};

const handleTitleClick = () => {
    const colors = ["black", "blueviolet", "darkviolet", "royalblue", "transparent", "red"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    do {
        randomColor = colors[Math.floor(Math.random() * colors.length)];
    } while (randomColor === document.body.style.color);
    document.body.style.color = randomColor;
};

const handleCheat = (sequence) => {
    const winningSq1 = "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightbaEnter";
    const winningSq2 = "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba ";

    if (sequence === winningSq1 || sequence === winningSq2) {
        window.open("https://soundcloud.com/bwlhaictke/reise", "_blank", "noopener,noreferrer");
    }
};
