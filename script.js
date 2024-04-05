function displayaWord(){
    var word = document.getElementById('wordInput').value;
    document.getElementById("displayWord").innerHTML=word;
}
 function colorChage(){
    var color = document.getElementById('colorChange').value;
    document.getElementById("bodyColor").style.background=color
 }

function searchWord() {
    var word = document.getElementById('wordInput').value;

    // You can replace this with an API call to get the definition
    var definition = getDefinition(word);

    var definitionElement = document.getElementById('definition');
    if (definition) {
        definitionElement.innerHTML = word +" : "+ definition;
    } else {
        definitionElement.innerHTML = " Data not found.";
    }
}

// Mock function to get definition
function getDefinition(word) {
    var definitions = {
        "": "please give me word to assist you :",
        "A": "The first letter of English alphabet.",
        "Aardvark": "जमीन खोदकर रहने वाला सुवर, Animal looks like pig.",
        "Aback": "चकित, भौचक्का",
        "Abacus": "एक पठन उपकरण है। इसके प्रयोग से दृष्टिबाधित व्यक्ति Maths की Problems हल करते हैं",
        "Abaft": "नाव या जहाज का पिछला भाग की ओर",
        "Abandon": "परित्याग करना, त्याग करना",
        "Abandoned": "छोड़ा हुआ, छोड़ा हुआ",
        "Abandonment": "आत्मसमर्पण, अधिकार त्याग, पूर्ण त्याग",
        "Abase": "अनादर करना, मानहानि",
        "Abasement": "अपमान, निरादर, बेक़द्री, बेइज्जती",
        "Abash": "लज्जित करना",
        "Abashment" : "शर्मिंदगी, लज्जा ",
        "Abask": "धूप सेंकना",
        "Abate": "कम होना, कम करना, कटौती करना",
        "Abatement": "घटाव, कमी",
        "Abatis": "गिरे हुए पेड़ों से बनाई गई बाड़",
        "Abattis": "गिरे हुए पेड़ों से बनाई गई बाड़",
        "Abattoir": "कसाईखाना",
        "Abaxial": "Situated out of or directed away from the axis, अपक्षयी",
        "Abbacy": "The office or period of office of an abbot or abbess. मठाध्यक्ष का पद, पादरी का पद, मठाधीश, ईसाई महंत,",
        "Abbe": "फ़्रांसीसी पादरी",
        "Abbess": "Female फ़्रांसीसी पादरी ",
        "Abbey": "Monastery, ईसाई मठ, पूजा का स्थान",
        "Abbot": "Head of abbey of monks. ,महंत, ईसाई मठाधीश, मठाधिपति",
        "Abbreviate": "To reduce, to shorten, to condense, कम करना, संक्षिप्त करना, छोटा करना",
        "Abbreviated": "Shortend, संक्षिप्त",
        "Abbreviation": "A shortend form. संक्षिप्त शब्द, संक्षिप्तीकरण, संक्षिप्त रूप ",
        "Abdicant": "त्यागने वाला, त्याग करने वाला व्यक्ति",
        "Abdicate": "To give up voluntarily. सत्ता का त्याग, विरासत का त्याग, इस्तीफा",
        "Abdication": "त्याग ,पदत्याग, राज-त्याग, अपना अधिकार छोड़ना",
        "Abdicator": "त्याग करने वाला.",
        "Abdomen": "उदर, पेट",
        "Abdominal": "Related to the abdomen ,पेट से संबंधी",
        "Abduce": "एक भाग को दूसरे भाग से अलग करना",
        "Abducent": "To draw one part from another. ,पीछे की तरफ हटाने की शक्तिवाला",
        "Abduct": "धोखा देकर या फुसलाकर भगा ले जाना, भगा ले जाना, अपहरण करना, किसी को पकड़कर गै़र-क़ानूनी रूप से ले जाना",
        "Abduction": "अपहरण",
        "Abductor": "अपहरण करने वाला",
        "Abeam": "आगे की ओर, जहाज़ की शहतीर पर",
        "Abecedarian": "नवसिखुआ, प्रारंभिक शिक्षा पाने वाला",
        "Aberrance": "धर्मपथ से भटकना",
        "Aberrant": "धर्मपथ से हटनेवाला, बुरी चालन वाला",
        "Abet": "पाप के लिए उकसाना, बहकाना",
        "Abetment": "उकसाने का कार्य, बुरा काम में मदद",
        "Abetter": "Force to do bad things ,उकसाने वाला, दुष्प्रेरक",
        "Abeyance": "कुछ काल के लिए विराम या रुकावट ,दुविधा, ठहराव",
        "Abhor": "घृणा करना, नफरत करना, तिरस्कार, टेढ़ी नजर से देखना",
        "Abhorrence": "अत्यधिक द्वेष, घृणा ",
        "Abhorrency": "अत्यधिक द्वेष, घृणा",
        "Abhorrent": "तिरष्कार पैदा करने वाला, घिनौना",
        "Abide": "सहन करना, अनुसरण करना पालन करना",
        "Abider": "निवासी, पालन करने वाला",
        "Abiding": "Permanent, Continuing ,स्थायी, चिरकालिक",
        "Ability": "योग्यता, क्षमता",
        "Abiosis": "निर्जीवता",
        "Abiotic": "अजैव, निर्जीव",
        "Abject": "निकृष्ट, नीच",
        "Abjection": "नीचता",
        "Abjectly": "नीचता से, दुष्टता या कमीनेपन से",
        "Abjudicate": "न्याय करना, ",
        "Abjuration": "शपथपूर्वक तयाग",
        "Abjurement": "शपथपूर्वक तयाग",
        "Abjure": "सपथ से हट जाना",
        "Ablactate": "छाती से दूध पीना छुड़ाना",
        "Ablative": " अपादान कारक, पंचमी विभक्ति",
        "Ablaut": "एक स्वर को दूसरे स्वर में विधिवत् बदलना",
        "Ablaze": "प्रज्वलित, जलता हुआ, दहकता हुआ",
        "Able": "योग्य, समर्थ",
        "Able-bodied": "ह्रष्ट-पुष्ट, स्वस्थ",
        "Abloom": "फूलने की अवस्था में, फूला हुआ",
        "Ablow": "वार, बजते हुए",
        "Ablution": "",
        "Ably": "",
        "Abnegate": "",
        "Abnegation": "",
        "Abnormal": "",
        "Aboard": "",
        "Abode": "",
        "Aboil": "",
        "Abolish": "",
        "Abolition": "",
        "Abolishment": "",
        "Abominable": "",
        "Abominate": "",
        "Abominator": "",
        "Abomination": "",
        "Aboral": "",
        "Aboriginal": "",
        "Abort": "",
        "Abortion": "",
        "Abound": "",
        "About": "",
        "Above": "",
        "Above-board": "",
        "Abrade": "",
        "Abrasion": "",
        "Abreast": "",
        "Abridge": "",
        "Abridgement": "",
        "Abroach": "",
        "Abroad": "",
        "Abrogate": "",
        "Abrogation": "",
        "Abrupt": "",
        "Abruptly": "",
        "Abruptness": "",
        "Abscess": "",
        "Abscind": "",
        "Abscission": "",
        "Abscond": "",
        "Abscondence": "",
        "Absconder": "",
        "Absence": "",
        "Absent": "",
        "Absentee": "",
        "Absenteeism": "",
        "Absent-minded": "",
        "Absinth": "",
        "Absolute": "",
        "Absolutely": "",
        "Absolution": "",
        "Absolutism": "",
        "Absolve": "",
        "absonant": "",
        "Absorb": "",
        "Absorbent": "",
        "Absorption": "",
        "Absorptive": "",
        "Abstain": "",
        "Abstainer": "",
        "Abstemious": "",
        "Abstention": "",
        "Absterge": "",
        "Abstinence": "",
    









        
        // Add more words and their definitions here
    };

    return definitions[word];
}