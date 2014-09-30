require.config({
  shim: {
    'add-to-home-screen': {
      exports: 'addToHomescreen'
    },
    'handlebars': {
      exports: 'Handlebars'
    },
    'store': {
      exports: 'store'
    }
  },
  paths: {
    backbone: '../bower_components/backbone/backbone',
    underscore: '../bower_components/underscore/underscore',
    handlebars: '../bower_components/handlebars/handlebars.runtime',
    jquery: '../bower_components/jquery/dist/jquery',
    moment: '../bower_components/moment/moment',
    helpers: 'templates/helpers',
    Templates: '../build/templates',
    store: '../bower_components/store/store',
    'add-to-home-screen': '../bower_components/add-to-homescreen/src/addtohomescreen'
  },
  config: {
    moment: {
      noGlobal: true
    }
  }
});
