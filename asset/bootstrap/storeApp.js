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
      tpl: homeFile,
      tplString: gsn.config.Home
    }, {
      login: 0,
      store: 0,
      layout: le[3],
      path: '/article',
      tpl: gsn.getThemeUrl('/views/engine/article.html'),
      tplMain: gsn.getThemeUrl('/views/engine/static-content.html')
    }, {
      login: 0,
      store: 0,
      layout: le[3],
      path: '/article/:id',
      tpl: gsn.getThemeUrl('/views/engine/article.html')
    }, {
      login: 0,
      store: 1,
      layout: lec,
      path: '/circular',
      tpl: gsn.getThemeUrl('/views/engine/circular-view-flyer.html'),
      tplMain: gsn.getThemeUrl('/views/engine/static-content.html')
    }, {
      login: 0,
      store: 1,
      layout: le[4],
      path: '/circular/grid',
      tpl: gsn.getThemeUrl('/views/engine/circular-view-grid.html'),
      tplMain: gsn.getThemeUrl('/views/engine/static-content.html')
    }, {
      login: 0,
      store: 1,
      layout: le[4],
      path: '/circular/text',
      tpl: gsn.getThemeUrl('/views/engine/circular-view-list.html'),
      tplMain: gsn.getThemeUrl('/views/engine/static-content.html')
    }, {
      login: 0,
      store: 0,
      layout: le[3],
      path: '/contactus',
      tpl: gsn.getThemeUrl('/views/engine/contact-us.html'),
      tplMain: gsn.getThemeUrl('/views/engine/static-content.html')
    }, {
      login: 0,
      store: 1,
      layout: le[3],
      path: '/coupons',
      tpl: gsn.getThemeUrl('/views/engine/coupons-printable.html'),
      tplMain: gsn.getThemeUrl('/views/engine/static-content.html')
    }, {
      login: 0,
      store: 1,
      layout: le[3],
      path: '/coupons/store',
      tpl: gsn.getThemeUrl('/views/engine/coupons-store.html'),
      tplMain: gsn.getThemeUrl('/views/engine/static-content.html')
    }, {
      login: 0,
      store: 0,
      layout: le[3],
      path: '/mealplannerfull',
      tpl: gsn.getThemeUrl('/views/engine/meal-planner.html'),
      tplMain: gsn.getThemeUrl('/views/engine/static-content.html')
    }, {
      login: 1,
      store: 0,
      layout: le[3],
      path: '/savedlists',
      tpl: gsn.getThemeUrl('/views/engine/saved-lists.html'),
      tplMain: gsn.getThemeUrl('/views/engine/static-content.html')
    }, {
      login: 0,
      store: 0,
      layout: le[3],
      path: '/mylist',
      tpl: gsn.getThemeUrl('/views/engine/shopping-list.html'),
      tplMain: gsn.getThemeUrl('/views/engine/static-content.html')
    }, {
      login: 0,
      store: 0,
      path: '/mylist/print',
      tpl: gsn.getThemeUrl('/views/engine/shopping-list-print.html'),
      tplMain: gsn.getThemeUrl('/views/engine/static-content.html')
    }, {
      login: 0,
      store: 0,
      layout: le[2],
      path: '/mylist/email',
      tpl: gsn.getThemeUrl('/views/engine/shopping-list-email.html'),
      tplMain: gsn.getThemeUrl('/views/engine/static-content.html')
    }, {
      login: 1,
      store: 0,
      layout: le[3],
      path: '/myrecipes',
      tpl: gsn.getThemeUrl('/views/engine/my-recipes.html'),
      tplMain: gsn.getThemeUrl('/views/engine/static-content.html')
    }, {
      login: 1,
      store: 0,
      path: '/profile',
      tpl: gsn.getThemeUrl('/views/engine/profile-edit.html'),
      tplMain: gsn.getThemeUrl('/views/engine/static-content.html')
    }, {
      login: 0,
      store: 0,
      layout: le[3],
      path: '/recipe/search',
      tpl: gsn.getThemeUrl('/views/engine/recipe-search.html'),
      tplMain: gsn.getThemeUrl('/views/engine/static-content.html')
    }, {
      login: 0,
      store: 0,
      layout: le[2],
      path: '/recipe',
      tpl: gsn.getThemeUrl('/views/engine/recipe-details.html'),
      tplMain: gsn.getThemeUrl('/views/engine/static-content.html')
    }, {
      login: 0,
      store: 0,
      layout: le[2],
      path: '/recipe/:id',
      tpl: gsn.getThemeUrl('/views/engine/recipe-details.html')
    }, {
      login: 0,
      store: 0,
      layout: le[2],
      path: '/recipecenter',
      tpl: gsn.getThemeUrl('/views/engine/recipe-center.html'),
      tplMain: gsn.getThemeUrl('/views/engine/static-content.html')
    }, {
      login: 0,
      store: 0,
      layout: le[3],
      path: '/recipevideo',
      tpl: gsn.getThemeUrl('/views/engine/recipe-video.html'),
      tplMain: gsn.getThemeUrl('/views/engine/static-content.html')
    }, {
      login: 0,
      store: 0,
      layout: le[3],
      path: '/recipevideo/:id',
      tpl: gsn.getThemeUrl('/views/engine/recipe-video.html')
    }, {
      login: 0,
      store: 0,
      path: '/registration',
      tpl: gsn.getThemeUrl('/views/engine/registration.html'),
      tplMain: gsn.getThemeUrl('/views/engine/static-content.html')
    }, {
      login: 0,
      store: 0,
      path: '/registration/facebook',
      tpl: gsn.getThemeUrl('/views/engine/registration.html'),
      tplMain: gsn.getThemeUrl('/views/engine/static-content.html')
    }, {
      login: 0,
      store: 0,
      layout: le[3],
      path: '/signin',
      tpl: gsn.getThemeUrl('/views/engine/signin.html'),
      tplMain: gsn.getThemeUrl('/views/engine/static-content.html')
    }, {
      login: 0,
      store: 0,
      layout: le[1],
      path: '/store/:id',
      tpl: gsn.getThemeUrl('/views/engine/store-info.html')
    }, {
      login: 0,
      store: 0,
      layout: le[2],
      path: '/storelocator',
      tpl: gsn.getThemeUrl('/views/engine/store-locator.html'),
      tplMain: gsn.getThemeUrl('/views/engine/static-content.html')
    }, {
      login: 0,
      store: 0,
      layout: le[3],
      path: '/unsubscribe',
      tpl: gsn.getThemeUrl('/views/engine/unsubscribe.html'),
      tplMain: gsn.getThemeUrl('/views/engine/static-content.html')
    }, {
      login: 0,
      store: 0,
      layout: le[2],
      path: '/applyJob',
      tpl: gsn.getThemeUrl('/views/engine/employment-apply.html'),
      tplMain: gsn.getThemeUrl('/views/engine/static-content.html')
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
