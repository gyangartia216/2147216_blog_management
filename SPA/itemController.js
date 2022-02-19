/*var itemAppModule = angular.module("itemApp", [])    
.filter("namefilter",function()
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
    });
   

 itemAppModule.controller("itemCtrl", function ($scope,$http) {    
   $http.get('https://gyangartia216.github.io/2147216_blog_management/feed.json')    
   //$http.get('item.json')    
   .success(function(data){    
     $scope.item = data;    
   })    
   .error(function(data,status){    
     console.error('Fail to load data', status, data);    
     $scope.item = { };     
   });    
 });    */
