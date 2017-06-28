var express = require('express'),
     router = express.Router(),
     fs = require("fs"),
    qs = require('querystring'),
     gram = require("../ProModel/Grams"),
     FileOperation = require('../ProModel/FileOperation'),
     Classify = require('../ProModel/Classifiy'),
     model = require('../ProModel/Model'),
     stem = require('../ProModel/Stemming'),
     norm = require('../ProModel/Normalization'),
     Clean = require('../ProModel/Clean'),
     pp = require('../ProModel/PreProccess');

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
    res.jsonp("welcome to Fresh-Classifier API")
});

router.get('/read', function(req, res, next) {
    //res.render('index', { title: 'Express' })
    var lang = [];
    lang['en'] = true;
    var text = 'wetsuit white water rafting wicket win windsurfer windsurfing';
    var data = Clean.getTokens(text,lang);
    var temp = gram.generateBiGrams(data);
    var result = FileOperation.writeLBL('./dataset/grams/art.txt',temp,true);
    res.jsonp(FileOperation.readLBL('./dataset/social media.txt'));
});

router.post('/write', function(req, res, next) {
    req.on('end', function () {
        var post = qs.parse(body);
        console.log(post['text']);

        var lang = pp.language(post['text']);
        console.log(lang);
        var data = Clean.getTokens(post['text'],lang);
        console.log(data);
        var temp = gram.generateBiGrams(data);
        var result = FileOperation.writeLBL('./dataset/grams/art.txt',temp,true);
        if(pp.isArray(result))
            res.jsonp(result);
        else
            res.send(result);
    });
});

/* GET home page. */
router.post('/classify', function(req, res, next) {
    if (req.method == 'POST') {
        var body = '';

        req.on('data', function (data) {
            body += data;

            // Too much POST data, kill the connection!
            // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
            if (body.length > 1e6)
                req.connection.destroy();
        });

        req.on('end', function () {
            var post = qs.parse(body);
            console.log(post['text']);
            if(pp.auth(req.header("auth"))) {
                var lang = pp.language(post['text']);
                console.log(lang);
                var data = Clean.getTokens(post['text'],lang);
                console.log(data);
                var result = Classify.classify(data,null,lang);
                if(pp.isArray(result))
                    res.jsonp(result);
                else
                    res.send(result);
            }
        });
    }
});

router.post('/model/train-single', function(req, res, next) {
    if (req.method == 'POST') {
        var body = '';

        req.on('data', function (data) {
            body += data;

            // Too much POST data, kill the connection!
            // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
            if (body.length > 1e6)
                req.connection.destroy();
        });

        req.on('end', function () {
            var post = qs.parse(body);
            console.log(post['category']);
            if(pp.auth(req.header("auth"))) {
                var lang = pp.language(post['text']);
                console.log(lang);
                //console.log(data);
                var result = model.trainSingle(post['category'], post['text'], lang);
                console.log(result);
                res.send(result);
            }
        });
    }
});

router.post('/model/delete-category', function(req, res, next) {
    var arr = ["دولة","سباحة","فوتوشوي"];
    lang = [];
    lang['en'] = false;
    lang['ar'] = true;
    var str = stem.Stemm('فوتوشوي');
    console.log(norm.Normalize(str))
    //console.log(model.trainSingle("celep","- ronaldo"));
    res.send(Classify.classify(arr,null,lang));
});


router.post('/model/train-file', function(req, res, next) {
    var arr = ["دولة","سباحة","فوتوشوي"];
    lang = [];
    lang['en'] = false;
    lang['ar'] = true;
    var str = stem.Stemm('فوتوشوي');
    console.log(norm.Normalize(str))
    //console.log(model.trainSingle("celep","- ronaldo"));
    res.send(Classify.classify(arr,null,lang));
});

module.exports = router;
