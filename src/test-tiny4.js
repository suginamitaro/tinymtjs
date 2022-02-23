const TinyMT = require('./tinymtjs');

var tiny = new TinyMT([12,34]);
console.log('new TinyMT([12,34])');
for (var i = 0; i < 10; i++) {
    console.log(tiny.getDouble31());
}
tiny.setSeed(9);
console.log('tiny.setSeed(9)');
for (var i = 0; i < 10; i++) {
    console.log(tiny.getDouble31());
}
tiny.setSeed('seed');
console.log("tiny.setSeed('seed')");
for (var i = 0; i < 10; i++) {
    console.log(tiny.getDouble31());
}
tiny.setSeed([]);
console.log('tiny.setSeed([])');
for (var i = 0; i < 10; i++) {
    console.log(tiny.getDouble31());
}
tiny.setSeed(['abc']);// should be NG, but not NG
console.log("tiny.setSeed(['abc'])");
for (var i = 0; i < 10; i++) {
    console.log(tiny.getDouble31());
}
