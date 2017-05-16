$(document).ready(function() {

  var questions = [{
    question: "1. In what year did McDonald's start serving breakfast with the introduction of the Egg McMuffin?",
    choices: ["1999", "1986", "1972", "2002"],
    correctAnswer: 2
  }, {
    question: "2. Mr. Pibb was a soft drink created by the Coca-Cola Company to compete with what other soft drink?",
    choices: ["Sprite", "Fanta", "Dasani" , "Dr Pepper"],
    correctAnswer: 3
  }, {
    question: "3. What is the colloquial term for a rotating tray often often placed on a table to aid in distributing food?",
    choices: ["Lazy Susan", "Fat Tom", "Ugly Jimmy", "Basic Nancy"],
    correctAnswer: 0
  }, {
    question: "4. What popular soda beverage was originally developed as a mixer for whiskey?",
    choices: ["Pepsi", "Coke", "7 Up", "Mountain Dew"],
    correctAnswer: 3
  }, {
    question: "5. What was the original flavor of the filling in Twinkies?",
    choices: ["Banana", "Cream", "Banana Cream", "Olive"],
    correctAnswer: 2
  }, {
    question: "6. Pupusas, handmade thick stuffed corn tortillas, are a traditional dish from what country?",
    choices: ["Mexico", "Spain", "El Salvador", "United States"],
    correctAnswer: 2    
  }, {
    question: "7. The cooking technique that involves submerging food in a liquid at a relatively low temperature is called what? ",
    choices: ["Frying", "Poaching", "Grilling", "Microwaving"],
    correctAnswer: 1    
  }, {
    question: "8. In what type of restaurant would you typically find the condiment wasabi?",
    choices: ["Japanese", "Chinese", "African", "Indian"],
    correctAnswer: 0    
  }, {
    question: "9. In French cuisine, what is the name for the following: béchamel sauce, espagnole sauce, hollandaise sauce, tomato sauce, and velouté sauce?",
    choices: ["Father sauces", "Mother sauces", "Cousin sauces", "Ketchup"],
    correctAnswer: 1   
  }, {
    question: "10. What do the letters of the popular fast food chain KFC stand for?",
    choices: ["McDonald's", "Kennedy's Fried Chicken", "Kenya Fried Chicken", "Kentucky Fried Chicken"],
    correctAnswer: 3        
  }];
  
//displaying quiz
for (var i=0; i<questions.length; i++){
	$('#quiz').append('<br>'+'<p>'+questions[i].question+'</p>');
	for (var j=0;j<questions[i].choices.length; j++){
	 $('#quiz').append("<input type='radio' name='Q-"+i+"' value='"+questions[i].choices[j]+"'>"+questions[i].choices[j]+'<br>');
	}
}

//timer counter:
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
            result ();
        }
    }, 1000);

}

    var fiveMinutes = 60 * 5,
        display = $('#counter');
    startTimer(fiveMinutes, display);



 // Click handler for the 'Start Over' button
  $('#startover').click(function(){
	 location.reload()
  });


//=======divider=============
 //via video demo

var score={
 correct:0,
 incorrect:0,
};

function Userchoice(){
 $.each($("input[name='Q-0']:checked"), function(){

 		if($(this).val()==questions[0].correctAnswer){
 			 console.log(score.correct++);
 		} else {
 			score.incorrect++;
 		}
 	});
 $.each($("input[name='Q-1']:checked"), function(){

 		if($(this).val()==questions[1].correctAnswer){
 			correct++;
 		} else {
 			incorrect++;
 		}
 	});
 $.each($("input[name='Q-2']:checked"), function(){

 		if($(this).val()==questions[2].correctAnswer){
 			correct++;
 		} else {
 			incorrect++;
 		}
 	});
 $.each($("input[name='Q-3']:checked"), function(){

 		if($(this).val()==questions[3].correctAnswer){
 			correct++;
 		} else {
 			incorrect++;
 		}
 	});
 $.each($("input[name='Q-4']:checked"), function(){

 		if($(this).val()==questions[4].correctAnswer){
 			correct++;
 		} else {
 			incorrect++;
 		}
 	});
 $.each($("input[name='Q-5']:checked"), function(){

 		if($(this).val()==questions[5].correctAnswer){
 			correct++;
 		} else {
 			incorrect++;
 		}
 	});
 $.each($("input[name='Q-6']:checked"), function(){

 		if($(this).val()==questions[6].correctAnswer){
 			correct++;
 		} else {
 			incorrect++;
 		}
 	});
 $.each($("input[name='Q-7']:checked"), function(){

 		if($(this).val()==questions[7].correctAnswer){
 			correct++;
 		} else {
 			incorrect++;
 		}
 	});
 $.each($("input[name='Q-8']:checked"), function(){

 		if($(this).val()==questions[8].correctAnswer){
 			correct++;
 		} else {
 			incorrect++;
 		}
 	});
 $.each($("input[name='Q-9']:checked"), function(){

 		if($(this).val()==questions[9].correctAnswer){
 			correct++;
 		} else {
 			incorrect++;
 		}
 	});

 result();



};



	$('#submit').click(function result(){
		// alert("222");
	$('#counter').remove();
	$('b').remove();
	$('#quiz').remove();

	$('#quiz').html("<h3>Results:</h3>");
	$('#quiz').append("<h4>You got correct answers of "+score.correct+ "</h4>");
	$('#quiz').append("<h4>You got correct answers of "+score.incorrect+ "</h4>");

});



});
