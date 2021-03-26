var questions = [
    {
        question:"Who contributed the concept of natural theology in western thought?",
        a_answer:"Seneca",
        b_answer:"Epictetus",
        c_answer:"Saint Thomas Aquinas",
        d_answer:"Parmenides",
        answer:"c"
    },
    {
        question:"Who is the founder of Western Philosophy?",
        a_answer:"Rene Descartes",
        b_answer:"Socrates",
        c_answer:"Plato",
        d_answer:"Thomas Aquinas",
        answer:"b"
    },
    {
        question:"Who is recognized as \"Father of Analytical Geometry\"?",
        a_answer:"Pierre de Fermat",
        b_answer:"Archimedes",
        c_answer:"Rene Descartes",
        d_answer:"Pythagoras",
        answer:"c"
    },
    {
        question:"What is the name of the school that Plato established?",
        a_answer:"Academy of Philosophers",
        b_answer:"School of Athens",
        c_answer:"Academy of Athens",
        d_answer:"School for Philosophers of Athens",
        answer:"a"
    },
    {
        question:"Plato's greatest student was ",
        answer:"aristotle"
    },
    {
        question:"A greek philosopher of 1st and early 2nd centuries C.E, and an exponent of ",
        answer:"stoic ethics"
    },
    {
        question:" is a Chinese teacher, writer and philosopher. He viewed himself as a channel for the theological ideas and values of the imperial dynasties that came before him. One of his Key works is \"The Analects\", a book which composed of a large collection of sayings and ideas.",
        answer:"confucius"
    },
    {
        question:"Aristotle was also a ",
        question2:", which led him to consider an enormous array of topics.",
        answer:"scientist"
    }
]

function smallDevices(x) {
    if (x.matches) { 
      document.getElementById("screen1").innerHTML = "Q1";
      document.getElementById("screen2").innerHTML = "Q2";
      document.getElementById("screen3").innerHTML = "Q3";
      document.getElementById("screen4").innerHTML = "Q4";
      document.getElementById("screen5").innerHTML = "Q5";
      document.getElementById("screen6").innerHTML = "Q6";
      document.getElementById("screen7").innerHTML = "Q7";
      document.getElementById("screen8").innerHTML = "Q8";
      document.getElementById("screenend").innerHTML = "End";
    } else {
      document.getElementById("screen1").innerHTML = "Question 1";
      document.getElementById("screen2").innerHTML = "Question 2";
      document.getElementById("screen3").innerHTML = "Question 3";
      document.getElementById("screen4").innerHTML = "Question 4";
      document.getElementById("screen5").innerHTML = "Question 5";
      document.getElementById("screen6").innerHTML = "Question 6";
      document.getElementById("screen7").innerHTML = "Question 7";
      document.getElementById("screen8").innerHTML = "Question 8";
      document.getElementById("screenend").innerHTML = "End of Quiz";
    }
  }
  
  var x = window.matchMedia("(max-width: 767px)")
  smallDevices(x);
  x.addListener(smallDevices)

  firstQuestion();


function firstQuestion(){
    document.querySelectorAll(".question-container h1")[0].innerHTML = questions[0].question;
    document.querySelectorAll(".question-container a")[0].innerHTML = questions[0].a_answer;
    document.querySelectorAll(".question-container a")[1].innerHTML = questions[0].b_answer;
    document.querySelectorAll(".question-container a")[2].innerHTML = questions[0].c_answer;
    document.querySelectorAll(".question-container a")[3].innerHTML = questions[0].d_answer;
    document.querySelectorAll(".question-container")[0].classList.remove("remove");
    document.querySelectorAll(".question2-container")[0].classList.add("remove");
    document.querySelectorAll(".question3-container")[0].classList.add("remove");
    document.querySelectorAll(".question4-container")[0].classList.add("remove");
    document.querySelectorAll(".question5-container")[0].classList.add("remove");
    document.querySelectorAll(".question6-container")[0].classList.add("remove");
    document.querySelectorAll(".question6-container")[0].classList.add("remove");
    document.querySelectorAll(".question8-container")[0].classList.add("remove");
}

function secondQuestion(){
    document.querySelectorAll(".question2-container h1")[0].innerHTML = questions[1].question;
    document.querySelectorAll(".question2-container a")[0].innerHTML = questions[1].a_answer;
    document.querySelectorAll(".question2-container a")[1].innerHTML = questions[1].b_answer;
    document.querySelectorAll(".question2-container a")[2].innerHTML = questions[1].c_answer;
    document.querySelectorAll(".question2-container a")[3].innerHTML = questions[1].d_answer;
    document.querySelectorAll(".question2-container")[0].classList.remove("remove");
    document.querySelectorAll(".question-container")[0].classList.add("remove");
    document.querySelectorAll(".question3-container")[0].classList.add("remove");
    document.querySelectorAll(".question4-container")[0].classList.add("remove");
    document.querySelectorAll(".question5-container")[0].classList.add("remove");
    document.querySelectorAll(".question6-container")[0].classList.add("remove");
    document.querySelectorAll(".question7-container")[0].classList.add("remove");
    document.querySelectorAll(".question8-container")[0].classList.add("remove");
}

