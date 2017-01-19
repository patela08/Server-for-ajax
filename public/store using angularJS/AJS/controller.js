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
		if($scope.itemName  && $scope.itemDesc  && $scope.itemPrice  ){
		myFactory.postData({iName:$scope.itemName , iDesc:$scope.itemDesc , iPrc:$scope.itemPrice })
			.then(function (response){
				$scope.itName.splice(0,0,response);
				$scope.itemName = "";
				$scope.itemDesc = "";
				$scope.itemPrice = "";
				angular.element(document.querySelector("#myModal")).display;
				$scope.$parent.modal = "Product has been added successfully!";
			},function (err){
				$scope.$parent.modal = "There is an error while  posting the data on the server"
			});
		}
		else{
            $scope.$parent.modal = "Please fill the Form";
		}
	}

	$scope.rmv = function () {
		   var id = this.key;
			myFactory.removeData(this.val.id)
			.then(function(response){
				$scope.itName.splice(id,1);
                $scope.$parent.modal = "Product has  been removed successfully!!"
			},function(err){
				alert(err);
			});
	}
}]);