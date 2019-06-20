# speak.js

JavaScript module for text to speech (not working on IOS devices). It allows you to speak text when you click on a HTML-element.

## Demo

See a live demo [here](http://i344974.hera.fhict.nl/s4/modular).

## Installation

If you already have a project download the files speak.js & style.css and put it in your folder. Afterwards include the following in your HTML-header:

```python
    <script src="speak.js" type="application/javascript"></script>
    <link href="style.css" type="text/css" rel="stylesheet">
```
Otherwise clone the repo.

## Usage (with example)

You can declare which class will be the toggle.
```python
    let speak = new speechToText();
    speak.init(".yourToggleClassHere");// The default is ".toggle"
```

First create an element that you want to use to activate the speech.

For example
```python
<button class="yourSpeakClassHere">Speak</button>
```
Due to API restrictions you have to put an onclick event with speak.startSpeak("text to speak") in your code on your HTML-element. The parameter that you provide is the text that will be spoken.

For example
```python
<button class="yourSpeakClassHere" onclick="speak.startSpeak("text to speak")">Speak</button>
```
Secondly create an element that you want to use for the toggle.
```python
<button class="yourToggleClassHere">Speak</button>
```

## Customisation 

**CSS**

For both speak & toggler element you can change the css. You must not forget to change the class name within the speak.init().

For example

```python
   let speak = new speechToText();
    speak.init("ownToggleClass");
```

```python
<button class="ownToggleClass">Speak</button>
```
Now you can adjust the css in the style.css

```python
.ownToggleClass{
    height: 100px;
    width: 120px;
    border: 1px black solid;
    float: left;
    margin-right: 20px;
    background-color: white;
    color: green;
}
```

**Language**

You can change the language of the speak.

```python
    let speak = new speechToText();
    speak.init(".toggle", {language: 'en-US'});
```

**Rate**

You can change the rate of the speak.

```python
    let speak = new speechToText();
    speak.init(".toggle", {rate: 2});
```
**Pitch**

You can change the pitch of the speak.
```python
    let speak = new speechToText();
    speak.init(".toggle", {pitch: 2});
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Author
Samet Yalcin

[GitHub](https://github.com/SametYalcinn)

[GitLab](https://git.fhict.nl/I344974)
