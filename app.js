var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationUrl(text) {
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log("error occured",error);
    alert("something went wrong with the server please try again after sometime")
}

function clickEventHandler() {  
    var inputText = txtInput.value;

    //calling server for processing
    fetch(getTranslationUrl(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickEventHandler);