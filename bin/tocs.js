'use strict';
const fs = require('fs');
const toc = require('markdown-toc');
let data = require('../_data/meta.json');

data.forEach((element, index) => {
  if (index !== 0) {
    let content = fs.readFileSync('./' + element, 'utf8');
    let res = toc(content, {
      append: '\n',
      firsth1: true
    }).content;
    console.log(res);
    fs.writeFile(`./${element.split('.')[0]}-toc.md`, res, (err) => {
      if (err) {
        console.error(err);
      }
    });
  }
});