function thirdQuestion(){
    document.querySelectorAll(".question3-container h1")[0].innerHTML = questions[2].question;
    document.querySelectorAll(".question3-container a")[0].innerHTML = questions[2].a_answer;
    document.querySelectorAll(".question3-container a")[1].innerHTML = questions[2].b_answer;
    document.querySelectorAll(".question3-container a")[2].innerHTML = questions[2].c_answer;
    document.querySelectorAll(".question3-container a")[3].innerHTML = questions[2].d_answer;
    document.querySelectorAll(".question3-container")[0].classList.remove("remove");
    document.querySelectorAll(".question-container")[0].classList.add("remove");
    document.querySelectorAll(".question2-container")[0].classList.add("remove");
    document.querySelectorAll(".question4-container")[0].classList.add("remove");
    document.querySelectorAll(".question5-container")[0].classList.add("remove");
    document.querySelectorAll(".question6-container")[0].classList.add("remove");
    document.querySelectorAll(".question7-container")[0].classList.add("remove");
    document.querySelectorAll(".question8-container")[0].classList.add("remove");
}

function fourthQuestion(){
    document.querySelectorAll(".question4-container h1")[0].innerHTML = questions[3].question;
    document.querySelectorAll(".question4-container a")[0].innerHTML = questions[3].a_answer;
    document.querySelectorAll(".question4-container a")[1].innerHTML = questions[3].b_answer;
    document.querySelectorAll(".question4-container a")[2].innerHTML = questions[3].c_answer;
    document.querySelectorAll(".question4-container a")[3].innerHTML = questions[3].d_answer;
    document.querySelectorAll(".question4-container")[0].classList.remove("remove");
    document.querySelectorAll(".question-container")[0].classList.add("remove");
    document.querySelectorAll(".question2-container")[0].classList.add("remove");
    document.querySelectorAll(".question3-container")[0].classList.add("remove");
    document.querySelectorAll(".question5-container")[0].classList.add("remove");
    document.querySelectorAll(".question6-container")[0].classList.add("remove");
    document.querySelectorAll(".question7-container")[0].classList.add("remove");
    document.querySelectorAll(".question8-container")[0].classList.add("remove");
}

function fifthQuestion(){
    document.querySelectorAll(".question5-container label")[0].innerHTML = questions[4].question;
    document.querySelectorAll(".question5-container")[0].classList.remove("remove");
    document.querySelectorAll(".question-container")[0].classList.add("remove");
    document.querySelectorAll(".question2-container")[0].classList.add("remove");
    document.querySelectorAll(".question3-container")[0].classList.add("remove");
    document.querySelectorAll(".question4-container")[0].classList.add("remove");
    document.querySelectorAll(".question6-container")[0].classList.add("remove");
    document.querySelectorAll(".question7-container")[0].classList.add("remove");
    document.querySelectorAll(".question8-container")[0].classList.add("remove");
}

function sixthQuestion(){
    document.querySelectorAll(".question6-container label")[0].innerHTML = questions[5].question;
    document.querySelectorAll(".question6-container")[0].classList.remove("remove");
    document.querySelectorAll(".question-container")[0].classList.add("remove");
    document.querySelectorAll(".question2-container")[0].classList.add("remove");
    document.querySelectorAll(".question3-container")[0].classList.add("remove");
    document.querySelectorAll(".question4-container")[0].classList.add("remove");
    document.querySelectorAll(".question5-container")[0].classList.add("remove");
    document.querySelectorAll(".question7-container")[0].classList.add("remove");
    document.querySelectorAll(".question8-container")[0].classList.add("remove");
}

function seventhQuestion(){
    document.querySelectorAll(".question7-container label")[0].innerHTML = questions[6].question;
    document.querySelectorAll(".question7-container")[0].classList.remove("remove");
    document.querySelectorAll(".question-container")[0].classList.add("remove");
    document.querySelectorAll(".question2-container")[0].classList.add("remove");
    document.querySelectorAll(".question3-container")[0].classList.add("remove");
    document.querySelectorAll(".question4-container")[0].classList.add("remove");
    document.querySelectorAll(".question5-container")[0].classList.add("remove");
    document.querySelectorAll(".question6-container")[0].classList.add("remove");
    document.querySelectorAll(".question8-container")[0].classList.add("remove");
}

function eightQuestion(){
    document.querySelectorAll(".question8-container label")[0].innerHTML = questions[7].question;
    document.querySelectorAll(".question8-container label")[1].innerHTML = questions[7].question2;
    document.querySelectorAll(".question8-container")[0].classList.remove("remove");
    document.querySelectorAll(".question-container")[0].classList.add("remove");
    document.querySelectorAll(".question2-container")[0].classList.add("remove");
    document.querySelectorAll(".question3-container")[0].classList.add("remove");
    document.querySelectorAll(".question4-container")[0].classList.add("remove");
    document.querySelectorAll(".question5-container")[0].classList.add("remove");
    document.querySelectorAll(".question6-container")[0].classList.add("remove");
    document.querySelectorAll(".question7-container")[0].classList.add("remove");
}

