const isProdMode = Object.is(process.env.NODE_ENV, 'production')
module.exports = {
  baseUrl: isProdMode ? 'http://eds.ingping.net/api' : 'http://eds.ingping.net/api',
  prefixImg: isProdMode ? 'http://eds-img.ingping.net/' : 'http://eds-img.ingping.net/'
}

