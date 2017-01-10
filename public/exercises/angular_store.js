// Module
var  app = angular.module('myApp', ['ngRoute']);

// Routing

app.config(function ($routeProvider){
	$routeProvider

	.when('/home' , {
		templateUrl : 'Templates/home.html',
		controller : 'myCtrl'
	})

	.when('/about', {
		templateUrl: 'Templates/about.html',
		controller : 'myCtrl'
	})

	.when('/catalog', {
		templateUrl: 'Templates/catalog.html',
		controller: 'myCtrl'
	})

	.when('/contact', {
		templateUrl:'Templates/contact.html',
		controller: 'myCtrl'
	})

	.otherwise({ redirectTo : '/home'});
});

//Factory

app.factory("myFactory",['$http', '$q' ,function($http , $q ){
	return{
		getData : function(){
			var defer = $q.defer();
			$http.get("/products")
			.success(function(res){
				defer.resolve(res);
			})
			.error(function(err,status){
				defer.reject(err);
			})
			return defer.promise;
		},
		postData: function(data){
			var defer = $q.defer();
			$http.post("/products", data)
			.success(function(res){
				defer.resolve(res);
			})
			.error(function(err,status){
				defer.reject(err);
			})
			return defer.promise;
		},
		removeData : function(id){	
			var defer = $q.defer();
			$http.delete("/products/"+id)
			.success(function(res){
				defer.resolve(res);
			})
			.error(function (res) {
				defer.reject(res);
			})
			return defer.promise;
		}
	}
}])
// Controller
app.controller("myCtrl", ["$scope" ,"myFactory" , function ($scope, myFactory){
	
	$scope.getAllData = function(){
		myFactory.getData()
		.then(function (response){
			$scope.itName = response;	
		},function (err){
			alert(err);
		});
    };
    $scope.getAllData();
	$scope.clicked = function(){
		myFactory.postData({iName:$scope.itemName , iDesc:$scope.itemDesc , iPrc:$scope.itemPrice })
			.then(function (response){
				
				$scope.itemName = "";
				$scope.itemDesc = "";
				$scope.itemPrice = "";
				$scope.getAllData();
			},function (err){
				alert(err);
			});
	}

	$scope.rmv = function () {
		    
			myFactory.removeData(this.x.id)
			.then(function(response){
				$scope.getAllData();
			},function(err){
				alert(err);
			});
	}
}]);
