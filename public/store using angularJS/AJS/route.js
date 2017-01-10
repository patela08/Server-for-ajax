// Routing

app.config(function ($routeProvider){
	$routeProvider

	.when('/' , {
		templateUrl : 'home.html',
		controller : 'myCtrl'
	})

	.when('/about', {
		templateUrl: 'about.html',
		controller : 'myCtrl'
	})

	.when('/catalog', {
		templateUrl: 'catalog.html',
		controller: 'myCtrl'
	})

	.when('/contact', {
		templateUrl:'contact.html',
		controller: 'myCtrl'
	})

	.otherwise({ redirectTo : '/'});
});