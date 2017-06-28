/**
 * Created by ahmed on 6/25/2017.
 */

function removeHamzaFromLamALf(text){
    var sub = "لأ";
    if(text.indexOf(sub) !== -1)
        text = text.replace(/لأ/g,'ا');
    if(text.indexOf("لإ") !== -1)
        text = text.replace(/لإ/g,'ا');
    if(text.indexOf("لآ") !==-1)
       text = text.replace(/لآ/g,'ا');

    return text;
}

function removeHamzaNabra(text){
    if(text.indexOf("ئ") !== -1)
        text = text.replace(/ئ/g,'ء');
    if(text.indexOf("ؤ") !== -1)
        text = text.replace(/ؤ/g,'ء');

    return text;
}

function removeHamzaFromALf(text){
    var sub = "أ";
    if(text.indexOf(sub) !== -1)
        text = text.replace(/أ/g,'ا');
    if(text.indexOf("إ") !== -1)
        text = text.replace(/إ/g,'ا');
    if(text.indexOf("آ") !==-1)
        text = text.replace(/آ/g,'ا');

    return text;
}

function editYeh(text){
    if(text.indexOf("ى") !== -1)
        text = text.replace(/ى/g,'ي');

    return text;
}
function editHeh(text){
    if(text.indexOf('ه') == text.length-1)
        text = text.replace("ه","ة");

    return text;
}


function removePunctuation(input){
    input=input.replace(/\u0610/g, "");//ARABIC SIGN SALLALLAHOU ALAYHE WA SALLAM
    input=input.replace(/\u0611/g, "");//ARABIC SIGN ALAYHE ASSALLAM
    input=input.replace(/\u0612/g, "");//ARABIC SIGN RAHMATULLAH ALAYHE
    input=input.replace(/\u0613/g, "");//ARABIC SIGN RADI ALLAHOU ANHU
    input=input.replace(/\u0614/g, "");//ARABIC SIGN TAKHALLUS

    //Remove koranic anotation
    input=input.replace(/\u0615/g, "");//ARABIC SMALL HIGH TAH
    input=input.replace(/\u0616/g, "");//ARABIC SMALL HIGH LIGATURE ALEF WITH LAM WITH YEH
    input=input.replace(/\u0617/g, "");//ARABIC SMALL HIGH ZAIN
    input=input.replace(/\u0618/g, "");//ARABIC SMALL FATHA
    input=input.replace(/\u0619/g, "");//ARABIC SMALL DAMMA
    input=input.replace(/\u061A/g, "");//ARABIC SMALL KASRA
    input=input.replace(/\u06D6/g, "");//ARABIC SMALL HIGH LIGATURE SAD WITH LAM WITH ALEF MAKSURA
    input=input.replace(/\u06D7/g, "");//ARABIC SMALL HIGH LIGATURE QAF WITH LAM WITH ALEF MAKSURA
    input=input.replace(/\u06D8/g, "");//ARABIC SMALL HIGH MEEM INITIAL FORM
    input=input.replace(/\u06D9/g, "");//ARABIC SMALL HIGH LAM ALEF
    input=input.replace(/\u06DA/g, "");//ARABIC SMALL HIGH JEEM
    input=input.replace(/\u06DB/g, "");//ARABIC SMALL HIGH THREE DOTS
    input=input.replace(/\u06DC/g, "");//ARABIC SMALL HIGH SEEN
    input=input.replace(/\u06DD/g, "");//ARABIC END OF AYAH
    input=input.replace(/\u06DE/g, "");//ARABIC START OF RUB EL HIZB
    input=input.replace(/\u06DF/g, "");//ARABIC SMALL HIGH ROUNDED ZERO
    input=input.replace(/\u06E0/g, "");//ARABIC SMALL HIGH UPRIGHT RECTANGULAR ZERO
    input=input.replace(/\u06E1/g, "");//ARABIC SMALL HIGH DOTLESS HEAD OF KHAH
    input=input.replace(/\u06E2/g, "");//ARABIC SMALL HIGH MEEM ISOLATED FORM
    input=input.replace(/\u06E3/g, "");//ARABIC SMALL LOW SEEN
    input=input.replace(/\u06E4/g, "");//ARABIC SMALL HIGH MADDA
    input=input.replace(/\u06E5/g, "");//ARABIC SMALL WAW
    input=input.replace(/\u06E6/g, "");//ARABIC SMALL YEH
    input=input.replace(/\u06E7/g, "");//ARABIC SMALL HIGH YEH
    input=input.replace(/\u06E8/g, "");//ARABIC SMALL HIGH NOON
    input=input.replace(/\u06E9/g, "");//ARABIC PLACE OF SAJDAH
    input=input.replace(/\u06EA/g, "");//ARABIC EMPTY CENTRE LOW STOP
    input=input.replace(/\u06EB/g, "");//ARABIC EMPTY CENTRE HIGH STOP
    input=input.replace(/\u06EC/g, "");//ARABIC ROUNDED HIGH STOP WITH FILLED CENTRE
    input=input.replace(/\u06ED/g, "");//ARABIC SMALL LOW MEEM

    //Remove tatweel
    input=input.replace(/\u0640/g, "");

    //Remove tashkeel
    input=input.replace(/\u064B/g, "");//ARABIC FATHATAN
    input=input.replace(/\u064C/g, "");//ARABIC DAMMATAN
    input=input.replace(/\u064D/g, "");//ARABIC KASRATAN
    input=input.replace(/\u064E/g, "");//ARABIC FATHA
    input=input.replace(/\u064F/g, "");//ARABIC DAMMA
    input=input.replace(/\u0650/g, "");//ARABIC KASRA
    input=input.replace(/\u0651/g, "");//ARABIC SHADDA
    input=input.replace(/\u0652/g, "");//ARABIC SUKUN
    input=input.replace(/\u0653/g, "");//ARABIC MADDAH ABOVE
    input=input.replace(/\u0654/g, "");//ARABIC HAMZA ABOVE
    input=input.replace(/\u0655/g, "");//ARABIC HAMZA BELOW
    input=input.replace(/\u0656/g, "");//ARABIC SUBSCRIPT ALEF
    input=input.replace(/\u0657/g, "");//ARABIC INVERTED DAMMA
    input=input.replace(/\u0658/g, "");//ARABIC MARK NOON GHUNNA
    input=input.replace(/\u0659/g, "");//ARABIC ZWARAKAY
    input=input.replace(/\u065A/g, "");//ARABIC VOWEL SIGN SMALL V ABOVE
    input=input.replace(/\u065B/g, "");//ARABIC VOWEL SIGN INVERTED SMALL V ABOVE
    input=input.replace(/\u065C/g, "");//ARABIC VOWEL SIGN DOT BELOW
    input=input.replace(/\u065D/g, "");//ARABIC REVERSED DAMMA
    input=input.replace(/\u065E/g, "");//ARABIC FATHA WITH TWO DOTS
    input=input.replace(/\u065F/g, "");//ARABIC WAVY HAMZA BELOW
    input=input.replace(/\u0670/g, "");//ARABIC LETTER SUPERSCRIPT ALEF

    return input;
}


module.exports = {
    Normalize : function (text) {
        text = removeHamzaFromALf(text);
        text = removeHamzaFromLamALf(text);
        text = removeHamzaNabra(text);
        text = editHeh(text);
        text = editYeh(text);
        text = removePunctuation(text);

        return text;
    }
}