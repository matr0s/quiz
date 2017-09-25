//
//
//var years = [1990, 1965, 1937, 2005, 1998];
//
//function arrayCalc(arr, fn) {
//    var arrRes = [];
//    for (var i = 0; i < arr.length; i++) {
//        arrRes.push(fn(arr[i]));
//    }
//    return arrRes;
//}
//
//function calculateAge (el) {
//    return 2016 - el;
//}
//
//function isFullAges (el) {
//    return el >= 18;
//}
//
//function maxHeartRate (el) {
//    if (el >=18 && el <= 81) {
//    return Math.round(206.9 - (0.67 * el));
//    } else {
//        return -1;
//    }
//
//}
//
//var ages = arrayCalc(years, calculateAge);
//var fullAges = arrayCalc(ages, isFullAges);
//var heartRate = arrayCalc(ages, maxHeartRate);
//
//console.log(ages);
//console.log(fullAges);
//console.log(heartRate);

//
/*
function game () {
    var score = Math.random() * 10;
    console.log(score >= 5);
}

game();

(function() {
 var score = Math.random() * 10;
    console.log(score >= 5);
})();

//console.log(score);

(function(goodLuck) {
 var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);

*/

///////////////
/*
function retirement (retirementAge) {
    var a = " Some text here";
    return function(yearOfBirth) {
        var age = 2017 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUA = retirement(65);
retirementUA(1982);

retirement(70)(1996);

function interview(job) {
    return function (name) {
        if (job === 'teacher') {
            console.log(name + ' you are ' + job);
        } else if (job === 'designer') {
            console.log(name + ' you are ' + job);
        } else {
            console.log(name + ' you are ' + job);
        }
    }
}

interview('designer')('Serg');

*/
////Quiz game

function Questions(question, answer, correct) {
    this.question = question;
    this.answer = answer;
    this.correct = correct;
}

var question1 = new Questions('DOIT the best company ever', '0-No', 0);
var question2 = new Questions('DOIT the best company', '0-No', 0);
var question3 = new Questions('DOIT the best', '1yes', 1);
var allQuestions = [question1, question2, question3];


function askUser() {

    var questionNumber = allQuestions[Math.floor(Math.random() * 3)];
    console.log(questionNumber.question);
    console.log(questionNumber.answer);

    var infoFromUser = prompt('Please answer: ' + (questionNumber.question), '');

    if (infoFromUser == questionNumber.correct) {
        console.log('Correct answer is ' + questionNumber.answer);
    } else {
        console.log('You are looser!');
    }

}

askUser();










