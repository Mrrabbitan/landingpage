import preval from "preval.macro";

const mdText = preval`
const marked = require('marked');
const fs = require('fs');
const test = marked(fs.readFileSync(__dirname + '/terms.md', 'utf8'));

module.exports = test;
`;

export default mdText;
