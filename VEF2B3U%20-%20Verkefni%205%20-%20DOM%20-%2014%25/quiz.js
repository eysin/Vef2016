if (true) {

"use strict";
var selector = 0;
var stig = 0;
// Gögnin, Array af objectum, þarf að bæta við fleiri objectum
function Question(question, choices, correctAnswer) {
	this.question = question;
	this.choices = choices;
	this.correctAnswer = correctAnswer;

}
function randomize(){
	selector = Math.floor((Math.random() * questions.length));

}
var questions = [];
questions.push(new Question("Who is Prime Minister of the United Kingdom", [ "David Cameron", "Gordon Brown", "Winston Churchill","Tony Blair"], 0));
questions.push(new Question("Who hosts the Tv show, Kitchen Nightmares", [ "Ainsley Harriot", "Jamie Oliver", "Gordon Ramsay","Gordon Brown"], 2));
questions.push(new Question("Who is the hero in the famous video game Zelda", [ "Zelda", "Link", "Lonk","Ocarina"], 1));
questions.push(new Question("Stock Question2", [ "incorrect", "correct", "incorrect"], 1));
questions.push(new Question("Stock Question1", [ "correctt", "incorrect", "incorrect","incorrect"], 0));
questions.push(new Question("Stock Question3", [ "incorrect", "incorrect", "correct","incorrect"], 2));
questions.push(new Question("Stock Question4", [ "incorrect", "incorrect", "incorrect","correct"], 3));


function checkAnswer(choice){
	if (questions[selector].correctAnswer === choice) {alert("Correct!!!"); loadQuestion(); stig++;}
	else { alert("Incorrect!!"); }
}
function loadQuestion(){
	var questionDiv = document.getElementById("choices");
	while(questionDiv.hasChildNodes()){
		questionDiv.removeChild(questionDiv.lastChild);

	}
	randomize();

	document.getElementById("question").innerHTML = questions[selector].question;
	document.title = stig + " Stig";
	for (var i = 0; i < questions[selector].choices.length; i++) {
		//document.getElementById("choice" + (i + 1)).innerHTML = questions[selector].choices[i];	
		var makeDiv = document.createElement('div');
		makeDiv.id = "choice" + i;
		makeDiv.className = "option";
		makeDiv.innerHTML = questions[selector].choices[i];
		makeDiv.setAttribute("onclick", "checkAnswer("+i+")");
		document.getElementById("choices").appendChild(makeDiv);


	}
}
loadQuestion();
}

// Upphafstilling.
	// breytur fyrir t.d. teljara, score og spurningar 
	// DOM elements, ná í reference í HTML og setja í breytur nota t.d. getElementsById() 
	// Raða spurningum í fylkinu allQuestions.
	// Geyma: Kóði sem hlustar á atburði (t.d. mús, lyklaborð)
 
// render/Update fall.
	//  nota t.d. innerHTML eða búa til DOM elements.
	//  hreinsa út skjá,
	//  loada inn gögnin (spurningar, svarmöguleika)
	//  Geyma: Uppfæra telja, score

//  Hjálparföll/undirföll.
	//	fall fyrir random/shuffle (upphafstilla röðun spurningar)
	//	fall sem hreinsar út skjá?
	//	Geyma: fall til að athuga svar  
	//  Geyma: fall fyrir lokaskor
	//	Geyma: athuga svarmöguleika (rétt svar)
	
