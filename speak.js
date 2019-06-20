

let speechToText = function () {

    let textToSpeechUtterance = new SpeechSynthesisUtterance();

    let defaultSettings = {
        selector:'.toggle',
        language: 'nl-NL',
        pitch: 1,
        rate: 0.9
    };


    let elementToggle;

    function startSpeak(textSpeak) {
        console.log('speech button clicked');

        var stripLink = removeLink(textSpeak);
        var stripElement = removeElements(stripLink);
        textToSpeechUtterance.text =  stripElement;
        speechSynthesis.speak(textToSpeechUtterance);
    }

    function removeLink(text) {
        return text.replace(/<a\b[^>]*>(.*?)<\/a>/gi, "$1");
    }

    function removeElements(text) {
        return text.replace(/<\/?\w+[^>]*\/?>/g, "");
    }



    function toggleSpeak() {
        speechSynthesis.cancel();
        console.log("Toggle clicked");

        if (textToSpeechUtterance.volume == 0) {
            textToSpeechUtterance.volume = 1;
           console.log("sound on");
            this.style.color = "green";

        } else {
            textToSpeechUtterance.volume = 0;
            console.log("sound off");
            this.style.color = "red";
        }
    }



    var mergeObjects  = function(object1, object2) {
        for (var attrname in object1) {
            if(object2.hasOwnProperty(attrname)) {
                object1[attrname] = object2[attrname];
            }
        }
    };



    function init(selector, settings) {
        console.log("init toggle");
        mergeObjects(defaultSettings, settings || {});
        selector = selector || defaultSettings.selector;
        elementToggle = document.querySelector(selector);
        elementToggle.addEventListener("click", toggleSpeak);
        textToSpeechUtterance.lang = defaultSettings.language;
        textToSpeechUtterance.rate = defaultSettings.rate;
        textToSpeechUtterance.pitch = defaultSettings.pitch;
    }

    return {
        startSpeak: startSpeak,
        init: init
    };

};
