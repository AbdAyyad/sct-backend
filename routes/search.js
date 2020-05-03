const express = require('express');
const router = express.Router();
const omdbbapi = require('../configurations/omdbapi');
const https = require('https');

router.get('/', (req, res, next) => {
    const search = req.query.search;
    const page = req.query.page;
    const url = `${omdbbapi.url}?apikey=${omdbbapi.apikey}&s=${search}&p=${page}&r=json`;

    https.get(url, (response) => {
        let content = '';

        response.on('data', (chunk) => {
            content += chunk;
        });

        response.on('end', () => {
            res.json(JSON.parse(content));
        })
    });
});

module.exports = router;
