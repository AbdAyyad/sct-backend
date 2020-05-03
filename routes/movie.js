const express = require('express');
const router = express.Router();
const omdbbapi = require('../configurations/omdbapi');
const https = require('https');

router.get('/', (req, res, next) => {
    const id = req.query.id;
    const url = `${omdbbapi.url}?apikey=${omdbbapi.apikey}&i=${id}&r=json`;

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
