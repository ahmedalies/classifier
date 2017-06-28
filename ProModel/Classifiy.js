/**
 * Created by ahmed on 6/23/2017.
 */
var fo = require(__dirname + '/FileOperation'),
    Grams = require(__dirname + '/Grams'),
    Clean = require(__dirname + '/Clean');

module.exports = {
    classify : function (tokens, sense, lang) {
        var tempMap,
            fileNamesEN = fo.dir('./dataset'),
            fileNamesAR = fo.dir('./arabic/dataset');
            finalTokensMap = {},
            scoreCategoryMap = {},
            scores = [];

        if (lang['both']){
            return 'illegal mixed languages';
        }

        if(lang['en']) {
            for (var i = 0; i < fileNamesEN.length; i++) {
                var words = fo.read('./dataset/' + fileNamesEN[i]);
                var sum = 0;

                tokens.forEach(function (token) {
                    var tempValue = 0;
                    words.forEach(function (word) {
                        if (word.length > 2) {
                            tempMap = Grams.getBiGrams(token, Clean.clean(word));
                            if (Number(tempMap[word]) > tempValue) {
                                if (sense + ".txt" == fileNamesEN[i])
                                    tempValue = Number(tempMap[word]) + tokens.length / 2;
                                else
                                    tempValue = Number(tempMap[word]);
                            }
                        }
                    });
                    if (tempValue > 0.3)
                        sum += tempValue;
                });
                finalTokensMap[fileNamesEN[i]] = sum;
                scores[i] = sum;
            }
            var sumCateg = 0;
            for (var i = 0; i < fileNamesEN.length; i++) {
                if (scores[i] != 0)
                    sumCateg += scores[i];
                else
                    sumCateg += 0.01;
            }

            for (var i = 0; i < fileNamesEN.length; i++) {
                if (scores[i] == 0)
                    scoreCategoryMap[fileNamesEN[i]] = 0.01;
                else
                    scoreCategoryMap[fileNamesEN[i]] = scores[i] / sumCateg;
            }

            return scoreCategoryMap;
        }
        else if(lang['ar']) {
            for (var i = 0; i < fileNamesAR.length; i++) {
                var words = fo.read('./arabic/dataset/' + fileNamesAR[i]);
                var sum = 0;

                tokens.forEach(function (token) {
                    var tempValue = 0;
                    words.forEach(function (word) {
                        if (word.length > 2) {
                            tempMap = Grams.getBiGrams(token, Clean.clean(word));
                            if (Number(tempMap[word]) > tempValue) {
                                if (sense + ".txt" == fileNamesAR[i])
                                    tempValue = Number(tempMap[word]) + tokens.length / 2;
                                else
                                    tempValue = Number(tempMap[word]);
                            }
                        }
                    });
                    if (tempValue > 0.3)
                        sum += tempValue;
                });
                finalTokensMap[fileNamesAR[i]] = sum;
                scores[i] = sum;
            }
            var sumCateg = 0;
            for (var i = 0; i < fileNamesAR.length; i++) {
                if (scores[i] != 0)
                    sumCateg += scores[i];
                else
                    sumCateg += 0.01;
            }

            for (var i = 0; i < fileNamesAR.length; i++) {
                if (scores[i] == 0)
                    scoreCategoryMap[fileNamesAR[i].replace('.txt','')] = 0.01;
                else
                    scoreCategoryMap[fileNamesAR[i].replace('.txt','')] = scores[i] / sumCateg;
            }
            return scoreCategoryMap;
        }
    }
}