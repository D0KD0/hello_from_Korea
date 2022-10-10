var question = document.getElementById('subject');
var body = document.getElementById('description');
var btn = document.querySelector('.btn');
var score = 0;


var timer = document.createElement('time');
var timeRemain = 100;

var quizResult = document.createElement('div');



function countdown() {
    var timerInterval = setInterval(function() {
    timeRemain --;
    timer.textContent = 'Time Left : ' + timeRemain;
    document.body.appendChild(timer);

    if(timeRemain <= 0)  {
        timeRemain = 0;
        timer.textContent = 'Time Left : ' + timeRemain;
        clearInterval(timerInterval);
        inputName();
    } else if (score == 3) {
        clearInterval(timerInterval);
    }
}, 1000);
}

function quizResult () {

    quizResult.correct = 'correct';
    quizResult.incorrect = 'wrong';
}

var ol = document.createElement('ol');

var choice1 = document.createElement('li');
var choice2 = document.createElement('li');
var choice3 = document.createElement('li');
var choice4 = document.createElement('li');


//quiz
btn.addEventListener ('click', function () {
    countdown();

    question.textContent = 'Where is capital of South Korea?';
    body.textContent = '';

        choice1.textContent = 'Seoul';
        choice2.textContent = 'Daegu';
        choice3.textContent = 'Busan';
        choice4.textContent = 'Pohang';

    document.body.children[1].appendChild(ol);
    document.body.children[1].children[0].appendChild(choice1);
    document.body.children[1].children[0].appendChild(choice2);
    document.body.children[1].children[0].appendChild(choice3);
    document.body.children[1].children[0].appendChild(choice4);

    btn.remove();   
    var li = document.querySelectorAll('li');

    for(i=0; i<li.length; i++){
        var eachli = li[i]
            li[i].addEventListener('click', function (event) {
                event.preventDefault();
    
                if(event.target.textContent = 'Seoul') {
                    score ++;
                    quizTwo();
                } else {
                    timeRemain -= 10;
                }
            })
    };


    // quiz2
    function quizTwo() {

        question.textContent = 'What is national flower of South Korea?';
        body.textContent = '';

            choice1.textContent = 'Jangmi';
            choice2.textContent = 'Mugunghwa';
            choice3.textContent = 'Tulip';
            choice4.textContent = 'Lily';

        document.body.children[1].appendChild(ol);
        document.body.children[1].children[0].appendChild(choice1);
        document.body.children[1].children[0].appendChild(choice2);
        document.body.children[1].children[0].appendChild(choice3);
        document.body.children[1].children[0].appendChild(choice4);

        var li = document.querySelectorAll('li');

        for(i=0; i<li.length; i++){
            var eachli = li[i]
                li[i].addEventListener('click', function (event) {
                    event.preventDefault();
        
                    if(event.target.textContent = 'Mugunghwa') {
                        score ++;
                        quizLast();
                    } else {
                        timeRemain -= 10;
                    }
                })
        };
    };
    
    // quiz3
   function quizLast(){
        question.textContent = 'What is the first flag of South Korea?';
        body.textContent = '';

        choice1.textContent = 'Sungjogi';
        choice2.textContent = 'Mangukgi';
        choice3.textContent = 'Taegeukgi';
        choice4.textContent = 'Gwangbokgi';

        document.body.children[1].appendChild(ol);
        document.body.children[1].children[0].appendChild(choice1);
        document.body.children[1].children[0].appendChild(choice2);
        document.body.children[1].children[0].appendChild(choice3);
        document.body.children[1].children[0].appendChild(choice4);

        var li = document.querySelectorAll('li');

        for(i=0; i<li.length; i++){
        var eachli = li[i]
            li[i].addEventListener('click', function (event) {
                event.preventDefault();
                if((event.target.textContent = 'Taegeukgi') && (timeRemain>0)) {
                    score ++;
                    inputName();
                }
            });
        }
    };

    var label = document.createElement('label');
    var input = document.createElement('input');


    function inputName (){
        question.textContent = 'All done!';
        body.textContent = "Your final score is " + timeRemain +'.';

        label.textContent = 'Enter initial: ';
        input.setAttribute('width', '20%');
        document.body.appendChild(label).appendChild(input);
        
        var submitbtn = document.createElement('button');
        submitbtn.textContent = "Submit";
        document.body.appendChild(submitbtn);
        
        submitbtn.addEventListener ('click', function(){
            localStorage.setItem("name", input.value);
            localStorage.setItem("score", timeRemain);
            submitbtn.remove();
            finalscore();
        });
    }


    function finalscore () {
        var playerScore = localStorage.getItem("score");
        var playerName = localStorage.getItem("name");

        input.textContent = "";
        label.textContent = "";
        body.textContent = "";  

        question.textContent = 'Highscores';


        var scoreboard = document.createElement('li');
        scoreboard.textContent = playerName + ' - ' + playerScore;

        document.body.append(scoreboard);


        var clearbtn = document.createElement('button');
        var goBackbtn = document.createElement('button');

        clearbtn.textContent = 'Clear score';
        goBackbtn.textContent = 'Restart'

        document.body.appendChild(clearbtn);
        document.body.appendChild(goBackbtn);

        clearbtn.addEventListener('click', function() {
            scoreboard.remove();
        });

        goBackbtn.addEventListener('click', function(){
            location.reload()}
            );
    }



})
