'use strict';
const snoowrap = require('snoowrap');
const { redditClientId, redditClientSecret, redditRefreshToken, redditUserAgent } = require('./config.json');

const r = new snoowrap({
    userAgent: redditUserAgent,
    clientId: redditClientId,
    clientSecret: redditClientSecret,
    refreshToken: redditRefreshToken
});

const fetchPost = r.getRandomSubmission('formuladank')
    .then(data => {
        return data.title
    })

const randomPost = async () => {
    const result = await fetchPost;
    console.log(result);
    return result;
}

module.exports = randomPost();