function a_answer(){
    if(document.querySelectorAll(".question-container a")[0].classList[0] === "choice1"){
        document.querySelectorAll(".question-container a")[0].classList.remove("choice1");
        document.querySelectorAll(".question-container a")[1].classList.remove("select2");
        document.querySelectorAll(".question-container a")[1].classList.add("choice2");
        document.querySelectorAll(".question-container a")[2].classList.remove("select3");
        document.querySelectorAll(".question-container a")[2].classList.add("choice3");
        document.querySelectorAll(".question-container a")[3].classList.remove("select4");
        document.querySelectorAll(".question-container a")[3].classList.add("choice4");
        document.querySelectorAll(".question-container a")[0].classList.add("select1");
        document.querySelectorAll(".question-container a")[0].classList.add("a");
        document.querySelectorAll(".question-container a")[1].classList.remove("b");
        document.querySelectorAll(".question-container a")[2].classList.remove("c");
        document.querySelectorAll(".question-container a")[3].classList.remove("d");
    }else{
        document.querySelectorAll(".question-container a")[0].classList.add("choice1");
        document.querySelectorAll(".question-container a")[0].classList.remove("select1");
        document.querySelectorAll(".question-container a")[0].classList.remove("a");
    }
}

function a_answer2(){
    if(document.querySelectorAll(".question2-container a")[0].classList[0] === "choice1"){
        document.querySelectorAll(".question2-container a")[0].classList.remove("choice1");
        document.querySelectorAll(".question2-container a")[1].classList.remove("select2");
        document.querySelectorAll(".question2-container a")[1].classList.add("choice2");
        document.querySelectorAll(".question2-container a")[2].classList.remove("select3");
        document.querySelectorAll(".question2-container a")[2].classList.add("choice3");
        document.querySelectorAll(".question2-container a")[3].classList.remove("select4");
        document.querySelectorAll(".question2-container a")[3].classList.add("choice4");
        document.querySelectorAll(".question2-container a")[0].classList.add("select1");
        document.querySelectorAll(".question2-container a")[0].classList.add("a");
        document.querySelectorAll(".question2-container a")[1].classList.remove("b");
        document.querySelectorAll(".question2-container a")[2].classList.remove("c");
        document.querySelectorAll(".question2-container a")[3].classList.remove("d");
    }else{
        document.querySelectorAll(".question2-container a")[0].classList.add("choice1");
        document.querySelectorAll(".question2-container a")[0].classList.remove("select1");
        document.querySelectorAll(".question2-container a")[0].classList.remove("a");
    }
}

function a_answer3(){
    if(document.querySelectorAll(".question3-container a")[0].classList[0] === "choice1"){
        document.querySelectorAll(".question3-container a")[0].classList.remove("choice1");
        document.querySelectorAll(".question3-container a")[1].classList.remove("select2");
        document.querySelectorAll(".question3-container a")[1].classList.add("choice2");
        document.querySelectorAll(".question3-container a")[2].classList.remove("select3");
        document.querySelectorAll(".question3-container a")[2].classList.add("choice3");
        document.querySelectorAll(".question3-container a")[3].classList.remove("select4");
        document.querySelectorAll(".question3-container a")[3].classList.add("choice4");
        document.querySelectorAll(".question3-container a")[0].classList.add("select1");
        document.querySelectorAll(".question3-container a")[0].classList.add("a");
        document.querySelectorAll(".question3-container a")[1].classList.remove("b");
        document.querySelectorAll(".question3-container a")[2].classList.remove("c");
        document.querySelectorAll(".question3-container a")[3].classList.remove("d");
    }else{
        document.querySelectorAll(".question3-container a")[0].classList.add("choice1");
        document.querySelectorAll(".question3-container a")[0].classList.remove("select1");
        document.querySelectorAll(".question3-container a")[0].classList.remove("a");
    }
}

function a_answer4(){
    if(document.querySelectorAll(".question4-container a")[0].classList[0] === "choice1"){
        document.querySelectorAll(".question4-container a")[0].classList.remove("choice1");
        document.querySelectorAll(".question4-container a")[1].classList.remove("select2");
        document.querySelectorAll(".question4-container a")[1].classList.add("choice2");
        document.querySelectorAll(".question4-container a")[2].classList.remove("select3");
        document.querySelectorAll(".question4-container a")[2].classList.add("choice3");
        document.querySelectorAll(".question4-container a")[3].classList.remove("select4");
        document.querySelectorAll(".question4-container a")[3].classList.add("choice4");
        document.querySelectorAll(".question4-container a")[0].classList.add("select1");
        document.querySelectorAll(".question4-container a")[0].classList.add("a");
        document.querySelectorAll(".question4-container a")[1].classList.remove("b");
        document.querySelectorAll(".question4-container a")[2].classList.remove("c");
        document.querySelectorAll(".question4-container a")[3].classList.remove("d");
    }else{
        document.querySelectorAll(".question4-container a")[0].classList.add("choice1");
        document.querySelectorAll(".question4-container a")[0].classList.remove("select1");
        document.querySelectorAll(".question4-container a")[0].classList.remove("a");
    }
}

function b_answer(){
    if(document.querySelectorAll(".question-container a")[1].classList[0] === "choice2"){
        document.querySelectorAll(".question-container a")[1].classList.remove("choice2");
        document.querySelectorAll(".question-container a")[0].classList.remove("select1");
        document.querySelectorAll(".question-container a")[0].classList.add("choice1");
        document.querySelectorAll(".question-container a")[2].classList.remove("select3");
        document.querySelectorAll(".question-container a")[2].classList.add("choice3");
        document.querySelectorAll(".question-container a")[3].classList.remove("select4");
        document.querySelectorAll(".question-container a")[3].classList.add("choice4");
        document.querySelectorAll(".question-container a")[1].classList.add("select2");
        document.querySelectorAll(".question-container a")[1].classList.add("b");
        document.querySelectorAll(".question-container a")[0].classList.remove("a");
        document.querySelectorAll(".question-container a")[2].classList.remove("c");
        document.querySelectorAll(".question-container a")[3].classList.remove("d");
    }else{
        document.querySelectorAll(".question-container a")[1].classList.add("choice2")
        document.querySelectorAll(".question-container a")[1].classList.remove("select2");
        document.querySelectorAll(".question-container a")[1].classList.remove("b");
    }
}

