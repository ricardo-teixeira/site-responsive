var App = angular.module('App', ['ngRoute', 'ngAnimate']);

App.config(['$routeProvider', function($routeProvider) {

  $routeProvider
  .when('/home', {
    templateUrl: 'views/home.html'
  })
  .when('/menu', {
    templateUrl: 'views/menu.html'
  })
  .when('/reservas', {
    templateUrl: 'views/reservation.html',
    controller: 'contactController'
  })
  .when('/contato', {
    templateUrl: 'views/contact.html',
    controller: 'contactController'
  })
  .when('/contato-sucesso', {
    templateUrl: 'views/contact-success.html'
  })
  .when('/sobre', {
    templateUrl: 'views/about.html'
  })
  .otherwise({
    redirectTo: '/home'
  });

}]);

App.controller('contactController', ['$scope', '$location', function($scope, $location){
  $scope.handleSubmit = function () {
    $location.path('contato-sucesso');
  };
}]);

App.directive('burgerNav', [function(){
  return {
    restrict: 'AC',
    link: function (scope, elem) {
      var $menu = $('header nav ul');

      elem.on('click', function () {
        $menu.toggleClass('open');
      });

      $('header nav ul li a').on('click', function () {
        $menu.removeClass('open');
      });
    }
  }
}]);

$('document').ready(function () {
  angular.bootstrap(document, ['App']);
});
