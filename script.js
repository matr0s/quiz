
(function(){
//// Question protorype
var Question = function (question, answers, correctAnswer){
 this.question = question;
 this.answers = answers;
 this.correctAnswer = correctAnswer;
}

Question.prototype.questionPrint = function() {
 	console.log('Question: ' + this.question);
 	for (var j = 0; j < this.answers.length; j++) {
		console.log(j + ': ' + this.answers[j]);
		}
}

Question.prototype.compareAnswer = function(ua, callback){
	var sc;
	if (ua === this.correctAnswer) {
		console.log('Correct answer. My congratulations!');
		sc = callback(true);
	} else {
		console.log('Wrong answer. Looks like You are loooooser!!!');
		sc = callback(false);
		}
	this.displayScore(sc);
}

Question.prototype.displayScore = function(score) {
	console.log('Your total score is: ' + score);
	console.log('=============================================');
}

/// Init
var q0 = new Question('Do you see this question?', ['Yes', 'No', 'Hz'], 0);
var q1 = new Question('Whos is developer here?', ['Petro', 'Serhii', 'Hz'], 1);
var q2 = new Question('Just another question with correct ansfer "Hz"', ['Yes', 'Hz', 'Hzzz'], 1);
var q3 = new Question('What is DOIT?', ['Dev Company', 'Nike Moto', 'Hz'], 0);
var questionsArray = [q0, q1, q2, q3];

////Main block with code execution here
var keepScore = score();
randomQuestion();

/// FUNCTIONS
function randomQuestion() {
	var n = Math.floor((Math.random() * (questionsArray.length)));
	questionsArray[n].questionPrint();	
	var userAnswer = prompt('Please input your answer (number) or type "exit" to quit');
		if (userAnswer !== 'exit') {
			questionsArray[n].compareAnswer(parseInt(userAnswer), keepScore);
			randomQuestion();	
			}
}

function score() {
	var sc = 0;
	return function (correct) {
		if (correct) {
			sc++;
		}
	return sc;
	}
}
})();