function b_answer2(){
    if(document.querySelectorAll(".question2-container a")[1].classList[0] === "choice2"){
        document.querySelectorAll(".question2-container a")[1].classList.remove("choice2");
        document.querySelectorAll(".question2-container a")[0].classList.remove("select1");
        document.querySelectorAll(".question2-container a")[0].classList.add("choice1");
        document.querySelectorAll(".question2-container a")[2].classList.remove("select3");
        document.querySelectorAll(".question2-container a")[2].classList.add("choice3");
        document.querySelectorAll(".question2-container a")[3].classList.remove("select4");
        document.querySelectorAll(".question2-container a")[3].classList.add("choice4");
        document.querySelectorAll(".question2-container a")[1].classList.add("select2");
        document.querySelectorAll(".question2-container a")[1].classList.add("b");
        document.querySelectorAll(".question2-container a")[0].classList.remove("a");
        document.querySelectorAll(".question2-container a")[2].classList.remove("c");
        document.querySelectorAll(".question2-container a")[3].classList.remove("d");
    }else{
        document.querySelectorAll(".question2-container a")[1].classList.add("choice2")
        document.querySelectorAll(".question2-container a")[1].classList.remove("select2");
        document.querySelectorAll(".question2-container a")[1].classList.remove("b");
    }
}

function b_answer3(){
    if(document.querySelectorAll(".question3-container a")[1].classList[0] === "choice2"){
        document.querySelectorAll(".question3-container a")[1].classList.remove("choice2");
        document.querySelectorAll(".question3-container a")[0].classList.remove("select1");
        document.querySelectorAll(".question3-container a")[0].classList.add("choice1");
        document.querySelectorAll(".question3-container a")[2].classList.remove("select3");
        document.querySelectorAll(".question3-container a")[2].classList.add("choice3");
        document.querySelectorAll(".question3-container a")[3].classList.remove("select4");
        document.querySelectorAll(".question3-container a")[3].classList.add("choice4");
        document.querySelectorAll(".question3-container a")[1].classList.add("select2");
        document.querySelectorAll(".question3-container a")[1].classList.add("b");
        document.querySelectorAll(".question3-container a")[0].classList.remove("a");
        document.querySelectorAll(".question3-container a")[2].classList.remove("c");
        document.querySelectorAll(".question3-container a")[3].classList.remove("d");
    }else{
        document.querySelectorAll(".question3-container a")[1].classList.add("choice2")
        document.querySelectorAll(".question3-container a")[1].classList.remove("select2");
        document.querySelectorAll(".question3-container a")[1].classList.remove("b");
    }
}

function b_answer4(){
    if(document.querySelectorAll(".question4-container a")[1].classList[0] === "choice2"){
        document.querySelectorAll(".question4-container a")[1].classList.remove("choice2");
        document.querySelectorAll(".question4-container a")[0].classList.remove("select1");
        document.querySelectorAll(".question4-container a")[0].classList.add("choice1");
        document.querySelectorAll(".question4-container a")[2].classList.remove("select3");
        document.querySelectorAll(".question4-container a")[2].classList.add("choice3");
        document.querySelectorAll(".question4-container a")[3].classList.remove("select4");
        document.querySelectorAll(".question4-container a")[3].classList.add("choice4");
        document.querySelectorAll(".question4-container a")[1].classList.add("select2");
        document.querySelectorAll(".question4-container a")[1].classList.add("b");
        document.querySelectorAll(".question4-container a")[0].classList.remove("a");
        document.querySelectorAll(".question4-container a")[2].classList.remove("c");
        document.querySelectorAll(".question4-container a")[3].classList.remove("d");
    }else{
        document.querySelectorAll(".question4-container a")[1].classList.add("choice2")
        document.querySelectorAll(".question4-container a")[1].classList.remove("select2");
        document.querySelectorAll(".question4-container a")[1].classList.remove("b");
    }
}

function c_answer(){
    if(document.querySelectorAll(".question-container a")[2].classList[0] === "choice3"){
        document.querySelectorAll(".question-container a")[2].classList.remove("choice3");
        document.querySelectorAll(".question-container a")[0].classList.remove("select1");
        document.querySelectorAll(".question-container a")[0].classList.add("choice1");
        document.querySelectorAll(".question-container a")[1].classList.remove("select2");
        document.querySelectorAll(".question-container a")[1].classList.add("choice2");
        document.querySelectorAll(".question-container a")[3].classList.remove("select4");
        document.querySelectorAll(".question-container a")[3].classList.add("choice4");
        document.querySelectorAll(".question-container a")[2].classList.add("select3");
        document.querySelectorAll(".question-container a")[2].classList.add("c");
        document.querySelectorAll(".question-container a")[3].classList.remove("d");
        document.querySelectorAll(".question-container a")[0].classList.remove("a");
        document.querySelectorAll(".question-container a")[1].classList.remove("b");
    }else{
        document.querySelectorAll(".question-container a")[2].classList.add("choice3")
        document.querySelectorAll(".question-container a")[2].classList.remove("select3");
        document.querySelectorAll(".question-container a")[2].classList.remove("c");
    }
}

