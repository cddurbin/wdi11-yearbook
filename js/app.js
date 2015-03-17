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
},
{
  name: 'Chris',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi error fuga quae. Sed labore praesentium, est commodi eum dolorem natus neque inventore a ipsam, excepturi iusto. Voluptatem beatae iure eius!',
  photo: 'images/chris1.jpg',
  email: 'chris@chris.com',
  github: 'github.com/chris'
},
{
  name: 'Iain',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi error fuga quae. Sed labore praesentium, est commodi eum dolorem natus neque inventore a ipsam, excepturi iusto. Voluptatem beatae iure eius!',
  photo: 'images/iain3.jpg',
  email: 'iain@iain.com',
  github: 'github.com/iain'
},
{
  name: 'Jack',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi error fuga quae. Sed labore praesentium, est commodi eum dolorem natus neque inventore a ipsam, excepturi iusto. Voluptatem beatae iure eius!',
  photo: 'images/jack1.jpg',
  email: 'jack@jack.com',
  github: 'github.com/jack'
},
{
  name: 'James',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi error fuga quae. Sed labore praesentium, est commodi eum dolorem natus neque inventore a ipsam, excepturi iusto. Voluptatem beatae iure eius!',
  photo: 'images/james1.jpg',
  email: 'james@james.com',
  github: 'github.com/james'
},
{
  name: 'Lauren',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi error fuga quae. Sed labore praesentium, est commodi eum dolorem natus neque inventore a ipsam, excepturi iusto. Voluptatem beatae iure eius!',
  photo: 'images/lauren1.jpg',
  email: 'lauren@lauren.com',
  github: 'github.com/lauren'
},
{
  name: 'Mary',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi error fuga quae. Sed labore praesentium, est commodi eum dolorem natus neque inventore a ipsam, excepturi iusto. Voluptatem beatae iure eius!',
  photo: 'images/mary1.jpg',
  email: 'mary@mary.com',
  github: 'github.com/mary'
},
{
  name: 'Mat',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi error fuga quae. Sed labore praesentium, est commodi eum dolorem natus neque inventore a ipsam, excepturi iusto. Voluptatem beatae iure eius!',
  photo: 'images/mat1.jpg',
  email: 'mat@mat.com',
  github: 'github.com/mat'
},
{
  name: 'Natalie',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi error fuga quae. Sed labore praesentium, est commodi eum dolorem natus neque inventore a ipsam, excepturi iusto. Voluptatem beatae iure eius!',
  photo: 'images/nat1.jpg',
  email: 'nat@nat.com',
  github: 'github.com/natalie'
},
{
  name: 'Nathan',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi error fuga quae. Sed labore praesentium, est commodi eum dolorem natus neque inventore a ipsam, excepturi iusto. Voluptatem beatae iure eius!',
  photo: 'images/nathan1.jpg',
  email: 'nathan@nathan.com',
  github: 'github.com/nathan'
},
{
  name: 'Ollie',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi error fuga quae. Sed labore praesentium, est commodi eum dolorem natus neque inventore a ipsam, excepturi iusto. Voluptatem beatae iure eius!',
  photo: 'images/ollie1.jpg',
  email: 'ollie@ollie.com',
  github: 'github.com/ollie'
},
{
  name: 'Paul',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi error fuga quae. Sed labore praesentium, est commodi eum dolorem natus neque inventore a ipsam, excepturi iusto. Voluptatem beatae iure eius!',
  photo: 'images/paul1.jpg',
  email: 'paul@paul.com',
  github: 'github.com/paul'
},
{
  name: 'Tolu',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi error fuga quae. Sed labore praesentium, est commodi eum dolorem natus neque inventore a ipsam, excepturi iusto. Voluptatem beatae iure eius!',
  photo: 'images/tolu1.jpg',
  email: 'tolu@tolu.com',
  github: 'github.com/tolu'
},
{
  name: 'Vinisha',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi error fuga quae. Sed labore praesentium, est commodi eum dolorem natus neque inventore a ipsam, excepturi iusto. Voluptatem beatae iure eius!',
  photo: 'images/vinisha1.jpg',
  email: 'vinisha@vinisha.com',
  github: 'github.com/vinisha'
}]
