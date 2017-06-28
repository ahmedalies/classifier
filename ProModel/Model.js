/**
 * Created by ahmed on 6/23/2017.
 */
var fo = require(__dirname + '/FileOperation');
var Clean = require(__dirname + '/Clean');
var norm = require(__dirname + '/Normalization');
var stemm = require(__dirname + '/Stemming');
var grams = require(__dirname + '/Grams');

module.exports = {
    trainFile : function (catgName,filePath, lang) {
        var temp = fo.read(filePath),
            data = [],
            counter = 0;
        temp.forEach(function (word) {
            data[counter] = Clean.clean(word);
            counter++;
        });

        if (lang['en'])
            fo.write('./dataset/' + catgName + '.txt', data, true);
        else if(lang['ar']) {
            var temp = [];
            for(var i =0; i < data.length; i++){
                var str = norm.Normalize(data[i]);
                str = stemm.Stemm(str);
                temp[i] = str;
            }
            fo.write('./arabic/dataset/' + catgName + '.txt', temp, true);
        }
    },

    trainSingle : function(catgName, text, lang){
        if(lang['both'])
            return 'illegal mixed languages';
        if (lang['en']) {
            var data = Clean.getTokens(text,lang);
            if(fo.write('./dataset/' + catgName + '.txt', data.join(" "), true))
                return fo.writeLBL('./dataset/grams/' + catgName + '.txt', grams.generateBiGrams(data), true);
        }
        else if (lang['ar']) {
            var data = Clean.getTokens(text,lang);
            var temp = [];
            for(var i =0; i < data.length; i++){
                var str = norm.Normalize(data[i]);
                str = stemm.Stemm(str);
                temp[i] = str;
            }
            if(fo.write('./arabic/dataset/' + catgName + '.txt', temp.join(" "), true))
                return fo.writeLBL('./arabic/dataset/grams/' + catgName + '.txt', grams.generateBiGrams(data), true);
        }
    },

    deleteCatg : function (catgName, lang){
        if (lang['en']) {
            fo.delete('./dataset/' + catgName + '.txt');
            fo.delete('./dataset/grams' + catgName + '.txt');
        }
        else if (lang['ar']) {
            fo.delete('./arabic/dataset/' + catgName + '.txt');
            fo.delete('./arabic/dataset/grams' + catgName + '.txt');
        }
    }
}