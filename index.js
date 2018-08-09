function htmlWebpackConversionPlugin() {
  this.saveScript = []
}


htmlWebpackConversionPlugin.prototype.apply = function (compiler) {

  function changeScript(htmlPluginData, callback) {
    var html = htmlPluginData.html
    var headPosi = html.indexOf('</title>')
    head = html.substr(0, headPosi + 8)
    html = html.substr(headPosi + 8);

    html = filter.call(this, html), l = this.saveScript.length

    console.log(this.saveScript)
    if (l) {
      var body = html.indexOf('</body>')
      while (l--) {
        html = html.substr(0, body) + this.saveScript[l] + html.substr(body)
      }
    }
    htmlPluginData.html = head + html
    callback(null, htmlPluginData)
  }

  function filter(html) {
    var result = html.match(/<link.+?rel=prefetch.+?>/)
    if (result) {
      var start = result.index, leng = result[0].length
      this.saveScript.push(html.substr(start, leng))
      html = html.substr(0, result.index) + html.substr(start + leng)
      return filter.call(this, html)
    }
    return html
  }


  var self = this

  if (compiler.hooks) {
    // webpack 4 support
    compiler.hooks.compilation.tap('htmlWebpackConversionPlugin', (compilation) => {
      compilation.hooks.htmlWebpackPluginAfterHtmlProcessing.tapAsync(
        'htmlWebpackConversionPlugin', changeScript.bind(self)
      )
    })
  } else {
    compiler.plugin('compilation', (compilation) => {
      compilation.plugin('html-webpack-plugin-after-html-processing', changeScript.bind(self));
    });
  }

}

module.exports = htmlWebpackConversionPlugin
