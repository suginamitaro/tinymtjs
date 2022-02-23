# tinymtjs
[TinyMT32](http://www.math.sci.hiroshima-u.ac.jp/m-mat/MT/TINYMT/index.html)modified for JavaScript without permission.

[TinyMT32](http://www.math.sci.hiroshima-u.ac.jp/m-mat/MT/TINYMT/index.html)をJavaScript向けに勝手に改変したもの

Initialization(seeding) is an important part of the pseudo-random
number generator, and good initialization is an essential requirement
for the pseudo-random number generator and should not be easily
initialized. The initialization process of TinyMT has been carefully
considered.  However, I, Taro Suginami, dare to publish a modified
version of the initialization process here.  This modified version is
basically intended for web games, etc., and did not intend for science
or technology calculations.

初期化処理(seeding)は擬似乱数生成器の重要な一部であり、また優れた初期
化処理は擬似乱数生成器に必須の要件であり、安易な初期化を行うべきではあ
りません。TinyMTの初期化処理は十分に配慮されたものです。しかし、私、杉
並太郎は敢えて初期化処理を改変したバージョンをここに公開します。この改
変版は基本的にwebゲームなどを目的としたものであり、科学技術計算を考慮
したものではありません。

Modification Points:
* Initialization procsss
* 31 bit output
* 31 bit precision double output
* Integer output within specified number

改変点:
* 初期化処理
* 31ビット出力
* 31ビットdouble出力

TinyMT is licensed under the BSD license which allows
modification. Using the licens as an excuse, I modifed it and
published it.

TinyMTはBSDライセンスにより改変が許可されています。それを言い訳に私が勝手に改変して公開します。

Javascript numbers are double type numbers, but 32-bit bit operations
are also possible.  This seems to be possible to implement a
pseudo-random number generator based on 32-bit operations such as
TinyMT32 in JavaScript. However, there is an integer multiplication in
TinyMT's initialization process, and the precision is lost in this
part (and the bit operations that follow it). This modified version
reduces the constants used for multiplication so that the
multiplication results in 52 bits. In addition, a left shift is
added to compensate for the reduction in the effect on the high
bits due to the reduction of the constant.

Javascriptの数値はdouble型の数値ですが、32ビットのビット演算も出来るよ
うになっています。これによりTinyMT32などの32ビット演算に基づく擬似乱数
生成器をJavaScriptに実装することが可能なように思えます。しかし、TinyMT
の初期化処理の中に整数の乗算があり、この部分（とそれに続くビット演算）
で精度が失われています。この改変版は乗算に用いる定数を小さくすることに
よって、乗算結果が52ビット以内に収まるようにしています。また、定数を小
さくしたことによる上位ビットへの影響の減少を補うために左シフトを追加し
ています。

To avoid feeling negative, the integer output is trimmed by 1 bit to
31 bits, and the double output is also created based on the integer
stripped by 1 bit.  Array initialization now accepts zero length
arrays and null strings.

ネガティブな気分にならないように、整数出力を1ビット削って31ビットにし、
double出力もその1ビット削った整数を元に作成しています。配列による初期
化は長さゼロの配列やヌル文字列も受け付けるようにしました。

Sample(Node.js):

```
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
```

functions:

* setSeed(number or array or string)
* getInt31() : returns a 31 bit unsigned integer.
* getInt(max) : returns a 31 bit unsigned integer r, 0 <= r < max.
* getDouble31() : returns a 31 bit precision double number r, 0 <= r < 1.0.
