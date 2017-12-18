import Vue from 'vue';

if(process.BROWSER_BUILD) {
  const googleMaps = require('vue2-google-maps')
  Vue.use(googleMaps,{
    load: {
      key: 'AIzaSyDGm0HyxWE4hlnb-_7c-cX8Bfx7MpP7BXw'
    }
  })
}