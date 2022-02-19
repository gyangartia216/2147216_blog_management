angular.module('myapp',['ngRoute'])
.config(function($routeProvider)
{
    $routeProvider.when('/home',
    {
        templateUrl:'home.html',
        controller:'homecntrl'}).when('/home/:first/:last',
        {
            templateUrl:'home.html',
            controller:'homecntrl'
        }).when('/about',
        {
            templateUrl:'about.html',
            controller:'aboutcntrl'
        }).when('/items',
        {
            templateUrl:'items.html',
            controller:'itemcntrl'
        })
})
.controller('mycntrl',function()
{

})
.controller("homecntrl",function($scope,$routeParams)
{
    $scope.message="Hey There";
    if($routeParams.first&&$routeParams.last){
        $scope.person={
            first:$routeParams.first,
            last:$routeParams.last
        };
    }

})
.controller("aboutcntrl",function($scope,$http){    
    $http.get('https://gyangartia216.github.io/2147216_blog_management/feed.json')    
    .success(function(data){    
      $scope.item = data;  
     
      $http.get('https://gyangartia216.github.io/2147216_blog_management/feed.json')
        //$http.get('feed.json')
        .success(function(response)
        {
            $scope.feed = response;
        });  
    })    
    .error(function(data,status){    
      console.error('Fail to load data', status, data);    
      $scope.item = { };     
    });    
})
.controller("itemcntrl",function($scope,$http)
{    
    $http.get('https://gyangartia216.github.io/2147216_blog_management/feed.json')    
    .success(function(data){    
      $scope.item = data;    
     
      $http.get('https://gyangartia216.github.io/2147216_blog_management/feed.json')
        //$http.get('feed.json')
        .success(function(response)
        {
            $scope.feed = response;
        });
    })    
    .error(function(data,status){    
      console.error('Fail to load data', status, data);    
      $scope.item = { };     
    });    
  })
  .filter("priceEqual",function()
  {
      return function(input,option)
      {
          if(isNaN(option) ||(option == ""))
          {
              return input;
          }
          else
          {
          return input.substring(0,option).toUpperCase();
      }}
  })
 .controller("galleryctr",function($scope)
{
    $scope.pic1 = "images/11.jpg";
    $scope.pic2 = "images/22.jpg";
    $scope.pic3 = "images/33.jpg";
    $scope.pic4 = "images/44.jpg";
    $scope.pic5 = "images/55.jpg";
    $scope.pic6 = "images/66.jpg";
});
  
  ; 
