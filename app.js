var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputText = document.querySelector("#output");

// var text = "Iron man";

function urlConstructor(text) {
  return "https://api.funtranslations.com/translate/minion.json?text=" + text;
}

function errorHandler(error) {
  alert("Server problem, Please try after some time");
  console.log("Error ", error);
}

function doTranslate(text) {
  return fetch(urlConstructor(text))
    .then((response) => response.json())
    .then((data) => (outputText.innerText = data.contents.translated))
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", () => {
  doTranslate(txtInput.value);
});
