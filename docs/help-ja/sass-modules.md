[English](../help/sass-modules.md) / 日本語

# Sassパーシャルモジュールを作成する

[Sass公式ガイド](http://sass-lang.com/guide#topic-4)にあるように、`_`プリフィックス付きのSassファイルはパーシャルモジュールとして扱われます。  
パーシャルのSassファイルは単体ではCSSファイルに変換されません。
パーシャルは`@import`専用です。

**例:**

```
styles/main.scss
styles/_partial.scss
styles/components/core.scss
styles/components/_another-partial.scss
styles/components/_one-more-partial.scss
```

↓ コンパイル後

```
styles/main.css
styles/components/core.css
```

## 関連項目
- [CSS/Sassライブラリを使用する](css-libraries.md)
