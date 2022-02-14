/** @format */
//Zipping a local file
var zipper = require('zip-local');
zipper.sync.zip('./test.txt').compress().save('pack.zip');

