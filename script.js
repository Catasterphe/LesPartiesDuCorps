  const images = [{
      url: "images/corps.png",
      answer: "le corps"
    },
    {
      url: "images/doigt.png",
      answer: "un doigt"
    },
    {
      url: "images/main.png",
      answer: "la main"
    },
    {
      url: "images/bras.png",
      answer: "le bras"
    },
    {
      url: "images/estomac.png",
      answer: "l'estomac"
    },
    {
      url: "images/pied.png",
      answer: "le pied"
    },
    {
      url: "images/dos.png",
      answer: "le dos"
    },
    {
      url: "images/tete.png",
      answer: "la tête"
    },
    {
      url: "images/visage.png",
      answer: "le visage"
    },
    {
      url: "images/cheveux.png",
      answer: "les cheveux"
    },
    {
      url: "images/jambe.png",
      answer: "la jambe"
    },
    {
      url: "images/oreille.png",
      answer: "une oreille"
    },
    {
      url: "images/oeil.png",
      answer: "un oeil"
    },
    {
      url: "images/yeux.png",
      answer: "les yeux"
    },
    {
      url: "images/cheveux.png",
      answer: "les cheveux"
    },
    {
      url: "images/bouche.png",
      answer: "la bouche"
    },
    {
      url: "images/dents.png",
      answer: "les dents"
    },
    {
      url: "images/taille.png",
      answer: "la taille"
    },
    {
      url: "images/petit.png",
      answer: "petit"
    },
    {
      url: "images/grand.png",
      answer: "grand"
    },
    {
      url: "images/beau.png",
      answer: "beau"
    },
    {
      url: "images/gros.png",
      answer: "gros"
    },
    {
      url: "images/maigre.png",
      answer: "maigre"
    },
    {
      url: "images/moche.png",
      answer: "moche"
    },
    {
      url: "images/jeune.png",
      answer: "jeune"
    },
    {
      url: "images/doigtpied.png",
      answer: "doigt de pied"
    },
    {
      url: "images/vieux.png",
      answer: "vieux"
    },
    {
      url: "images/peurond.png",
      answer: "un peu rond"
    },
    {
      url: "images/nez.png",
      answer: "le nez"
    },
];

const imageElement = document.getElementById("image");
const answerInput = document.getElementById("answer");

let lastImageIndex = -1;
let currentImageIndex = 0;

function selectRandomImage() {
  let newImageIndex = lastImageIndex;
  while (newImageIndex === lastImageIndex) {
    newImageIndex = Math.floor(Math.random() * images.length);
  }
  
  lastImageIndex = currentImageIndex;
  currentImageIndex = newImageIndex;
  
  imageElement.src = images[currentImageIndex].url;
  imageElement.alt = images[currentImageIndex].answer;
  document.getElementById("answer").value = "";
  document.getElementById("answer").focus();
}

selectRandomImage();
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    const userAnswer = answerInput.value.trim().toLowerCase();
    const correctAnswer = imageElement.alt.toLowerCase();

    if (userAnswer === correctAnswer) {
        alert("Correct!");
        setTimeout(selectRandomImage(), 1000);
    } else {
    let errorMessages = [
      "Oops, try again! 🌝",
      "Nice try! 🌝",
      "Incorrect, try again! 😰",
      "Keep trying! Don't give up :D"
    ];
    let randomIndex = Math.floor(Math.random() * errorMessages.length);
      alert(errorMessages[randomIndex]);
    }

    answerInput.value = "";
});