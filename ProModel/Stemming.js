/**
 * Created by ahmed on 6/25/2017.
 */
var fo = require(__dirname + '/FileOperation');

function endsWith(string, suffix){
    return string.indexOf(suffix, string.length - suffix.length) !== -1;
}

/*
* prefix
* */
function removeBPrefix(text){
    if(text.indexOf("ب") == 0){
        var data = fo.read('./arabic/prefix/ب.txt');

        for(var i=0; i<data.length;i++){
            if(data[i] == text)
                return text;
        }

        text = text.substring(1,text.length);
    }
    return text;
}

function removeWPrefix(text){
    if(text.indexOf("و") == 0){
        var data = fo.read('./arabic/prefix/و.txt');

        for(var i=0; i<data.length;i++){
            if(data[i] == text)
                return text;
        }

        text = text.substring(1,text.length);
    }
    return text;
}

function removeFPrefix(text){
    if(text.indexOf("ف") == 0){
        var data = fo.read('./arabic/prefix/ف.txt');

        for(var i=0; i<data.length;i++){
            if(data[i] == text)
                return text;
        }

        text = text.substring(1,text.length);
    }
    return text;
}

function removeLPrefix(text){
    if(text.indexOf("ل") == 0){
        var data = fo.read('./arabic/prefix/ل.txt');

        for(var i=0; i<data.length;i++){
            if(data[i] == text)
                return text;
        }

        text = text.substring(1,text.length);
    }
    return text;
}

function removeKPrefix(text){
    if(text.indexOf("ك") == 0){
        var data = fo.read('./arabic/prefix/ك.txt');

        for(var i=0; i<data.length;i++){
            if(data[i] == text)
                return text;
        }

        text = text.substring(1,text.length);
    }
    return text;
}

function removeALPrefix(text){
    if(text.indexOf("ال")    == 0){
        var data = fo.read('./arabic/prefix/ال.txt');

        for(var i=0; i<data.length;i++){
            if(data[i] == text)
                return text;
        }

        text = text.substring(1,text.length);
    }
    return text;
}

function removeWALPrefix(text){
    if(text.indexOf("وال")    == 0){
        var data = fo.read('./arabic/prefix/وال.txt');

        for(var i=0; i<data.length;i++){
            if(data[i] == text)
                return text;
        }

        text = text.substring(1,text.length);
    }
    return text;
}

function removeWKALPrefix(text){
    if(text.indexOf("وكال")    == 0){
        var data = fo.read('./arabic/prefix/وكال.txt');

        for(var i=0; i<data.length;i++){
            if(data[i] == text)
                return text;
        }

        text = text.substring(1,text.length);
    }
    return text;
}

function removeBALPrefix(text){
    if(text.indexOf("بال") == 0){
        var data = fo.read('./arabic/prefix/بال.txt');

        for(var i=0; i<data.length;i++){
            if(data[i] == text)
                return text;
        }

        text = text.substring(1,text.length);
    }
    return text;
}

function removeBTPrefix(text){
    if(text.indexOf("بت") == 0){
        var data = fo.read('./arabic/prefix/بت.txt');

        for(var i=0; i<data.length;i++){
            if(data[i] == text)
                return text;
        }

        text = text.substring(1,text.length);
    }
    return text;
}

function removeBNPrefix(text){
    if(text.indexOf("بن") == 0){
        var data = fo.read('./arabic/prefix/بن.txt');

        for(var i=0; i<data.length;i++){
            if(data[i] == text)
                return text;
        }

        text = text.substring(1,text.length);
    }
    return text;
}

function removeBETPrefix(text){
    if(text.indexOf("بيت") == 0){
        var data = fo.read('./arabic/prefix/بيت.txt');

        for(var i=0; i<data.length;i++){
            if(data[i] == text)
                return text;
        }

        text = text.substring(1,text.length);
    }
    return text;
}

function removeHTPrefix(text){
    if(text.indexOf("هت") == 0){
        var data = fo.read('./arabic/prefix/هت.txt');

        for(var i=0; i<data.length;i++){
            if(data[i] == text)
                return text;
        }

        text = text.substring(1,text.length);
    }
    return text;
}


/*
 * suffix
 * */
function removeATSuffix(text){
    if(endsWith(text,"ات")){
        var data = fo.read('./arabic/suffix/ات.txt');

        for(var i=0; i<data.length;i++){
            if(data[i] == text)
                return text;
        }

        text = text.substring(0, text.length-2);
    }
    return text;
}

function removeTmrbotaSuffix(text){
    if(endsWith(text,"ة")){
        var data = fo.read('./arabic/suffix/ة.txt');

        for(var i=0; i<data.length;i++){
            if(data[i] == text)
                return text;
        }

        text = text.substring(0, text.length-1);
    }
    return text;
}

function removeTSuffix(text){
    if(endsWith(text,"ت")){
        var data = fo.read('./arabic/suffix/ت.txt');

        for(var i=0; i<data.length;i++){
            if(data[i] == text)
                return text;
        }

        text = text.substring(0, text.length-1);
    }
    return text;
}

function removeYATSuffix(text){
    if(endsWith(text,"يات")){
        var data = fo.read('./arabic/suffix/يات.txt');

        for(var i=0; i<data.length;i++){
            if(data[i] == text)
                return text;
        }

        text = text.substring(0, text.length-3);
    }
    return text;
}


/*
 * infix -- Rules for Broken Plurals
 * */
