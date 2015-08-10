FoorumApp.controller('ShowTopicController', function($scope, $routeParams, $location, Api){
  $scope.newMessage = {};
  Api.getTopic($routeParams.id).success(function(topic) {
    console.log(topic);
  	$scope.topic = topic;
  });

  $scope.addMessage = function() {
  	if ($scope.topic && $scope.newMessage) {
  		var topicId = $scope.topic.id;
  		var newMessage = $scope.newMessage;
  		Api.addMessage(newMessage, topicId).success(function(message) {
  			$scope.newMessage = {};
  			$location.path('messages/' + message.id);
  		});
  	}
  }

});
