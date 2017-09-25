//////////////////////////////////////////

var questionsArray = [], userAnswer, randomQuestion, question0, question1, question2, question3;
//// Question protorype
var Question = function (question, answers, correctAnswer){
 this.question = question;
 this.answers = answers;
 this.correctAnswer = correctAnswer;
}

Question.prototype.questionPrint = function() {
 		console.log('Question #' + (randomQuestion+1) + ': ' + this.question);
 		for (var j = 0; j < this.answers.length; j++) {
			console.log(this.answers[j]);
		}
 }

Question.prototype.compareAnswer = function(){
if (userAnswer == this.correctAnswer) {
	console.log('Correct answer. My congratulations!');
} else {
	console.log('Wrong answer. Looks like You are loooooser!!!');
}
}


questionsInit();
questionsArray[randomQuestion].questionPrint();
userAnswer = prompt('Please input your answer (number) or type "exit" to quit');
questionsArray[randomQuestion].compareAnswer();




///FUNCTIONS///

function questionsInit() {
/// List with questions
question0 = new Question('Do you see this question?', ['0: Yes', '1: No', '2: Hz'], 0);
question1 = new Question('Whos is developer here?', ['0: Petro', '1: Serhii', '2: Hz'], 1);
question2 = new Question('Just another question with correct ansfer "Hz"', ['0: Yes', '1: Hz'], 1);
question3 = new Question('What is DOIT?', ['0: Dev Company', '1: Nike Moto', '2: Hz'], 0);
/// Array with questions creation
for (var i = 0; i <= 3; i++) {
	questionsArray.push(window['question'+i]);
}
/// Get random question
randomQuestion = Math.round((Math.random() * (questionsArray.length-1)));
}

console.log(randomQuestion);
