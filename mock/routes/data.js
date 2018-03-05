var fs = require('fs');

function filereader(fsRef, path) {
    return new Promise(function (resolve, reject) {
        fsRef.readFile(path, 'utf8', function (e, d) {

            if (e) reject(e);

            else resolve(JSON.parse(d));
        })
    })
}

function testGetRequest(req, res) {
    var servicePromise = filereader(fs, './api/test/get.json');

    servicePromise
        .then((response) => {
            console.log("GET", './api/test/get.json');
            // response
            return response;
        }, (error) => {
            console.log("GET - ERROR", './api/test/get.json', error);
        })
        .then((response) => {
            res.json(response);
        });
}

function testPostRequest(req, res) {
    var servicePromise = filereader(fs, './api/test/post.json');
    // console.log(typeof req.body);
    var fofo = req.body.fofo;

    servicePromise
        .then((response) => {
            console.log("POST", './api/test/post.json');
            response.fofo = fofo*10;

            return response;
        }, (error) => {
            console.log("POST - ERROR", './api/test/post.json', error);
        })
        .then((response) => {
            res.json(response);
        });
}



function getCards(req, res) {
    var path = './api/cards/get.json';
    var servicePromise = filereader(fs, path);

    servicePromise
        .then((response) => {
        console.log("GET", path);
    return response;
}, (error) => {
        console.log("GET - ERROR", path, error);
    })
.then((response) => {
        res.json(response);
});
}

function getCardDetails(req, res) {
    // console.log(req);
    var servicePromise = filereader(fs, './api/campaign/'  + req.params.id + '/get.json');

    servicePromise
        .then((response) => {
        console.log("GET", './api/test/get.json');
    // response
    return response;
}, (error) => {
        console.log("GET - ERROR", './api/test/get.json', error);
    })
.then((response) => {
        res.json(response);
});
}

function getMedia(req, res) {
    var path = './api/media/get.json';
    var servicePromise = filereader(fs, path);

    servicePromise
        .then((response) => {
        console.log("GET", path);
    return response;
}, (error) => {
        console.log("GET - ERROR", path, error);
    })
.then((response) => {
        res.json(response);
});
}


module.exports = { testGetRequest, testPostRequest, getCardDetails, getCards, getMedia};
