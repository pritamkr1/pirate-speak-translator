var url = "https://api.funtranslations.com/translate/pirate.json";
//var url = "https://api.funtranslations.com/translate/minion.json" ;
var inputText = document.querySelector('.text-input');
var outputText = document.querySelector('.text-output');
var btn = document.querySelector('.btn');

//console.log(url, inputText, outputText, btn);

function getTranslateUrl(text){
    return url + "?" + "text=" + text;
   
}

btn.addEventListener('click', doTranslate);

function errorHandler(error){
   alert("something wrong happen! please try agian later.", error);
}

function doTranslate(){
   var inputTxt = inputText.value;
 

   fetch(getTranslateUrl(inputTxt))
   .then(response => response.json())
   .then(json => {
       var translatedTxt = json.contents.translated;
       outputText.innerHTML = translatedTxt; 
         })

   .catch(errorHandler)
};