FoorumApp.controller('UsersController', function($scope, $location, Api){
	
	$scope.login = function() {
		if ($scope.user) {
			Api.login($scope.user)
				.success(function(user) {
					console.log(user);
					$location.path('/');
				})
				.error(function(response) {
					$scope.error = response.error;
				});
		}
	}
	
	$scope.register = function() {
		if ($scope.newUser) {
			if ($scope.newUser.password === $scope.newUser.passwordConfirmation) {
				Api.register($scope.newUser)
					.success(function(user){
						console.log(user);
						$location.path('/login');
					})
					.error(function(response) {
						$scope.error = response.error;
					});
			} else {
				$scope.error = 'Salasana ja vahvistus eivät täsmää!';
			}
		}
	}

});