function c_answer2(){
    if(document.querySelectorAll(".question2-container a")[2].classList[0] === "choice3"){
        document.querySelectorAll(".question2-container a")[2].classList.remove("choice3");
        document.querySelectorAll(".question2-container a")[0].classList.remove("select1");
        document.querySelectorAll(".question2-container a")[0].classList.add("choice1");
        document.querySelectorAll(".question2-container a")[1].classList.remove("select2");
        document.querySelectorAll(".question2-container a")[1].classList.add("choice2");
        document.querySelectorAll(".question2-container a")[3].classList.remove("select4");
        document.querySelectorAll(".question2-container a")[3].classList.add("choice4");
        document.querySelectorAll(".question2-container a")[2].classList.add("select3");
        document.querySelectorAll(".question2-container a")[2].classList.add("c");
        document.querySelectorAll(".question2-container a")[3].classList.remove("d");
        document.querySelectorAll(".question2-container a")[0].classList.remove("a");
        document.querySelectorAll(".question2-container a")[1].classList.remove("b");
    }else{
        document.querySelectorAll(".question2-container a")[2].classList.add("choice3")
        document.querySelectorAll(".question2-container a")[2].classList.remove("select3");
        document.querySelectorAll(".question2-container a")[2].classList.remove("c");
    }
}

function c_answer3(){
    if(document.querySelectorAll(".question3-container a")[2].classList[0] === "choice3"){
        document.querySelectorAll(".question3-container a")[2].classList.remove("choice3");
        document.querySelectorAll(".question3-container a")[0].classList.remove("select1");
        document.querySelectorAll(".question3-container a")[0].classList.add("choice1");
        document.querySelectorAll(".question3-container a")[1].classList.remove("select2");
        document.querySelectorAll(".question3-container a")[1].classList.add("choice2");
        document.querySelectorAll(".question3-container a")[3].classList.remove("select4");
        document.querySelectorAll(".question3-container a")[3].classList.add("choice4");
        document.querySelectorAll(".question3-container a")[2].classList.add("select3");
        document.querySelectorAll(".question3-container a")[2].classList.add("c");
        document.querySelectorAll(".question3-container a")[3].classList.remove("d");
        document.querySelectorAll(".question3-container a")[0].classList.remove("a");
        document.querySelectorAll(".question3-container a")[1].classList.remove("b");
    }else{
        document.querySelectorAll(".question3-container a")[2].classList.add("choice3")
        document.querySelectorAll(".question3-container a")[2].classList.remove("select3");
        document.querySelectorAll(".question3-container a")[2].classList.remove("c");
    }
}

function c_answer4(){
    if(document.querySelectorAll(".question4-container a")[2].classList[0] === "choice3"){
        document.querySelectorAll(".question4-container a")[2].classList.remove("choice3");
        document.querySelectorAll(".question4-container a")[0].classList.remove("select1");
        document.querySelectorAll(".question4-container a")[0].classList.add("choice1");
        document.querySelectorAll(".question4-container a")[1].classList.remove("select2");
        document.querySelectorAll(".question4-container a")[1].classList.add("choice2");
        document.querySelectorAll(".question4-container a")[3].classList.remove("select4");
        document.querySelectorAll(".question4-container a")[3].classList.add("choice4");
        document.querySelectorAll(".question4-container a")[2].classList.add("select3");
        document.querySelectorAll(".question4-container a")[2].classList.add("c");
        document.querySelectorAll(".question4-container a")[3].classList.remove("d");
        document.querySelectorAll(".question4-container a")[0].classList.remove("a");
        document.querySelectorAll(".question4-container a")[1].classList.remove("b");
    }else{
        document.querySelectorAll(".question4-container a")[2].classList.add("choice3")
        document.querySelectorAll(".question4-container a")[2].classList.remove("select3");
        document.querySelectorAll(".question4-container a")[2].classList.remove("c");
    }
}

function d_answer(){
    if(document.querySelectorAll(".question-container a")[3].classList[0] === "choice4"){
        document.querySelectorAll(".question-container a")[3].classList.remove("choice4");
        document.querySelectorAll(".question-container a")[0].classList.remove("select1");
        document.querySelectorAll(".question-container a")[0].classList.add("choice1");
        document.querySelectorAll(".question-container a")[1].classList.remove("select2");
        document.querySelectorAll(".question-container a")[1].classList.add("choice2");
        document.querySelectorAll(".question-container a")[2].classList.remove("select3");
        document.querySelectorAll(".question-container a")[2].classList.add("choice3");
        document.querySelectorAll(".question-container a")[3].classList.add("select4");
        document.querySelectorAll(".question-container a")[3].classList.add("d");
        document.querySelectorAll(".question-container a")[2].classList.remove("c");
        document.querySelectorAll(".question-container a")[0].classList.remove("a");
        document.querySelectorAll(".question-container a")[1].classList.remove("b");
    }else{
        document.querySelectorAll(".question-container a")[3].classList.add("choice4")
        document.querySelectorAll(".question-container a")[3].classList.remove("select4");
        document.querySelectorAll(".question-container a")[3].classList.remove("d");
    }
}

