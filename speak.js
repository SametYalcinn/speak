

let speechToText = function () {

    let textSpeech = new SpeechSynthesisUtterance();

    let defaultSettings = {
        selector:'.toggle'
    };

    let defaultSettingSpeak ={

        selector:'.speak',
        language: 'nl-NL',
        rate: 0.9
    };


    let elementToggle;
    let elementSpeak;

    function speakText(textSpeak) {
        console.log(textSpeak);
        var stripLink = removeLink(textSpeak);
        var stripElement = removeElements(stripLink);
        textSpeech.text =  stripElement;
        speechSynthesis.speak(textSpeech);
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

        if (textSpeech.volume == 0) {
            textSpeech.volume = 1;
           console.log("sound on")

        } else {
            textSpeech.volume = 0;
            console.log("sound off")
        }
    }



    var mergeObjects  = function(object1, object2) {
        for (var attrname in object1) {
            if(object2.hasOwnProperty(attrname)) {
                object1[attrname] = object2[attrname];
            }
        }
    };


    function initSpeak(selector, settings) {
        console.log("init speaker");
        mergeObjects(defaultSettingSpeak, settings || {});
        selector = selector || defaultSettingSpeak.selector;
        elementSpeak = document.querySelector(selector);
        textSpeech.lang = defaultSettingSpeak.language || settings;
        textSpeech.rate = defaultSettingSpeak.rate || settings;
    }


    function initToggle(selector, settings) {
        console.log("init toggle");
        mergeObjects(defaultSettings, settings || {});
        selector = selector || defaultSettings.selector;
        elementToggle = document.querySelector(selector);
        elementToggle.addEventListener("click", toggleSpeak, false);
    }




    return {
        startSpeak: speakText,
        initSpeak: initSpeak,
        initToggle: initToggle
    };

};
