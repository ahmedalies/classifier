/**
 * Created by ahmed on 6/25/2017.
 */


module.exports = {
    language : function(text){
        var language = {};
        var arabic = /[\u0600-\u06FF]/;

        language['ar'] = arabic.test(text)? true:false;
        language['en'] = text.toLowerCase().match(/[a-z]/i)? true:false;
        language['both'] = language['ar'] && language['en']? true:false;

        return language;
    },
     auth : function(key){
         var API = 'ajkcxos49cfosjhc4fc8';
         var adminAPI = 'ais2jas3cdcas8fvrfndf5s';
         return (key === API || key === adminAPI);
     },

    isArray : function (arr) {
        return Object.prototype.toString.call( arr ) === '[object Array]';
    }
}