'use strict';
const fs = require('fs');
const concat = require('concat-files');
const toc = require('markdown-toc');
let data = require('../_data/meta.json');
let table = '<div id="toc-head">Table of Contents</div>\n';

for (let i = 0; i < data.length; i++) {
  data[i] = './' + data[i];
}

data.forEach((element, index) => {
  if (index !== 0) {
    let content = fs.readFileSync(element, 'utf8');
    let res = toc(content, {
      append: '\n',
      firsth1: true
    }).content;
    // console.log('res ', res);
    table += res;
  }
});

let sidebar = `<!-- aoutgenerated sidebar -->
{% capture my_include %}
${table}
{% endcapture %}
{{ my_include | markdownify }}`;

fs.writeFile('./_includes/sidebar.html', sidebar, (error) => {
  if (error) {
    console.log('error ', error);
  } else {
    console.log('wrote sidebar');

  }

});
fs.writeFile('./md/toc.md', table, (error) => {
  if (error) {
    console.error(error);
  } else {
    concat(data, './index.md', () => {
      console.log('done');
    });

  }
});

