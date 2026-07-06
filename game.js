let currentQuestion;
let score = 0;
let life = 3;

const questionText = document.getElementById("question");
const choicesDiv = document.getElementById("choices");
const scoreText = document.getElementById("score");
const lifeText = document.getElementById("life");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion(){

    choicesDiv.innerHTML="";

    currentQuestion =
    questions[Math.floor(Math.random()*questions.length)];

    questionText.innerHTML=currentQuestion.question;

    currentQuestion.choices.forEach(choice=>{

        const btn=document.createElement("button");

        btn.className="choice";

        btn.innerHTML=choice;

        btn.onclick=function(){

            checkAnswer(choice);

        }

        choicesDiv.appendChild(btn);

    });

}

function checkAnswer(choice){

    if(choice===currentQuestion.answer){

        score++;

        alert("✅ ถูกต้อง");

    }else{

        life--;

        alert("❌ ผิด\nคำตอบคือ "+currentQuestion.answer);

    }

    scoreText.innerHTML=score;

    lifeText.innerHTML=life;

    if(life<=0){

        alert("เกมจบ\nคะแนนของคุณ = "+score);

        score=0;
        life=3;

        scoreText.innerHTML=score;
        lifeText.innerHTML=life;

    }

}

nextBtn.onclick=function(){

    loadQuestion();

}

loadQuestion();
