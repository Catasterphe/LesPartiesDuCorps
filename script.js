  const images = [{
      url: "images/corps.png",
      answer: "le corps"
    },
    {
      url: "images/doigt.webp",
      answer: "un doigt"
    },
    {
      url: "images/main.jpg",
      answer: "la main"
    },
    {
      url: "images/bras.jpg",
      answer: "le bras"
    },
    {
      url: "images/estomac.png",
      answer: "l'estomac"
    },
    {
      url: "images/pied.jpg",
      answer: "le pied"
    },
    {
      url: "images/dos.jpg",
      answer: "le dos"
    },
    {
      url: "images/tete.jpg",
      answer: "la tête"
    },
    {
      url: "images/visage.webp",
      answer: "le visage"
    },
    {
      url: "images/cheveux.jpg",
      answer: "les cheveux"
    },
    {
      url: "images/jambe.webp",
      answer: "la jambe"
    },
    {
      url: "images/oreille.jpg",
      answer: "une oreille"
    },
    {
      url: "images/oeil.avif",
      answer: "un oeil"
    },
    {
      url: "images/yeux.avif",
      answer: "les yeux"
    },
    {
      url: "images/cheveux.jpg",
      answer: "les cheveux"
    },
    {
      url: "images/bouche.avif",
      answer: "la bouche"
    },
    {
      url: "images/dents.jpg",
      answer: "les dents"
    },
    {
      url: "images/taille.webp",
      answer: "la taille"
    },
    {
      url: "images/petit.avif",
      answer: "petit"
    },
    {
      url: "images/grand.avif",
      answer: "grand"
    },
    {
      url: "images/beau.avif",
      answer: "beau"
    },
    {
      url: "images/gros.avif",
      answer: "gros"
    },
    {
      url: "images/maigre.avif",
      answer: "maigre"
    },
    {
      url: "images/moche.avif",
      answer: "moche"
    },
    {
      url: "images/jeune.webp",
      answer: "jeune"
    },
    {
      url: "images/doigtpied.png",
      answer: "doigt de pied"
    },
    {
      url: "images/vieux.avif",
      answer: "vieux"
    },
    {
      url: "images/peurond.avif",
      answer: "un peu rond"
    },
    {
      url: "images/nez.jpg",
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