// Routing

app.config(function ($routeProvider){
	$routeProvider

	.when('/' , {
		templateUrl : './templates/home.html',
		controller : 'myCtrl'
	})

	.when('/about', {
		templateUrl: './templates/about.html',
		controller : 'myCtrl'
	})

	.when('/catalog', {
		templateUrl: './templates/catalog.html',
		controller: 'myCtrl'
	})

	.when('/contact', {
		templateUrl:'./templates/contact.html',
		controller: 'myCtrl'
	})

	.otherwise({ redirectTo : '/'});
});