function infixR1(text){
    if(text.length == 5 && text.charAt(1) !== 'و' && text.charAt(3) == 'ء'
        && text.charAt(2) == 'ا' && (text.charAt(4) != 'ي' || text.charAt(4) != 'ه')){
        var temp = text.split('');
        temp[2] = 'ي';
        temp[3] = temp[4];
        temp[4] = 'ة';
        text = "";
        for(var i=0; i<temp.length; i++){
            text += text[i];
        }
    }
    return text;
}

function infixR2(text){
    if(text.length == 5 && text.charAt(1) == 'و' && text.charAt(3) == 'ء'
        && text.charAt(2) == 'ا' && (text.charAt(4) !== 'ي' || text.charAt(4) != 'ه')){
        var temp = text.split('');
        temp[1] = temp[0];
        temp[0] = 'ة';
        text = "";

        for (var i = 1; i < temp.length; i++)
            text += temp[i];

        text += temp[0];
    }
    return text;
}

function infixR3(text){
    var temp = "";
    if(endsWith(text, "ايا") && text.charAt(1) !== 'و'){
        temp += text.charAt(0);
        temp += text.charAt(1);
        temp += "ية";
    }

    return(temp.length > 0 ? temp : text);
}

function infixR4(text){
    var temp = "";
    if(text.length == 3 && text.charAt(2) == text.charAt(1)){
        temp += text.charAt(0);
        temp += text.charAt(1);
        temp += 'ة';
    }

    return(temp.length > 0 ? temp : text);
}

function infixR5(text){
    var temp = "";
    if(text.length == 4 && text.charAt(2) == 'و' && text.charAt(3) !== 'ة'){
        temp += text.substring(0, 2);
        temp += text.charAt(3);
    }

    return(temp.length > 0 ? temp : text);
}

function infixR6(text){
    var temp = "";
    if(text.length == 5 && text.charAt(2) == 'ا'){
        temp += text.substring(0, 2);
        temp += text.substring(3, 5);
    }

    return(temp.length > 0 ? temp : text);
}

function infixR7(text){
    var temp = "";
    if(text.length == 5 && text.charAt(3) == 'ا' && text.charAt(4) == 'ء'){
        temp += text.substring(0, 2);
        temp += 'ى';
        temp += text.charAt(2);
    }

    return(temp.length > 0 ? temp : text);
}

function infixR8(text){
    var temp = "";
    if(text.length == 5 && text.charAt(0) == 'ا' && text.charAt(4) == 'ة'){
        temp += text.substring(1, 3);
        temp += 'ا';
        temp += text.charAt(3);
    }

    return(temp.length > 0 ? temp : text);
}

function infixR9_1(text){
    var temp = "";
    if(text.length == 5 && text.charAt(0) == 'ا' && text.charAt(3) == 'ا' && text.charAt(1) !== 'ي'
        && text.charAt(1) !== 'ش' && text.charAt(2) !== 'ر'){
        temp += text.substring(1, 3);
        temp += text.charAt(4);
    }

    return(temp.length > 0 ? temp : text);
}

function infixR9_2(text){
    var temp = "";
    if(text.length == 5 && text.charAt(0) == 'ا' && text.charAt(3) == 'ا' &&  text.charAt(1) == 'ش'){
        temp += text.substring(1, 3);
        temp += text.charAt(4);
        temp += 'ة';
    }

    return(temp.length > 0 ? temp : text);
}

function infixR9_3(text){
    var temp = "";
    if(text.length == 5 && text.charAt(0) == 'ا' && text.charAt(3) == 'ا' &&  text.charAt(2) == 'ر'
        && text.charAt(1) == 'س'){
        temp += text.substring(1, 3);
    }

    return(temp.length > 0 ? temp : text);
}

function infixR9_4(text){
    var temp = "";
    if(text.length == 5 && text.charAt(0) == 'ا' && text.charAt(3) == 'ا' &&  text.charAt(2) == 'ر'
        && text.charAt(1) == 'ب'){
        temp += text.charAt(1);
        temp += text.charAt(3);
        temp += text.charAt(4);
    }

    return(temp.length > 0 ? temp : text);
}

function infixR10(text){
    var temp = "";
    if(text.length == 4 && text.charAt(2) == 'و' && text.charAt(1) == text.charAt(3)){
        temp += text.substring(0,2);
    }

    return(temp.length > 0 ? temp : text);
}

function infixR11(text){
    var temp = "";
    if(text.length == 5 && text.charAt(1) == 'و' && text.charAt(2) == 'ا'){
        temp += text.charAt(0);
        temp += text.substring(2,5);
    }

    return(temp.length > 0 ? temp : text);
}

module.exports = {
    Stemm : function(text){
        //prefix
        text = removeWPrefix(text);
        text = removeBPrefix(text);
        text = removeBALPrefix(text);
        text = removeALPrefix(text);
        text = removeFPrefix(text);
        text = removeLPrefix(text);
        text = removeKPrefix(text);
        text = removeWALPrefix(text);
        text = removeWKALPrefix(text);
        text = removeBTPrefix(text);
        text = removeBNPrefix(text);
        text = removeBETPrefix(text);
        text = removeHTPrefix(text);
        //suffix
        text = removeATSuffix(text);
        text = removeTmrbotaSuffix(text);
        text = removeTSuffix(text);
        text = removeYATSuffix(text);
        //infix
        text = infixR1(text);
        text = infixR2(text);
        text = infixR3(text);
        text = infixR4(text);
        text = infixR5(text);
        text = infixR6(text);
        text = infixR7(text);
        text = infixR8(text);
        text = infixR9_1(text);
        text = infixR9_2(text);
        text = infixR9_3(text);
        text = infixR9_4(text);
        text = infixR10(text);
        text = infixR11(text);
        return text;
    }
}