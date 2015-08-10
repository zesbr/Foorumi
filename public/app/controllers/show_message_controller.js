FoorumApp.controller('ShowMessageController', function($scope, $routeParams, Api){
	$scope.newReply = {};
	Api.getMessage($routeParams.id).success(function(message) {
		console.log(message);
		$scope.message = message;
	})

	$scope.addReply = function() {
		if ($scope.message && $scope.newReply) {
			var messageId = $scope.message.id;
			var newReply = $scope.newReply;
			Api.addReply(newReply, messageId).success(function(reply) {
				$scope.newReply = {};
				$scope.message.Replies.push(reply);
			});
		}
	}

});
