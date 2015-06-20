	'use strict';

	angular.module('mathsgymnasiamApp')
	  .controller('ContactUsCtrl', function ($scope, Auth, ContactUsSvc) {

		  var currentuser= '';

		

		  $scope.submit = function() {
				if ($scope.firstname) {
					currentuser = Auth.getCurrentUser()._id;
				 console.log('currentuser :'+currentuser);
				  console.log('name :'+Auth.getCurrentUser().name);
				  console.log('email :'+Auth.getCurrentUser().email);
				  console.log('Auth.getCurrentUser() :'+Auth.getCurrentUser());

			//	   Auth.getCurrentUser().then(function(result){
			  // do something with result; result should be your currentUser
				//console.log('reslt :'+result);
			 //});
	
					 ContactUsSvc.create({
						firstname: $scope.firstname,
						lastname:$scope.lastname,
						username:$scope.username,
						emailid:$scope.emailid,
						remarks:$scope.remarks
					  })
					  .success(function (exam_question) {
						$scope.remarks = null
						$scope.firstname = null
						$scope.lastname = 'Select'
						$scope.username = 'Select'
						$scope.emailid = null
						$scope.remarks = null
					  });
				}
		  };	//top addQuestions
	  });


	  angular.module('mathsgymnasiamApp').service('ContactUsSvc', function ($http) {
	  this.create = function (contactus) {
		return $http.post('/api/contactus', contactus)
	  };
	});