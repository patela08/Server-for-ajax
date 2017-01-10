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