function d_answer2(){
    if(document.querySelectorAll(".question2-container a")[3].classList[0] === "choice4"){
        document.querySelectorAll(".question2-container a")[3].classList.remove("choice4");
        document.querySelectorAll(".question2-container a")[0].classList.remove("select1");
        document.querySelectorAll(".question2-container a")[0].classList.add("choice1");
        document.querySelectorAll(".question2-container a")[1].classList.remove("select2");
        document.querySelectorAll(".question2-container a")[1].classList.add("choice2");
        document.querySelectorAll(".question2-container a")[2].classList.remove("select3");
        document.querySelectorAll(".question2-container a")[2].classList.add("choice3");
        document.querySelectorAll(".question2-container a")[3].classList.add("select4");
        document.querySelectorAll(".question2-container a")[3].classList.add("d");
        document.querySelectorAll(".question2-container a")[2].classList.remove("c");
        document.querySelectorAll(".question2-container a")[0].classList.remove("a");
        document.querySelectorAll(".question2-container a")[1].classList.remove("b");
    }else{
        document.querySelectorAll(".question2-container a")[3].classList.add("choice4")
        document.querySelectorAll(".question2-container a")[3].classList.remove("select4");
        document.querySelectorAll(".question2-container a")[3].classList.remove("d");
    }
}

function d_answer3(){
    if(document.querySelectorAll(".question3-container a")[3].classList[0] === "choice4"){
        document.querySelectorAll(".question3-container a")[3].classList.remove("choice4");
        document.querySelectorAll(".question3-container a")[0].classList.remove("select1");
        document.querySelectorAll(".question3-container a")[0].classList.add("choice1");
        document.querySelectorAll(".question3-container a")[1].classList.remove("select2");
        document.querySelectorAll(".question3-container a")[1].classList.add("choice2");
        document.querySelectorAll(".question3-container a")[2].classList.remove("select3");
        document.querySelectorAll(".question3-container a")[2].classList.add("choice3");
        document.querySelectorAll(".question3-container a")[3].classList.add("select4");
        document.querySelectorAll(".question3-container a")[3].classList.add("d");
        document.querySelectorAll(".question3-container a")[2].classList.remove("c");
        document.querySelectorAll(".question3-container a")[0].classList.remove("a");
        document.querySelectorAll(".question3-container a")[1].classList.remove("b");
    }else{
        document.querySelectorAll(".question3-container a")[3].classList.add("choice4")
        document.querySelectorAll(".question3-container a")[3].classList.remove("select4");
        document.querySelectorAll(".question3-container a")[3].classList.remove("d");
    }
}

function d_answer4(){
    if(document.querySelectorAll(".question4-container a")[3].classList[0] === "choice4"){
        document.querySelectorAll(".question4-container a")[3].classList.remove("choice4");
        document.querySelectorAll(".question4-container a")[0].classList.remove("select1");
        document.querySelectorAll(".question4-container a")[0].classList.add("choice1");
        document.querySelectorAll(".question4-container a")[1].classList.remove("select2");
        document.querySelectorAll(".question4-container a")[1].classList.add("choice2");
        document.querySelectorAll(".question4-container a")[2].classList.remove("select3");
        document.querySelectorAll(".question4-container a")[2].classList.add("choice3");
        document.querySelectorAll(".question4-container a")[3].classList.add("select4");
        document.querySelectorAll(".question4-container a")[3].classList.add("d");
        document.querySelectorAll(".question4-container a")[2].classList.remove("c");
        document.querySelectorAll(".question4-container a")[0].classList.remove("a");
        document.querySelectorAll(".question4-container a")[1].classList.remove("b");
    }else{
        document.querySelectorAll(".question4-container a")[3].classList.add("choice4")
        document.querySelectorAll(".question4-container a")[3].classList.remove("select4");
        document.querySelectorAll(".question4-container a")[3].classList.remove("d");
    }
}

function question1(){
    document.querySelectorAll(".bullet a")[0].classList.add("question1");
    document.querySelectorAll(".bullet a")[1].classList.remove("question2");
    document.querySelectorAll(".bullet a")[2].classList.remove("question3");
    document.querySelectorAll(".bullet a")[3].classList.remove("question4");
    document.querySelectorAll(".bullet a")[4].classList.remove("question5");
    document.querySelectorAll(".bullet a")[5].classList.remove("question6");
    document.querySelectorAll(".bullet a")[6].classList.remove("question7");
    document.querySelectorAll(".bullet a")[7].classList.remove("question8");
    firstQuestion();
}

function question2(){
    document.querySelectorAll(".bullet a")[1].classList.add("question2");
    document.querySelectorAll(".bullet a")[0].classList.add("bullet1");
    document.querySelectorAll(".bullet a")[2].classList.add("bullet3");
    document.querySelectorAll(".bullet a")[3].classList.add("bullet4");
    document.querySelectorAll(".bullet a")[4].classList.add("bullet5");
    document.querySelectorAll(".bullet a")[5].classList.add("bullet6");
    document.querySelectorAll(".bullet a")[6].classList.add("bullet7");
    document.querySelectorAll(".bullet a")[7].classList.add("bullet8");
    document.querySelectorAll(".bullet a")[0].classList.remove("question1");
    document.querySelectorAll(".bullet a")[2].classList.remove("question3");
    document.querySelectorAll(".bullet a")[3].classList.remove("question4");
    document.querySelectorAll(".bullet a")[4].classList.remove("question5");
    document.querySelectorAll(".bullet a")[5].classList.remove("question6");
    document.querySelectorAll(".bullet a")[6].classList.remove("question7");
    document.querySelectorAll(".bullet a")[7].classList.remove("question8");
    secondQuestion();
}

