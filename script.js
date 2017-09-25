
(function(){

//// Question protorype
var Question = function (question, answers, correctAnswer){
 this.question = question;
 this.answers = answers;
 this.correctAnswer = correctAnswer;
}

Question.prototype.questionPrint = function() {
 		console.log('Question #' + (n+1) + ': ' + this.question);
 		for (var j = 0; j < this.answers.length; j++) {
			console.log(j + ': ' + this.answers[j]);
		}
 }

Question.prototype.compareAnswer = function(){
if (userAnswer === this.correctAnswer) {
	console.log('Correct answer. My congratulations!');
} else {
	console.log('Wrong answer. Looks like You are loooooser!!!');
}
}
/// Init
var q0 = new Question('Do you see this question?', ['Yes', 'No', 'Hz'], 0);
var q1 = new Question('Whos is developer here?', ['Petro', 'Serhii', 'Hz'], 1);
var q2 = new Question('Just another question with correct ansfer "Hz"', ['Yes', 'Hz'], 1);
var q3 = new Question('What is DOIT?', ['Dev Company', 'Nike Moto', 'Hz'], 0);
/// Array with questions creation
var questionsArray = [q0, q1, q2, q3];

/// Get random question
var n = Math.floor((Math.random() * (questionsArray.length)));
questionsArray[n].questionPrint();

////Main block with code execution here
var userAnswer = parseInt(prompt('Please input your answer (number) or type "exit" to quit'));
questionsArray[n].compareAnswer();

})();
