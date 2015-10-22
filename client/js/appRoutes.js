/**
 * Created by kevin
 * Description:
 */

angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider

    // home page
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'MainController'
    })

    // nerds page that will use the NerdController
    .when('/nerds', {
      templateUrl: 'views/nerd.html',
      controller: 'NerdController'
    })

    // nerds page that will use the NerdController
    .when('/yahoo', {
      templateUrl: 'views/yahoo.html',
      controller: 'YahooController'
    });

  $locationProvider.html5Mode(true);

}]);