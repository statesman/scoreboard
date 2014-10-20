require.config({
  shim: {
    'add-to-home-screen': {
      exports: 'addToHomescreen'
    },
    handlebars: {
      exports: 'Handlebars'
    },
    store: {
      exports: 'store'
    },
    iosOverlay: {
      exports: 'iosOverlay'
    }
  },
  paths: {
    backbone: '../../bower_components/backbone/backbone',
    underscore: '../../bower_components/underscore/underscore',
    handlebars: '../../bower_components/handlebars/handlebars.runtime',
    jquery: '../../bower_components/jquery/dist/jquery',
    moment: '../../bower_components/moment/moment',
    helpers: '../templates/helpers',
    Templates: '../../build/templates',
    store: '../../bower_components/store/store',
    'add-to-home-screen': '../../bower_components/add-to-homescreen/src/addtohomescreen',
    Spinner: '../../bower_components/spin.js/spin',
    iosOverlay: '../../bower_components/iOS-Overlay/js/iosOverlay',
    scrollto: '../../bower_components/jquery-scrollto/lib/jquery-scrollto'
  },
  config: {
    moment: {
      noGlobal: true
    }
  }
});
