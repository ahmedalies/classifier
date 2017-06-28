/**
 * Created by ahmed on 6/22/2017.
 */
var fo = require(__dirname + '/FileOperation');
var stem = require(__dirname + '/Stemming');
var norm = require(__dirname + '/Normalization');

var finalTokens = [];
function Tokenization(input) {
    if(input.toString().length > 0) {
        PreProccess(input);
    }

    return finalTokens;
}

function PreProccess(input,language){
    var simplifiedOutput = [];
    input = input.toString().toLowerCase();
    input = input.toString().trim();
    input = input.toString().replace(',',' ');
    input = input.replace('\\', ' ');
    input = input.replace('-', ' ');
    input = input.replace('/', ' ');
    var preToken = input.toString().split(' ');

    for (var i = 0;i < preToken.length; i++ ){
        if(preToken[i].toString().length > 1)
            simplifiedOutput.push(preToken[i]);
    }

    removeStopWords(simplifiedOutput, language);
    return simplifiedOutput;
}

function removeStopWords(simplifiedOutput, language){
    var enstopwords = ["is","the","are","an","a","was","were","she","he","him","that"
        ,"there","here","them","and","of","but","also","me","my"
        ,"do","not"];

    var arstopwords = fo.read('./arabic/stop words/stop_words.txt');
    var filtered = [];

    if(language['en']) {
        filtered = containsStopwords(simplifiedOutput, enstopwords);
        finalTokens = filtered;
    }
    else if(language['ar']){
        filtered = containsStopwords(simplifiedOutput, arstopwords);
        var temp = [];
        for (var i = 0; i < filtered.length; i++){
            var str = norm.Normalize(filtered[i]);
            str = stem.Stemm(str);
            temp[i] = str;
        }
        finalTokens = temp;
    }
    return temp;
}

function containsStopwords(source,target) {
    var result = source.filter(function(item){
        if(target.indexOf(item) >= 0)
            return false;
        else
            return true;
    });
    return result;
}

function cleanWord(word){
    word = word.toLowerCase();
    word = word.replace(",","");
    word = word.replace("\\","");
    word = word.replace("-","");
    word = word.trim();
    return word;
}

module.exports = {
    getTokens : function (input, language) {
        if(input.toString().length > 0) {
            PreProccess(input, language);
        }

        return finalTokens;
    },

    intersection : function (source,target) {
        var result = source.filter(function(item){
            if(target.indexOf(item) >= 0)
                return false;
            else
                return true;
        });
        return result;
    },

    clean : function (word){
        word = word.toLowerCase();
        word = word.replace(",","");
        word = word.replace("\\","");
        word = word.replace("-","");
        word = word.trim();
        return word;
    }
};
