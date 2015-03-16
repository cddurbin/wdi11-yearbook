var app = angular.module('wdiYearbook', []);

app.controller('StudentsController', function($scope){
  $scope.students = students;
  $scope.selectStudent = function(student){
    $scope.selectedStudent = student;
  }
});






students = [{
  name: 'Kudus',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi error fuga quae. Sed labore praesentium, est commodi eum dolorem natus neque inventore a ipsam, excepturi iusto. Voluptatem beatae iure eius!',
  photo: 'images/Cute-Babies.jpg',
  email: 'kudus@kudus.com',
  github: 'github.com/kudus'
},
{
  name: 'Colin',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi error fuga quae. Sed labore praesentium, est commodi eum dolorem natus neque inventore a ipsam, excepturi iusto. Voluptatem beatae iure eius!',
  photo: 'images/Cute-Babies.jpg',
  email: 'colin@colin.com',
  github: 'github.com/colin'
},
{
  name: 'Betty',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi error fuga quae. Sed labore praesentium, est commodi eum dolorem natus neque inventore a ipsam, excepturi iusto. Voluptatem beatae iure eius!',
  photo: 'images/Cute-Babies.jpg',
  email: 'betty@betty.com',
  github: 'github.com/betty'
},
{
  name: 'Allie',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi error fuga quae. Sed labore praesentium, est commodi eum dolorem natus neque inventore a ipsam, excepturi iusto. Voluptatem beatae iure eius!',
  photo: 'images/Cute-Babies.jpg',
  email: 'allie@allie.com',
  github: 'github.com/allie'
}]