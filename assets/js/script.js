// start variables clarification
var question = document.getElementById('title');
var body = document.getElementById('description');
var btn = document.querySelector('button');
var score = 0;


// timer clarification
var timer = document.createElement('timer');
var timeRemain = 100;

function startTimer() {
    var timerInterval = setInterval(function() {
    timeRemain --;
    timer.textContent = 'Time Left : ' + timeRemain + ' sec';
    document.body.appendChild(timer);

    if(timeRemain <= 0)  {
        timer.textContent = 'Time Left : ' + timeRemain + ' sec';
        clearInterval(timerInterval);
        inputName();
    } else if (score == 3) {
        clearInterval(timerInterval);
    }
  }, 1000);
}

// list clarification
var ol = document.createElement('ol');
    var choice1 = document.createElement('li');
    var choice2 = document.createElement('li');
    var choice3 = document.createElement('li');
    var choice4 = document.createElement('li');


// quiz clarification
btn.addEventListener ('click', function () {
    startTimer();

    // quiz 1
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

            if(event.target.textContent == choice1.textContent) {
                score ++;
                quizTwo();
            } else {
                timeRemain -= 10;
                
            }

        })
    };
});


    // quiz 2
    function quizTwo(){

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

                if((event.target.textContent == choice2.textContent) && (timeRemain > 0)) {
                    score ++;
                    quizThree();
                } else {
                    timeRemain -= 10;
                }
                
            });
        }
    };
    
    

    // quiz3
    function quizThree(){

        question.textContent = 'Which King invented Hangul?';
    
        body.textContent = '';    
            choice1.textContent = 'Youngjo';
            choice2.textContent = 'Gwanghaegun';
            choice3.textContent = 'Seongjong';
            choice4.textContent = 'Sejong';
    
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
    
                if((event.target.textContent == choice4.textContent) && (timeRemain > 0)) {
                    score ++;
                    inputName();
                } else if ((event.target.textContent != choice4.textContent) && (timeRemain > 0)) {
                    timeRemain -= 10;
                }
            })
        }
    };

    // result submission
    var label = document.createElement('label');
    var input = document.createElement('input');

    function inputName (){
        question.textContent = 'All done!';
        body.textContent = "Your final score is " +timeRemain +' seond(s).';
        
        label.textContent = 'Enter your initial: ';
        input.setAttribute('width', '40%');
        document.body.appendChild(label).appendChild(input);

        var submitbtn = document.createElement('button');
        submitbtn.textContent = "Submit";
        document.body.appendChild(submitbtn);
        
        submitbtn.addEventListener ('click', function(){
            localStorage.setItem("initial", input.value);
            localStorage.setItem("score", timeRemain);
            submitbtn.remove();
            quizSummary();
        });
    }


    function quizSummary () {
        var timeResult = localStorage.getItem("score");
        var myinitial = localStorage.getItem("initial");

        input.textContent = "";
        label.textContent = "";
        body.textContent = "";  

        question.textContent = 'Records';

        var scoreboard = document.createElement('score');
        scoreboard.textContent = myinitial + ' - ' + timeResult + ' second(s)';

        document.body.append(scoreboard);

        var clearbtn = document.createElement('button');
        var gotobackbtn = document.createElement('button');

        clearbtn.textContent = 'Clear';
        gotobackbtn.textContent = 'Restart';

        document.body.appendChild(clearbtn);
        document.body.appendChild(gotobackbtn);

        clearbtn.addEventListener('click', function() {
            scoreboard.remove();
        });

        gotobackbtn.addEventListener('click', function(){
            location.reload()
            resetStatus();}
            );
    }

    function resetStatus() {
        clearStatusClass(document.body);
    }

    function clearStatusClass (element) {
        element.classList.remove('correct');
        element.classList.remove('wrong');
    }