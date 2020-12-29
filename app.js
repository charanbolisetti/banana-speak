var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function getTranslationUrl(text) {
    return serverURL + "?" + "text=" + text;
}

function clickEventHandler() {  
    var inputText = txtInput.value;
    fetch(getTranslationUrl(inputText))
    .then(response => response.json())
    .then(json => console.log(json.contents.translated))
}

btnTranslate.addEventListener("click", clickEventHandler);