function question3(){
    document.querySelectorAll(".bullet a")[2].classList.add("question3");
    document.querySelectorAll(".bullet a")[0].classList.add("bullet1");
    document.querySelectorAll(".bullet a")[1].classList.add("bullet2");
    document.querySelectorAll(".bullet a")[3].classList.add("bullet4");
    document.querySelectorAll(".bullet a")[4].classList.add("bullet5");
    document.querySelectorAll(".bullet a")[5].classList.add("bullet6");
    document.querySelectorAll(".bullet a")[6].classList.add("bullet7");
    document.querySelectorAll(".bullet a")[7].classList.add("bullet8");
    document.querySelectorAll(".bullet a")[0].classList.remove("question1");
    document.querySelectorAll(".bullet a")[1].classList.remove("question2");
    document.querySelectorAll(".bullet a")[3].classList.remove("question4");
    document.querySelectorAll(".bullet a")[4].classList.remove("question5");
    document.querySelectorAll(".bullet a")[5].classList.remove("question6");
    document.querySelectorAll(".bullet a")[6].classList.remove("question7");
    document.querySelectorAll(".bullet a")[7].classList.remove("question8");
    thirdQuestion();
}

function question4(){
    document.querySelectorAll(".bullet a")[3].classList.add("question4");
    document.querySelectorAll(".bullet a")[0].classList.add("bullet1");
    document.querySelectorAll(".bullet a")[1].classList.add("bullet2");
    document.querySelectorAll(".bullet a")[2].classList.add("bullet3");
    document.querySelectorAll(".bullet a")[4].classList.add("bullet5");
    document.querySelectorAll(".bullet a")[5].classList.add("bullet6");
    document.querySelectorAll(".bullet a")[6].classList.add("bullet7");
    document.querySelectorAll(".bullet a")[7].classList.add("bullet8");
    document.querySelectorAll(".bullet a")[0].classList.remove("question1");
    document.querySelectorAll(".bullet a")[1].classList.remove("question2");
    document.querySelectorAll(".bullet a")[2].classList.remove("question3");
    document.querySelectorAll(".bullet a")[4].classList.remove("question5");
    document.querySelectorAll(".bullet a")[5].classList.remove("question6");
    document.querySelectorAll(".bullet a")[6].classList.remove("question7");
    document.querySelectorAll(".bullet a")[7].classList.remove("question8");
    fourthQuestion();
}

function question5(){
    document.querySelectorAll(".bullet a")[4].classList.add("question5");
    document.querySelectorAll(".bullet a")[0].classList.add("bullet1");
    document.querySelectorAll(".bullet a")[1].classList.add("bullet2");
    document.querySelectorAll(".bullet a")[2].classList.add("bullet3");
    document.querySelectorAll(".bullet a")[3].classList.add("bullet4");
    document.querySelectorAll(".bullet a")[5].classList.add("bullet6");
    document.querySelectorAll(".bullet a")[6].classList.add("bullet7");
    document.querySelectorAll(".bullet a")[7].classList.add("bullet8");
    document.querySelectorAll(".bullet a")[0].classList.remove("question1");
    document.querySelectorAll(".bullet a")[1].classList.remove("question2");
    document.querySelectorAll(".bullet a")[2].classList.remove("question3");
    document.querySelectorAll(".bullet a")[3].classList.remove("question4");
    document.querySelectorAll(".bullet a")[5].classList.remove("question6");
    document.querySelectorAll(".bullet a")[6].classList.remove("question7");
    document.querySelectorAll(".bullet a")[7].classList.remove("question8");
    fifthQuestion();
}

function question6(){
    document.querySelectorAll(".bullet a")[5].classList.add("question6");
    document.querySelectorAll(".bullet a")[0].classList.add("bullet1");
    document.querySelectorAll(".bullet a")[1].classList.add("bullet2");
    document.querySelectorAll(".bullet a")[2].classList.add("bullet3");
    document.querySelectorAll(".bullet a")[3].classList.add("bullet4");
    document.querySelectorAll(".bullet a")[4].classList.add("bullet5");
    document.querySelectorAll(".bullet a")[6].classList.add("bullet7");
    document.querySelectorAll(".bullet a")[7].classList.add("bullet8");
    document.querySelectorAll(".bullet a")[0].classList.remove("question1");
    document.querySelectorAll(".bullet a")[1].classList.remove("question2");
    document.querySelectorAll(".bullet a")[2].classList.remove("question3");
    document.querySelectorAll(".bullet a")[3].classList.remove("question4");
    document.querySelectorAll(".bullet a")[4].classList.remove("question5");
    document.querySelectorAll(".bullet a")[6].classList.remove("question7");
    document.querySelectorAll(".bullet a")[7].classList.remove("question8");
    sixthQuestion();
}

