const TinyMT = require('./tinymtjs');

var tiny = new TinyMT(1234);
for (var i = 0; i < 1000; i++) {
    console.log(tiny.getDouble31());
}
