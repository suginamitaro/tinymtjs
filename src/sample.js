const TinyMT = require('./tinymtjs');

var tiny = new TinyMT(29);
console.log('new TinyMT(29)');
for (var i = 0; i < 10; i++) {
    console.log(tiny.getInt31());
}
tiny = new TinyMT([12,34]);
console.log('new TinyMT([12,34])');
for (var i = 0; i < 10; i++) {
    console.log(tiny.getDouble31());
}
tiny.setSeed('seed');
console.log("tiny.setSeed('seed')");
for (var i = 0; i < 10; i++) {
    console.log(tiny.getInt(5));
}
tiny.setSeed([]);
console.log('tiny.setSeed([])');
for (var i = 0; i < 10; i++) {
    console.log(tiny.getDouble31());
}
tiny.setSeed("");
console.log('tiny.setSeed("") same as []');
for (var i = 0; i < 10; i++) {
    console.log(tiny.getDouble31());
}
