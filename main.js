const quizData = [
{
    question: "Quelle est la capitale de l’Australie ?",
    a: 'Sydney',
    b: 'Canberra',
    c: 'Melbourne',
    d: 'Perth',
    correct : "b"
},
{
    question: "Combien y a-t-il de continents sur Terre ?",
    a: '5',
    b: '6',
    c: '7',
    d: '8',
    correct:"c"
},
{
    question: "Qui a peint la Joconde ?",
    a: 'Pablo Picasso',
    b: 'Léonard de Vinci ',
    c: 'Vincent van Gogh',
    d: 'Michel-Ange',
    correct :"b"
},
{
    question: "Quel est l’élément chimique représenté par le symbole O?",
    a: ' Or',
    b: ' Oxygène',
    c: 'Osmium',
    d: 'Ozone',
    correct: "b"
},
{
    question: "Quel est le plus grand océan du monde ?",
    a: ' Océan Atlantique',
    b: ' Océan Indien',
    c: 'Océan Pacifique',
    d: 'Océan Arctique',
    correct :"c"
},
{
    question: "Dans quelle ville se trouve la Tour Eiffel ?",
    a: ' Londres',
    b: '  Paris',
    c: 'Rome',
    d: ' Madrid',
    correct :"b"
},
{
    question: "Qui est l'auteur de Les Misérables ?",
    a: ' Victor Hugo',
    b: ' Émile Zola',
    c: 'Gustave Flaubert',
    d: 'Jules Verne',
    correct: "a"
},
{
    question: "Quelle planète est la plus proche du Soleil ?",
    a: ' Mercure ',
    b: ' Vénus',
    c: 'Terre',
    d: 'Mars',
    correct: "a"
},
{
    question: "Quel est le pays d’origine de la pizza ?",
    a: ' Espagne ',
    b: ' Italie',
    c: 'Grèce',
    d: 'France',
    correct: "b"
},
{
    question: "Quelle est la langue la plus parlée dans le monde ?",
    a: ' Espagnol ',
    b: ' Anglais',
    c: 'Chinois Mandarin',
    d: 'Français',
    correct: "c"
}
];

const quiz = document.getElementById('quiz');
const reponseS = document.querySelectorAll(".answer");
const question1 = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitbtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

telechergeQuiz();

function telechergeQuiz(){
    deselectReponses();

    const currentQuizData = quizData[currentQuiz];

    question1.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function deselectReponses(){

    reponseS.forEach((reponse1)=> (reponse1.checked = false));
    
}

function getSelected(){
    let reponse;

    reponseS.forEach((reponse1) => {
        if (reponse1.checked){
            reponse = reponse1.id;
        }
    });
return reponse;
}

submitbtn.addEventListener("click", () => {
    const reponse = getSelected();

    if ( reponse){
        if(reponse === quizData[currentQuiz].correct){

            score++;
        }
        currentQuiz++;

        if( currentQuiz < quizData.length){
            telechergeQuiz();
        }else {
            quiz.innerHTML = ` <h2> Votre avez repondu à ${score}/${quizData.length} correctes </h2>
            <button onclick="location.reload()">Recharger</button>`;
        }
    }
})



