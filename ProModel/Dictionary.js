/**
 * Created by ahmed on 6/26/2017.
 */
var fo = require(__dirname + '/FileOperation');
var DictionaryWords = fo.read('./arabic/dic/dictionary.txt');

module.exports = {
    DicWords : function(){
        return DictionaryWords;
    },

    chechEX : function(word){
        for (var i = 0;i < DictionaryWords.length; i++){
            if(word === DictionaryWords[i])
                return true;
        }

        return false;
    }
}