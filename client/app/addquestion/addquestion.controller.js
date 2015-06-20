	'use strict';

	angular.module('mathsgymnasiamApp')
	  .controller('AddQuestionCtrl', function ($scope, ExamSvc) {
		 

		  $scope.addQuestions = function() {
				if ($scope.questiontype) {
			console.log('$scioe.user :'+$scope.user);
					 ExamSvc.create({
						id: $scope.id,
						basicfact: $scope.basicfact,
						questiontype:$scope.questiontype,
						grade:$scope.grade,
						part:$scope.part,
						problem:$scope.problem,
						answer:$scope.answers,
						explanation:$scope.explanation,
						dependentquestion:$scope.dependentquestions
					  })
					  .success(function (exam_question) {
						$scope.exam_questions.unshift(exam_question)
						$scope.id = null
						$scope.basicfact = null
						$scope.questiontype = 'Select'
						$scope.grade = 'Select'
						$scope.part = null
						$scope.problem = null
						$scope.explanation = null
					  });
				}
				 ExamSvc.fetch().success(function (exam_questions) {
					$scope.exam_questions = exam_questions
				});
		  };	//top addQuestions

		   $scope.addDependentQuestions = function() {

			    alert('1');
			   document.getElementById('dependentquestion').style.display = "none";

				$scope.dependentanswers.push({answerid:$scope.dependentquestionanswersfirstanswerid,
						answertype:$scope.dependentquestionanswersfirstanswertype,
						answer:$scope.dependentquestionanswersfirstanswer});

				$scope.dependentanswers.push({answerid:$scope.dependentquestionanswerssecondanswerid,
						answertype:$scope.dependentquestionsecondanswertype,
						answer:$scope.dependentquestionsecondanswer});

				$scope.dependentanswers.push({answerid:$scope.dependentquestionthirdanswerid,
						answertype:$scope.dependentquestionthirdanswertype,
						answer:$scope.dependentquestionthirdanswer});

				$scope.dependentanswers.push({answerid:$scope.dependentquestionforthanswerid,
						answertype:$scope.dependentquestionforthanswertype,
						answer:$scope.dependentquestionforthanswer});

				$scope.dependentquestions.push({type: $scope.dependentquestion.type,
						part: $scope.dependentquestion.part,
						problem: $scope.dependentquestion.problem,
						explanation: $scope.dependentquestion.explanation,
						answer: $scope.dependentanswers
					});

				console.log('Answer Depn array length :'+$scope.dependentanswers.length);
		  }
			
		   $scope.addAnswers = function() {

			    console.log('I am at AddAnswers');
				alert('1');
			  console.log('answersfirstanswerid :'+$scope.answersfirstanswerid);
				console.log('answersfirstanswerid :'+$scope.answersfirstanswertype);
				console.log('answersfirstanswerid :'+$scope.answersfirstanswer);

				$scope.answers.push({answerid:$scope.answersfirstanswerid,
						answertype:$scope.answersfirstanswertype,
						answer:$scope.answersfirstanswer});

				console.log('answerssecondanswerid :'+$scope.answerssecondanswerid);
				console.log('answerssecondanswertype :'+$scope.answerssecondanswertype);
				console.log('answerssecondanswer :'+$scope.answerssecondanswer);

				$scope.answers.push({answerid:$scope.answerssecondanswerid,
						answertype:$scope.answerssecondanswertype,
						answer:$scope.answerssecondanswer});

				console.log('answersthirdanswerid :'+$scope.answersthirdanswerid);
				console.log('answersthirdanswertype :'+$scope.answersthirdanswertype);
				console.log('answersthirdanswer :'+$scope.answersthirdanswer);


				$scope.answers.push({answerid:$scope.answersthirdanswerid,
						answertype:$scope.answersthirdanswertype,
						answer:$scope.answersthirdanswer});

				console.log('answersforthanswerid :'+$scope.answersforthanswerid);
				console.log('answersforthanswertype :'+$scope.answersforthanswertype);
				console.log('answersforthanswer :'+$scope.answersforthanswer);


				$scope.answers.push({answerid:$scope.answersforthanswerid,
						answertype:$scope.answersforthanswertype,
						answer:$scope.answersforthanswer})

				console.log('Answer array length :'+$scope.answers.length);

		  }

		  $scope.showDependentQuestionsSubForm = function() {	

		  console.log('I am at showDependentQuestionsSubForm');
			document.getElementById('dependentquestion').style.display = "block";
			}

			$scope.hideDependentQuestionsSubForm = function() {	
			  console.log('I am at hideDependentQuestionsSubForm');
				document.getElementById('dependentquestion').style.display = "none";
			}

			$scope.exam_questions = [];
  			$scope.dependentquestions = [];
			$scope.dependentquestions.answers = [];

			$scope.answers = [];
			$scope.dependentanswers = [];


		


	  });


	  angular.module('mathsgymnasiamApp').service('ExamSvc', function ($http) {
			this.fetch = function () {
		return $http.get('/api/examquestionss');
	  }
	  this.create = function (exam_question) {
		  console.log('in create exam_question answer :'+exam_question.answer.length);
		  console.log('in create exam_question answer :'+exam_question.answer[0].answerid);
		  console.log('in create exam_question answer :'+exam_question.answer[0].answertype);
		  console.log('in create exam_question answer :'+exam_question.answer[0].answer);

		return $http.post('/api/examquestionss', exam_question)
	  };
	});