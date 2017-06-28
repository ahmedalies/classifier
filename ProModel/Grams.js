/**
 * Created by ahmed on 6/22/2017.
 */

module.exports = {
    // generate word grams
    getBiGramsList : function (word, known){
        var basicBi_Grams = [] ;
        var testBi_Grams = [] ;
        var unionBi_Grams = [] ;
        var commonBi_Grams = [] ;
        var wordWeight = {};

        basicBi_Grams.push(word.substring(0,1));
        for (var i = 0; i < word.toString().length -1; i++) {
            if(i < word.toString().length )
                basicBi_Grams.push(word.substring(i,i+2));
        }
        basicBi_Grams.push(word.substring(word.toString().length-1,word.toString().length));

        known.forEach(function (item) {
            testBi_Grams.push(item.toString().substring(0,1));
            for (var j = 0; j < item.toString().length-1; j++) {
                if(j < item.toString().length)
                    testBi_Grams.push(item.toString().substring(j,j+2));
            }
            testBi_Grams.push(item.substring(item.length-1,item.length));

            for (var i = 0; i < basicBi_Grams.length; i++)
                unionBi_Grams.push(basicBi_Grams[i].toString());

            for (var i = 0; i < testBi_Grams.length; i++) {
                if (unionBi_Grams.indexOf(testBi_Grams[i]) < 0) {
                    unionBi_Grams.push(testBi_Grams[i]);
                }
            }

            for (var i = 0; i < testBi_Grams.length; i++) {
                if(basicBi_Grams.indexOf(testBi_Grams[i]) > 0)
                    commonBi_Grams.push(testBi_Grams[i]);
            }

            wordWeight[item] =  Number(commonBi_Grams.length/unionBi_Grams.length);
            commonBi_Grams = [] ;
            testBi_Grams = [];
            unionBi_Grams = [];
        });

        return wordWeight;
    },
    getUniGrams : function (word, known) {
        var basicBi_Grams = [];
        var testBi_Grams = [];
        var unionBi_Grams = [];
        var commonBi_Grams = [];
        var wordWeight = {};

        for (var i = 0; i< word.length; i++)
            basicBi_Grams.push(word.charAt(i));

        for (var i = 0; i< word.length; i++)
            testBi_Grams.push(known.charAt(i));

        for (var i = 0; i < basicBi_Grams.length; i++)
            unionBi_Grams.push(basicBi_Grams[i].toString());


        for (var i = 0; i < testBi_Grams.length; i++) {
            if (unionBi_Grams.indexOf(testBi_Grams[i]) < 0) {
                unionBi_Grams.push(testBi_Grams[i]);
            }
        }

        for (var i = 0; i < testBi_Grams.length; i++) {
            if (basicBi_Grams.indexOf(testBi_Grams[i]) >= 0 && commonBi_Grams.indexOf(testBi_Grams[i]) < 0) {
                commonBi_Grams.push(testBi_Grams[i]);
            }
        }

        wordWeight[known] = Number(commonBi_Grams.length/unionBi_Grams.length);
        return wordWeight;
    },
    getBiGrams : function (word, known){
        var basicBi_Grams = [];
        var testBi_Grams = [];
        var unionBi_Grams = [];
        var commonBi_Grams = [];
        var wordWeight = {};

        basicBi_Grams.push(word.substring(0,1));
        for (var i = 0; i< word.length-1; i++){
            if(i < word.length)
                basicBi_Grams.push(word.substring(i,i+2));
        }
        basicBi_Grams.push(word.substring(word.length-1,word.length));

        testBi_Grams.push(known.substring(0,1));
        for (var i = 0; i< known.length-1; i++){
            if(i < known.length)
                testBi_Grams.push(known.substring(i,i+2));
        }
        testBi_Grams.push(known.substring(known.length-1,known.length));

        for (var i = 0; i< basicBi_Grams.length; i++)
            unionBi_Grams.push(basicBi_Grams[i]);

        for (var i = 0; i< testBi_Grams.length; i++) {
            if (unionBi_Grams.indexOf(testBi_Grams[i]) < 0)
                unionBi_Grams.push(testBi_Grams[i]);
        }

        for (var i = 0; i< testBi_Grams.length; i++){
            if(basicBi_Grams.indexOf(testBi_Grams[i]) >= 0 && commonBi_Grams.indexOf(testBi_Grams[i]) < 0)
                commonBi_Grams.push(testBi_Grams[i]);
        }
        wordWeight[known] = commonBi_Grams.length/unionBi_Grams.length;
        return wordWeight;
    },
    getTriGrams : function (word, known){
        var basicBi_Grams = [];
        var testBi_Grams = [];
        var unionBi_Grams = [];
        var commonBi_Grams = [];
        var wordWeight = {};

        basicBi_Grams.push(word.substring(0,1));
        basicBi_Grams.push(word.substring(0,2));
        for (var i = 0; i < word.length-1; i++){
            if(i+2 <word.length)
                basicBi_Grams.push(word.substring(i,i+3));
        }
        basicBi_Grams.push(word.substring(word.length-2,word.length));
        basicBi_Grams.push(word.substring(word.length-1,word.length));

        testBi_Grams.push(known.substring(0,1));
        testBi_Grams.push(known.substring(0,2));
        for (var j = 0; j < known.length-1; j++) {
            if(j+2 < known.length)
                testBi_Grams.push(known.substring(j,j+3));
        }
        testBi_Grams.push(known.substring(known.length-2,known.length));
        testBi_Grams.push(known.substring(known.length-1,known.length));

        for(var i = 0; i< basicBi_Grams.length; i++)
            unionBi_Grams.push(basicBi_Grams[i]);

        for (var i = 0; i< testBi_Grams.length; i++) {
            if(unionBi_Grams.indexOf(testBi_Grams[i]) < 0)
                unionBi_Grams.push(testBi_Grams[i]);
        }

        for (var i = 0; i< testBi_Grams.length; i++) {
            if(basicBi_Grams.indexOf(testBi_Grams[i]) >= 0)
                commonBi_Grams.push(testBi_Grams[i]);
        }

        wordWeight[known] = commonBi_Grams.length/unionBi_Grams.length;

        return wordWeight;
    },

    // generate sentence grams
    generateBiGrams : function (sentence) {
        var temp = [];
        for (var i = 0; i< sentence.length-1; i++){
            if(i < sentence.length)
                temp.push(sentence[i] + " " + sentence[i+1]);
        }
        return temp;
    },
    generateTriGrams : function (sentence) {
        var temp = [];
        for (var i = 0; i< sentence.length-2; i++){
            if(i < sentence.length)
                temp.push(sentence[i] + " " + sentence[i+1] + " " + sentence[i+2]);
        }
        return temp;
    }
};
