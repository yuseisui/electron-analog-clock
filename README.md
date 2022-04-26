# electron-analog-clock

> dead simpleなタスクトレイ常駐型アナログ時計

![スクリーンショット](screenshot.png)

## 起動

```bash
npm i
npm start
```

ビルド済みバイナリは配布してません。各自electron-builderなりelectron-forgeなりでパッケージングしてください。

Windows 10で動作確認済み。

JavaScriptは起動直後の針の位置合わせにだけ使用し、あとはCSSのanimationで動かしてるので動作は軽量かと。もしかしたら長時間動かしたときにずれてくるのかもしれない。

## ライセンス

[Mozilla Public License 2.0](LICENSE)
