var storeApp = angular
  .module('storeApp', ['infinite-scroll', 'ngRoute', 'ngSanitize', 'ngAnimate', 'ngTouch', 'chieffancypants.loadingBar', 'gsn.core', 'ui.map', 'ui.keypress', 'ui.event', 'ui.utils', 'angulartics'])
  .config(['$routeProvider', function($routeProvider) {
    // disable theme
    gsn.config.SiteTheme = 'bootstrap';
    gsn.config.defaultMobileListView = true;

    var homeFile = '/proxy/content/homemeta/' + gsn.config.ChainId + '/?meta=home&nocache=' + gsn.config.Version;
    var urls = [{
      login: 0,
      store: 0,
      path: '/',
      tplString: gsn.config.Home
    }, {
      login: 0,
      store: 1,
      path: '/circular',
      tpl: gsn.getThemeUrl('/views/engine/static-content.html')
    }, {
      login: 0,
      store: 1,
      path: '/circular/grid',
      tpl: gsn.getThemeUrl('/views/engine/static-content.html')
    }, {
      login: 0,
      store: 1,
      path: '/circular/text',
      tpl: gsn.getThemeUrl('/views/engine/static-content.html')
    }, {
      login: 0,
      store: 1,
      path: '/coupons/store',
      tpl: gsn.getThemeUrl('/views/engine/static-content.html')
    }, {
      login: 1,
      store: 0,
      path: '/profile',
      tpl: gsn.getThemeUrl('/views/engine/static-content.html')
    }];

    angular.forEach(urls, function(v, k) {
      $routeProvider.when(v.path, {
        templateUrl: v.tpl,
        template: v.tplString,
        caseInsensitiveMatch: true,
        storeRequired: v.store,
        requireLogin: v.login,
        controller: v.controller
      });
    });

    $routeProvider.when('/coupons/printable', {
      redirectTo: '/coupons',
      caseInsensitiveMatch: true
    });
    $routeProvider.when('/circulars', {
      redirectTo: '/circular',
      caseInsensitiveMatch: true
    });
    $routeProvider.when('/circulars/:id/:page', {
      redirectTo: '/circular',
      caseInsensitiveMatch: true
    });
    $routeProvider.when('/account/login', {
      redirectTo: '/profile',
      caseInsensitiveMatch: true
    });
    $routeProvider.when('/account/manage', {
      redirectTo: '/profile',
      caseInsensitiveMatch: true
    });
    $routeProvider.when('/recipecenter/recipevideo', {
      redirectTo: '/recipevideo',
      caseInsensitiveMatch: true
    });

    $routeProvider.otherwise({
      templateUrl: gsn.getThemeUrl('/views/engine/static-content.html'),
      caseInsensitiveMatch: true
    });
  }]);
