//Factory

app.factory("myFactory",['$http', '$q' ,function($http , $q ){
	var defer = false; 
	return{
		getData : function(){
			if(defer){
				return defer.promise;
			}
			else{
				defer = $q.defer();
				$http.get("/products")
				.success(function(res){
					defer.resolve(res);
				})
				.error(function(err,status){
					defer.reject(err);
				})
				return defer.promise;
			}
			
		},
		postData: function(data){
			defer = $q.defer();
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
			$http.delete("/products/"+id)
			
			return defer.promise;
		}
	}
}])