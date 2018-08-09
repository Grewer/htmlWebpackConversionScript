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