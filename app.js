var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputText = document.querySelector("#output");

// var text = "Iron man";

function urlConstructor(text) {
  return (
    "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=" + text
  );
}

function doTranslate(text) {
  return fetch(urlConstructor(text))
    .then((response) => response.json())
    .then((data) => console.log(data.contents.translated, data.contents.text));
}

btnTranslate.addEventListener("click", () => {
  doTranslate(txtInput.value);
});
