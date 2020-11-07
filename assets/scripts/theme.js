'use strict';

console.log('GitHub: https://github.com/skenderl');
console.log('Twitter: https://twitter.com/skenderl');

let mql = window.matchMedia('(prefers-color-scheme: dark)');
const setTheme = () => {
  if (mql.matches) {
    document.body.className = "dark-theme";
  } else {
    document.body.className = "light-theme";
  }
};
setTheme();
mql.addEventListener("change", () => {
  setTheme();
});