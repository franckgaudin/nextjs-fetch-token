const ghpages = require('gh-pages');

ghpages.publish('out', (err) => { console.error(err); });