function question7(){
    document.querySelectorAll(".bullet a")[6].classList.add("question7");
    document.querySelectorAll(".bullet a")[0].classList.add("bullet1");
    document.querySelectorAll(".bullet a")[1].classList.add("bullet2");
    document.querySelectorAll(".bullet a")[2].classList.add("bullet3");
    document.querySelectorAll(".bullet a")[3].classList.add("bullet4");
    document.querySelectorAll(".bullet a")[4].classList.add("bullet5");
    document.querySelectorAll(".bullet a")[5].classList.add("bullet6");
    document.querySelectorAll(".bullet a")[7].classList.add("bullet8");
    document.querySelectorAll(".bullet a")[0].classList.remove("question1");
    document.querySelectorAll(".bullet a")[1].classList.remove("question2");
    document.querySelectorAll(".bullet a")[2].classList.remove("question3");
    document.querySelectorAll(".bullet a")[3].classList.remove("question4");
    document.querySelectorAll(".bullet a")[4].classList.remove("question5");
    document.querySelectorAll(".bullet a")[5].classList.remove("question6");
    document.querySelectorAll(".bullet a")[7].classList.remove("question8");
    seventhQuestion();
}

function question8(){
    document.querySelectorAll(".bullet a")[7].classList.add("question8");
    document.querySelectorAll(".bullet a")[0].classList.add("bullet1");
    document.querySelectorAll(".bullet a")[1].classList.add("bullet2");
    document.querySelectorAll(".bullet a")[2].classList.add("bullet3");
    document.querySelectorAll(".bullet a")[3].classList.add("bullet4");
    document.querySelectorAll(".bullet a")[4].classList.add("bullet5");
    document.querySelectorAll(".bullet a")[5].classList.add("bullet6");
    document.querySelectorAll(".bullet a")[6].classList.add("bullet7");
    document.querySelectorAll(".bullet a")[0].classList.remove("question1");
    document.querySelectorAll(".bullet a")[1].classList.remove("question2");
    document.querySelectorAll(".bullet a")[2].classList.remove("question3");
    document.querySelectorAll(".bullet a")[3].classList.remove("question4");
    document.querySelectorAll(".bullet a")[4].classList.remove("question5");
    document.querySelectorAll(".bullet a")[5].classList.remove("question6");
    document.querySelectorAll(".bullet a")[6].classList.remove("question7");
    eightQuestion();
}

function end(){
    if(confirm("Are you sure you want to submit?" + "\n" +"Other buttons will not be accessible and your final score will show up after clicking the \"Ok\" button.")){
        var end = 0;

        //first question
        if(document.querySelectorAll(".question-container a")[0].classList[1] === "a"){
            end+=0;
        }else if(document.querySelectorAll(".question-container a")[1].classList[1] === "b"){
            end+=0;
        }else if(document.querySelectorAll(".question-container a")[2].classList[1] === "c"){
            end++;
        }else{
            end+=0;
        }

        //second question
        if(document.querySelectorAll(".question2-container a")[0].classList[1] === "a"){
            end+=0;
        }else if(document.querySelectorAll(".question2-container a")[1].classList[1] === "b"){
            end++;
        }else if(document.querySelectorAll(".question2-container a")[2].classList[1] === "c"){
            end+=0;
        }else{
            end+=0;
        }

        //third question
        if(document.querySelectorAll(".question3-container a")[0].classList[1] === "a"){
            end+=0;
        }else if(document.querySelectorAll(".question3-container a")[1].classList[1] === "b"){
            end+=0;
        }else if(document.querySelectorAll(".question3-container a")[2].classList[1] === "c"){
            end++;
        }else{
            end+=0;
        }

        //fourth question
        if(document.querySelectorAll(".question4-container a")[0].classList[1] === "a"){
            end++;
        }else if(document.querySelectorAll(".question4-container a")[1].classList[1] === "b"){
            end+=0;
        }else if(document.querySelectorAll(".question4-container a")[2].classList[1] === "c"){
            end+=0;
        }else{
            end+=0;
        }

        var fifthAnswer = document.getElementById("answer5").value;

        //fifth question
        if(fifthAnswer === "aristotle"){
            end++;
        }else{
            end+=0;
        }

        var sixthAnswer = document.getElementById("answer6").value;

        //sixth question
        if(sixthAnswer === "stoic ethics"){
            end++;
        }else{
            end+=0;
        }

        var seventhAnswer = document.getElementById("answer7").value;

        //seventh question
        if(seventhAnswer === "confucius"){
            end++;
        }else{
            end+=0;
        }

        var eightAnswer = document.getElementById("answer8").value;

        //eight question
        if(eightAnswer === "scientist"){
            end++;
        }else{
            end+=0;
        }

        document.querySelectorAll(".bullet a")[8].classList.add("end1");
        document.querySelectorAll(".bullet a")[7].classList.add("bullet8");
        document.querySelectorAll(".bullet a")[7].classList.remove("question8");
        document.querySelectorAll(".question8-container")[0].classList.add("remove");
        document.querySelectorAll(".end-of-quiz")[0].classList.remove("remove");
        document.getElementsByTagName("a")[7].removeAttribute("onclick");
        document.getElementsByTagName("a")[8].removeAttribute("onclick");
        document.getElementsByTagName("a")[9].removeAttribute("onclick");
        document.getElementsByTagName("a")[10].removeAttribute("onclick");
        document.getElementsByTagName("a")[11].removeAttribute("onclick");
        document.getElementsByTagName("a")[12].removeAttribute("onclick");
        document.getElementsByTagName("a")[13].removeAttribute("onclick");
        document.getElementsByTagName("a")[14].removeAttribute("onclick");
        document.querySelectorAll(".end-of-quiz h1")[1].innerHTML = end;
    }
}