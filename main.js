window.addEventListener('load', init);



// Globals 
let time = 10;
let score = 0; 
let isPlaying;

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const highscoreDisplay = document.querySelector('#highscore');

const words = [
    'Por favor',
    'Yo no comprendo',
    'Te quiero',
    'Buenas tardes',
    'Bella',
    'Bailando',
    'Mi Gente',
    'Clandestino',
    'No Me Acuerdo ',
    'Gasolina',
    'Lo siento',
    'la boca',
    'Leer',
    'los pies',
    'Hasta luego',
    'Semana',
    'Antes',
    'Aunque',
    'Poco',
    'Bajo',
    'Muy',
    'Mucho',
    'Encontrar',
    'Trabajar',
    'Pensar'
  ];

  // initalize Game

  function init() {
      console.log('hey')
      // load word from array
      showWord(words);
  }

    //Pick random to display on page
    //takes in the array 'words'
    //The Math.floor() function returns the largest integer less than or equal to a given number.
    //Math.random() used with Math.floor() can be used to return random integers.
    function showWord (words) {
        const randIndex = Math.floor(Math.random) * words.length);

    }