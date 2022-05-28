// Objectif rechercher: programmation orienteer objet
class Question {
  constructor(text, choices, answer) {
    //pour stocker nos variables
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }
  isCorrectAnswer(choice) {
    return this.answer === choice; //ce boolean renvoit true
    //lorsque le choix 'choice' correspond a la bonne reponse 'answer'
  }
}
//creons un tableau pour stocker nos text,choices et answer
let questions = [
  new Question(
    "Quelle est la grandeur physique ayant pour unité le volt ?",
    [
      "La masse",
      "Le courant",
      "La tension",
      "La puissance",
      "Le poids",
      "N'existe pas parmi les propositions",
    ],
    "La tension"
  ),
  new Question(
    "Quelle est la grandeur physique ayant pour unité le watt ?",
    [
      "La masse",
      "Le courant",
      "La tension",
      "La puissance",
      "Le poids",
      "N'existe pas parmi les propositions",
    ],
    "La puissance"
  ),
  new Question(
    "Quelle est la grandeur physique ayant pour unité l'ampère ?",
    [
      "La masse",
      "Le courant",
      "La tension",
      "La puissance",
      "Le poids",
      "N'existe pas parmi les propositions",
    ],
    "Le courant"
  ),
  new Question(
    "Dans une installation électrique classique, quels sont les deux principaux matériaux utilisés pour transporter l'énergie ?",
    [
      "Le bois",
      "L'acier",
      "Le plastique",
      "Le cuivre",
      "L'aluminium",
      "N'existe pas parmi les propositions",
    ],
    "Le cuivre"
  ),
  new Question(
    "Parmi les réponses suivantes, quelles sont celles que l'on peut affecter à une pile électrique (ou une batterie) ?",
    [
      "Elle fournit une tension continue",
      "Sa tension à vide  est supérieure à sa tension en charge ",
      "Elle fournit un courant continu en circuit ouvert.",
      "Elle possède une résistance interne qui augmente avec l'usure.",
      "La tension fournie est nulle en court-circuit.",
      "N'existe pas parmi les propositions",
    ],
    "Elle fournit une tension continue"
  ),
  new Question(
    "Si je connecte une pile de 9V ayant une résistance interne de 2 Ohm sur un dipôle résistif (résistor) ayant une résistance de 22 Ohm, quelle tension mesurerai-je aux borne de la pile ?",
    [
      "0,9 V",
      "8,18 V",
      "8,76 V",
      "9 mV",
      "9 A",
      "N'existe pas parmi les propositions",
    ],
    "N'existe pas parmi les propositions"
  ),
  new Question(
    "Si je connecte une pile de 9 volts sur une ampoule dont les caractéristiques sont 9V/0.5W, quel est le courant qui circulera dans le circuit ?",
    [
      "0,55 mA",
      "0,55A",
      "5,5 A",
      "5,5 mA",
      "5,6 mA",
      "N'existe pas parmi les propositions",
    ],
    "0,55A"
  ),
  new Question(
    "La relation reliant l'intensité, la tension et la puissance est :",
    [
      "P=U x R",
      "P=U x I",
      "I=U x P",
      "U=P x I",
      "I=P x U",
      "N'existe pas parmi les propositions",
    ],
    "P=U x I"
  ),
  new Question(
    "Quelle est le rôle d'un fusible ?",
    [
      "elle n'a pas de rôle",
      "limiter le courant",
      "protéger un circuit ",
      "éclairer",
      "briller",
      "N'existe pas parmi les propositions",
    ],
    "protéger un circuit "
  ),
  new Question(
    "L'électrocution provoque",
    [
      "La mort subite",
      "Des brûlures graves ",
      "Du bonheur",
      "De l'allegresse",
      "De la vie",
      "N'existe pas parmi les propositions",
    ],
    "La mort subite"
  ),
];
//console.log(questions);

class Quiz {
  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.currentQuestionIndex = 0;
  }
  getCurrentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }
  guess(answer) {
    if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
      this.score++;
    }
    this.currentQuestionIndex++;
  }
  hasEnded() {
    return this.currentQuestionIndex >= this.questions.length;
  }
}

//toutes fonctions relative a l'affichage du jeu

const display = {
  showElement: function (id, text) {
    let element = document.getElementById(id);
    element.innerHTML = text;
  },
  endQuiz: function () {
    let endQuisHTML = `
        <h1>Quiz terminer</h1>
        <h3>votre score est de: ${quiz.score}/${quiz.questions.length}</h3>`;
    this.showElement("quiz", endQuisHTML);
  },
  question: function () {
    this.showElement("question", quiz.getCurrentQuestion().text);
  },
  choices: function () {
    let choices = quiz.getCurrentQuestion().choices;
    //console.log(choices);
    // cette fonction recupere le ID de la question et le fait evoluer
    guessHandler = (id, guess) => {
      document.getElementById(id).onclick = function () {
        quiz.guess(guess);
        quizApp();
      };
    };
    //pour afficher tous les elements de reponse du quiz
    for (i = 0; i < choices.length; i++) {
      this.showElement("choice" + i, choices[i]);
      guessHandler("guess" + i, choices[i]);
    }
  },
  progress: function () {
    let currentQuestionNumber = quiz.currentQuestionIndex + 1;
    this.showElement(
      "progress",
      "Question " + currentQuestionNumber + " sur " + quiz.questions.length
    );
  },
};
//la logique du jeu quiz
quizApp = () => {
  if (quiz.hasEnded()) {
    //end
    display.endQuiz();
  } else {
    //question
    display.question();
    //choice
    display.choices();
    //progress
    display.progress();
  }
};

//on cree un quiz
let quiz = new Quiz(questions);
quizApp();
//console.log(quiz);
