var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

// TODO: refactor this to a storyboard model
// Set up the data API
var data = path.join(__dirname, '../data/storyboard.json');
var meta = {};
var items = {};

router.get('/', function (req, res, next) {
    // TODO: refactor this to use storyboard model
    fs.readFile(data, 'utf8', function (err, data) {
        if (!err) {
            meta = JSON.parse(data).meta;
            items = JSON.parse(data).items;
        } else {
            console.log("There was an error reading the storyboard file: ", err)
        }

        const data = JSON.parse(contents);

        res.render('preview', {
            nav: data.nav,
            items: data.items,
            meta: data.meta,
            partials: {
                fb: 'partials/fb',
                head: 'partials/head',
                header: 'partials/header',
                imagebackground: 'partials/imagebackground',
                imageparallax: 'partials/imageparallax',
                intro: 'partials/intro',
                loader: 'partials/loader',
                textcentered: 'partials/textcentred',
                title: 'partials/title',
                slideshowhorizontal: 'partials/slideshowhorizontal',
                slideshowvertical: 'partials/slideshowvertical',
                snippets: 'partials/snippets',
                social: 'partials/social',
                subdataposterloadingimage: 'partials/subdataposterloadingimage',
                subvideosource: 'partials/subvideosource',
                videobackground: 'partials/videobackground',
                videofullpage: 'partials/videofullpage'
            }
        });
    });
});

module.exports = router;