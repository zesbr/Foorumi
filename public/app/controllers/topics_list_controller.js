FoorumApp.controller('TopicsListController', function($scope, $location, Api){
  $scope.newTopic = {};
  Api.getTopics().success(function(topics) {
  	console.log(topics);
		$scope.topics = topics;
  });

  $scope.addTopic = function() {
    
  	if ($scope.newTopic) {
  		Api.addTopic($scope.newTopic).success(function(topic) {
        
  			console.log(topic);
  			$location.path('/topics/' + topic.id);
  		}).error(function() {
        console.log("pieleen :/");
      });
  	} else {
      console.log("nope");
    }
  }

});
