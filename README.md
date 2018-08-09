## html-webpack-conversion-script

### Dependencies

- html-webpack-plugin
- preload-webpack-plugin


### Why do you need this plugin?

After using the preload-webpack-plugin to generate the preload tag, his location is in the head. When there are too many tags, or when you need to load some images, they will block their loading.

### Usage

```bash
npm i -D html-webpack-conversion-script
```

```js
const htmlWebpackConversionPlugin = require('../index')

plugins: [
      new htmlWebpackConversionPlugin()
    ]
```

### Effect

before:
```html
<!DOCTYPE html>
<html lang=en>
<head>
    <meta charset=utf-8>
    <meta http-equiv=X-UA-Compatible content="IE=edge">
    <meta name=viewport content="width=device-width,initial-scale=1">
    <link rel=icon href=favicon.ico>
    <title>example</title>
    <link href=chunk-1ac0.d76baec2.css rel=prefetch>
    <link href=chunk-7228.7aa09004.css rel=prefetch>
    <link href=js/chunk-1ac0.167fbccb.js rel=prefetch>
    <link href=js/chunk-7228.82a36c56.js rel=prefetch>
    <link href=app.572a9c0c.css rel=preload as=style>
    <link href=js/app.a508b7a1.js rel=preload as=script>
    <link href=js/chunk-vendors.f061f10e.js rel=preload as=script>
    <link href=app.572a9c0c.css rel=stylesheet>
</head>
<body>
<noscript><strong>We're sorry but example doesn't work properly without JavaScript enabled. Please enable it to
    continue.</strong></noscript>
<div id=app></div>
<script src=js/chunk-vendors.f061f10e.js></script>
<script src=js/app.a508b7a1.js></script>
</body>
</html>
```

after:
```html
<!DOCTYPE html>
<html lang=en>
<head>
    <meta charset=utf-8>
    <meta http-equiv=X-UA-Compatible content="IE=edge">
    <meta name=viewport content="width=device-width,initial-scale=1">
    <link rel=icon href=favicon.ico>
    <title>example</title>
    <link href=app.572a9c0c.css rel=preload as=style>
    <link href=js/app.a508b7a1.js rel=preload as=script>
    <link href=js/chunk-vendors.f061f10e.js rel=preload as=script>
    <link href=app.572a9c0c.css rel=stylesheet>
</head>
<body>
<noscript><strong>We're sorry but example doesn't work properly without JavaScript enabled. Please enable it to
    continue.</strong></noscript>
<div id=app></div>
<script src=js/chunk-vendors.f061f10e.js></script>
<script src=js/app.a508b7a1.js></script>
<link href=chunk-1ac0.d76baec2.css rel=prefetch>
<link href=chunk-7228.7aa09004.css rel=prefetch>
<link href=js/chunk-1ac0.167fbccb.js rel=prefetch>
<link href=js/chunk-7228.82a36c56.js rel=prefetch>
</body>
</html>
```