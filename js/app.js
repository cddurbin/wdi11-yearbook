var app = angular.module('wdiYearbook', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/',{
      controller: 'StudentsController',
      templateUrl: '/templates/list.html'
    })
    .when('/students/:name',{
      controller: 'StudentsController',
      templateUrl: '/templates/detail.html'
    })
    .otherwise({
      redirectTo: '/'
    })
}]);

app.controller('StudentsController', function($scope, $routeParams){
  $scope.students = students;
  $scope.selectStudent = function(student){
    $scope.selectedStudent = student;
  }
  $scope.class = "hide";
  $scope.showMore = function() {
    if ($scope.class === "show")
      $scope.class = "hide";
    else
      $scope.class = "show";
  };
  $scope.closeModal = function() {
    $scope.class = "hide";
  }
  console.log($routeParams)
});






students = [{
  name: 'Kudus',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi error fuga quae. Sed labore praesentium, est commodi eum dolorem natus neque inventore a ipsam, excepturi iusto. Voluptatem beatae iure eius!',
  photo: 'images/kudus2.jpg',
  email: 'kudus@kudus.com',
  github: 'github.com/kudus'
},
{
  name: 'Colin',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi error fuga quae. Sed labore praesentium, est commodi eum dolorem natus neque inventore a ipsam, excepturi iusto. Voluptatem beatae iure eius!',
  photo: 'images/colin1.jpg',
  email: 'colin@colin.com',
  github: 'github.com/colin'
},
{
  name: 'Alex',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi error fuga quae. Sed labore praesentium, est commodi eum dolorem natus neque inventore a ipsam, excepturi iusto. Voluptatem beatae iure eius!',
  photo: 'images/alex1.jpg',
  email: 'alex@alex.com',
  github: 'github.com/alex'
},
{
  name: 'Allie',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi error fuga quae. Sed labore praesentium, est commodi eum dolorem natus neque inventore a ipsam, excepturi iusto. Voluptatem beatae iure eius!',
  photo: 'images/allie1.jpg',
  email: 'allie@allie.com',
  github: 'github.com/allie'
}]
