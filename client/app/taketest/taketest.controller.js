	'use strict';

	angular.module('mathsgymnasiamApp')
	  .controller('TakeTestCtrl', function ($scope, Auth, TakeATestSvc) {


	$scope.exam_questions = [];
  	$scope.dependentquestions = [];
	$scope.dependentquestions.answers = [];

	$scope.answers = [];
	$scope.dependentanswers = [];

	TakeATestSvc.fetch().success(function (exam_questions) {
					$scope.exam_questions = exam_questions;
					$scope.basicfact = exam_questions[0].basicfact;
					$scope.part = exam_questions[0].part;
					$scope.problem = exam_questions[0].problem;
					$scope._questionid = exam_questions[0]._id;
					$scope.explanation = exam_questions[0].explanation;

	  var 	currentuser = Auth.getCurrentUser()._id;
	  var username = Auth.getCurrentUser().name;
	  var useremail = Auth.getCurrentUser().email;
	  var userid = Auth.getCurrentUser()._id;
	  var grade = Auth.getCurrentUser().grade;

	  console.log('in fetch currentuser :'+currentuser);
				  console.log(' in fetch name :'+Auth.getCurrentUser().name);
				  console.log(' in fetch email :'+Auth.getCurrentUser().email);
				  console.log('in fetch Auth.getCurrentUser() :'+Auth.getCurrentUser());
				console.log('in fetch $scope._questionid :'+$scope._questionid);

					$scope.userid = userid;
					$scope.username = username;
					$scope.useremail = useremail;
					console.log('grade in fetch :'+grade);
					$scope.grade = grade;

					console.log('answer 1 :'+exam_questions[0].answer[0].answer);
					console.log('answer 2 :'+exam_questions[0].answer[1].answer);
					console.log('answer 3 :'+exam_questions[0].answer[2].answer);
					console.log('answer 4 :'+exam_questions[0].answer[3].answer);

					$scope.answerA = exam_questions[0].answer[0].answer;
					$scope.answerB = exam_questions[0].answer[1].answer;
					$scope.answerC = exam_questions[0].answer[2].answer;
					$scope.answerD = exam_questions[0].answer[3].answer;

					$scope.dependentquestionpart = exam_questions[0].dependentquestion[0].part;
					$scope.dependentquestionproblem = exam_questions[0].dependentquestion[0].problem;
					$scope.dependentexplanation = exam_questions[0].dependentquestion[0].problem;

					$scope.dependentAnswerA = exam_questions[0].dependentquestion[0].answer[0].answer;
					$scope.dependentAnswerB = exam_questions[0].dependentquestion[0].answer[1].answer;
					$scope.dependentAnswerC = exam_questions[0].dependentquestion[0].answer[2].answer;
					$scope.dependentAnswerD = exam_questions[0].dependentquestion[0].answer[3].answer;

					$scope.index = 0;

				});

		  $scope.submit = function(Auth) {

			var examquestion;

			/* var 	currentuser = Auth.getCurrentUser()._id;
				 console.log('currentuser :'+currentuser);
				  console.log('name :'+Auth.getCurrentUser().name);
				  console.log('email :'+Auth.getCurrentUser().email);
				  console.log('Auth.getCurrentUser() :'+Auth.getCurrentUser()); */
				console.log('$scope._questionid :'+$scope._questionid);
				console.log('$scope.dependentanswer :'+$scope.dependentanswer);
				console.log('$scope.answer :'+$scope.answer);
  				console.log('$scope.grade :'+$scope.grade);
				console.log('$scope.explanation :'+$scope.explanation);

		  /*TakeATestSvc.fetchquestion($scope._id).success(function (exam_question) {

			  examquestion =  exam_question;
		   } */

				 TakeATestSvc.create({
						_questionid: $scope._questionid,
						primaryanswer:$scope.answer,
						dependentanswer:$scope.dependentanswer,
						grade:$scope.grade,
						userid:$scope.userid,
						username:$scope.username,
						useremail:$scope.useremail,
						primaryexplanation:$scope.explanation
					  })
					  .success(function (exam_question) {
						
					  });
			  
					
		  };	//top addQuestions
	  });


	  angular.module('mathsgymnasiamApp').service('TakeATestSvc', function ($http) {
		  this.fetch = function (takeatest) {
			return $http.get('/api/examquestionss');
		  };
		
		 this.create = function (takeatest) {
			 console.log('In Create');
 			 console.log(takeatest);

			return $http.post('/api/takeatest', takeatest);
		  }; 

		
		  this.fetchquestion = function (takeatest, id) {
			return $http.get('/api/examquestionss/'+id);
		  }
	});