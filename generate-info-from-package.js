var fs = require('fs');
var gutil = require('gulp-util');
var colors = require('colors/safe');
var pjson = require('./package.json');
var filename = './src/js/app/version-info.js';

var logColor = colors.yellow;
var logColor2 = colors.blue;

var output = {
  name: pjson.name,
  version: pjson.version,
  description: pjson.description
};

output = 'export default ' + JSON.stringify(output).replace(/"/g, '\'');
output += ';\n';

function saveConfigToFile() {
  fs.writeFile(filename, output, function(err) {
    if (err) {
      gutil.log(logColor(err));
    } else {
      gutil.log('JSON saved to', logColor2(filename));
    }
  });
}

saveConfigToFile();
