var storeApp = angular
  .module('storeApp', ['infinite-scroll', 'ngRoute', 'ngSanitize', 'ngAnimate', 'ngTouch', 'chieffancypants.loadingBar', 'gsn.core', 'ui.map', 'ui.keypress', 'ui.event', 'ui.utils', 'angulartics'])
  .config(['$routeProvider', function($routeProvider) {
    // disable theme
    gsn.config.SiteTheme = 'bootstrap';

    var layout = gsn.getThemeUrl('/views/layout2-1.html');
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
      path: '/article',
      tpl: gsn.getThemeUrl('/views/engine/article.html')
    }, {
      login: 0,
      store: 0,
      path: '/article/:id',
      tpl: gsn.getThemeUrl('/views/engine/article.html')
    }, {
      login: 0,
      store: 1,
      layout: layout,
      path: '/circular',
      tpl: gsn.getThemeUrl('/views/engine/circular-view-flyer.html')
    }, {
      login: 0,
      store: 1,
      layout: layout,
      path: '/circular/grid',
      tpl: gsn.getThemeUrl('/views/engine/circular-view-grid.html')
    }, {
      login: 0,
      store: 1,
      layout: layout,
      path: '/circular/text',
      tpl: gsn.getThemeUrl('/views/engine/circular-view-list.html')
    }, {
      login: 0,
      store: 0,
      path: '/contactus',
      tpl: gsn.getThemeUrl('/views/engine/contact-us.html')
    }, {
      login: 0,
      store: 1,
      path: '/coupons',
      tpl: gsn.getThemeUrl('/views/engine/coupons-printable.html')
    }, {
      login: 0,
      store: 1,
      path: '/coupons/store',
      tpl: gsn.getThemeUrl('/views/engine/coupons-store.html')
    }, {
      login: 0,
      store: 0,
      path: '/mealplannerfull',
      tpl: gsn.getThemeUrl('/views/engine/meal-planner.html')
    }, {
      login: 1,
      store: 0,
      path: '/savedlists',
      tpl: gsn.getThemeUrl('/views/engine/saved-lists.html')
    }, {
      login: 0,
      store: 0,
      path: '/mylist',
      tpl: gsn.getThemeUrl('/views/engine/shopping-list.html')
    }, {
      login: 0,
      store: 0,
      path: '/mylist/print',
      tpl: gsn.getThemeUrl('/views/engine/shopping-list-print.html')
    }, {
      login: 0,
      store: 0,
      path: '/mylist/email',
      tpl: gsn.getThemeUrl('/views/engine/shopping-list-email.html')
    }, {
      login: 1,
      store: 0,
      path: '/myrecipes',
      tpl: gsn.getThemeUrl('/views/engine/my-recipes.html')
    }, {
      login: 1,
      store: 0,
      path: '/profile',
      tpl: gsn.getThemeUrl('/views/engine/profile-edit.html')
    }, {
      login: 0,
      store: 0,
      path: '/recipe/search',
      tpl: gsn.getThemeUrl('/views/engine/recipe-search.html')
    },
	{
		login: 0,
		store: 0,
		path: '/recipesearch',
		tpl: gsn.getMetaUrl('')
	},{
      login: 0,
      store: 0,
      path: '/recipe',
      tpl: gsn.getThemeUrl('/views/engine/recipe-details.html')
    }, {
      login: 0,
      store: 0,
      path: '/recipe/:id',
      tpl: gsn.getThemeUrl('/views/engine/recipe-details.html')
    }, {
      login: 0,
      store: 0,
      path: '/recipecenter',
      tpl: gsn.getThemeUrl('/views/engine/recipe-center.html')
    }, {
      login: 0,
      store: 0,
      path: '/recipevideo',
      tpl: gsn.getThemeUrl('/views/engine/recipe-video.html')
    }, {
      login: 0,
      store: 0,
      path: '/recipevideo/:id',
      tpl: gsn.getThemeUrl('/views/engine/recipe-video.html')
    }, {
      login: 0,
      store: 0,
      path: '/registration',
      tpl: gsn.getThemeUrl('/views/engine/registration.html')
    }, {
      login: 0,
      store: 0,
      path: '/registration/facebook',
      tpl: gsn.getThemeUrl('/views/engine/registration.html')
    }, {
      login: 0,
      store: 0,
      path: '/signin',
      tpl: gsn.getThemeUrl('/views/engine/signin.html')
    }, {
      login: 0,
      store: 0,
      path: '/store/:id',
      tpl: gsn.getThemeUrl('/views/engine/store-info.html')
    }, {
      login: 0,
      store: 0,
      path: '/storelocator',
      tpl: gsn.getThemeUrl('/views/engine/locations.html')
    }, {
      login: 0,
      store: 0,
      path: '/unsubscribe',
      tpl: gsn.getThemeUrl('/views/engine/unsubscribe.html')
    }];

    angular.forEach(urls, function(v, k) {
      $routeProvider.when(v.path, {
        templateUrl: gsn.getThemeUrl('/views/engine/static-content.html'),
        notFoundLayout: v.tpl,
        template: v.tplString,
        caseInsensitiveMatch: true,
        storeRequired: v.store,
        requireLogin: v.login,
        controller: v.controller,
        layout: v.layout
      });
    });

    $routeProvider.when('/coupons/printable', {
      redirectTo: '/coupons',
      caseInsensitiveMatch: true
    });
    $routeProvider.when('/circular/list', {
      redirectTo: '/circular/text',
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
