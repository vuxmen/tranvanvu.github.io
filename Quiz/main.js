let pre = document.querySelector('.prev-btn');
let next = document.querySelector('.next-btn');
let finish = document.querySelector('.finish-btn');
let quickProgress = document.querySelector('.quiz-progress-bar');
let quizContent = document.querySelector('.quiz-content');
let quizQuestion = document.querySelector('.quiz-question');
let quizResult = document.querySelector('.quiz-results');
let quizScore = document.querySelector('.quiz-results-score');
let backbtn = document.querySelector('.back-btn');
let quizAnswer;
let quizItem;
let input;
let current = 0;
let dataStore = [
    {
      current: 0,
      index: null
    },
    {
      current: 1,
      index: null
    },
    {
      current: 2,
      index: null
    },
];

let data = [
    {
        question: 'What is the full form of RAM ?',
        answer: [
            'Random Access Memory',
            'Randomely Access Memory',
            'Run Aceapt Memory',
            'None of these'
        ],
        trueAnswer: 'Random Access Memory'
    },
    {
        question: 'Inside which HTML element do we put the JavaScript ?',
        answer: [
            'script',
            'scripting',
            'js',
            'Javascript',
            'another answer'
        ],
        trueAnswer: '<script>'
    },
    {
        question: 'Where is the correct place to insert a JavaScript ?',
        answer: [
            'The head section',
            'The body section',
            'Both body and head'
        ],
        trueAnswer: 'The body section'
    }
];

reset();

function reset() {
    quizContent.innerHTML = '';
    if (current == 0) {
        next.classList.add('disable');
        pre.classList.add('disable');
    } else {
        next.classList.remove('disable');
        pre.classList.remove('disable');
    }

}

initialize();

function initialize() {
    quizContent.innerHTML +=
        `<div class="quiz-question">
            <p>${data[current].question}</p>
        </div>
        <div class="quiz-answer"></div>
        `;
    quizAnswer = document.querySelector('.quiz-answer');
    data[current].answer.forEach(
        (e, index) => quizAnswer.innerHTML +=
        `<div class="quiz-item">
            <input type="radio" id="answer-${index + 1}" name="question-${current + 1}">
            <label for="answer-${index + 1}">
                <span></span>
                <p>${e}</p>
            </label>
        </div>
        `
    );

    input = document.getElementsByTagName('input');

    storeData();
    checktoggle();
    checkProgress();
    showSubmit();
    enableSubmit();
    console.log(dataStore);
    console.log(current);

}

    function checktoggle() {
      [...input].forEach((item, i) => {
        if (item.checked == true) {
          next.classList.remove('disable');
          return
        }
      });

    }

    function toggle(event) {
      if (!event.target.matches('input')) return
      event.stopPropagation();
      event.target.checked = true;
      dataStore.forEach(item => {
          if (item.current == current) {
            item.index = [...input].indexOf(event.target);
          }
      });
          next.classList.remove('disable');
          console.log(dataStore);
          console.log(current);
          enableSubmit();
    }

    quizContent.addEventListener('click', toggle);

    next.addEventListener('click', () => {
        if (current >= data.length - 1) return
        current ++;
        storeData();
        reset();
        initialize();
    });

    pre.addEventListener('click', () => {
        if (current <= 0) return
        current --;
        storeData();
        reset();
        initialize();
    });

    finish.addEventListener('click', () => {
      let score = 0;
      dataStore.forEach((item, i) => {
        if (data[i].answer[item.index] == data[i].trueAnswer) {
          score++;
        }
      });

      quizResult.style.display = 'block';
      quizScore.innerText = `SCORE: ${score} / ${dataStore.length}`;
    });

    backbtn.addEventListener('click', () => {
      location.reload();
    });

    function storeData() {
      console.log(dataStore);
      console.log(current);
      dataStore.forEach(item => {
        if (item.current == current) {
          if (item.index != null) {
            for (let i = 0; i < input.length; i ++) {
              if (i == item.index) {
                  input[i].checked = true;
              } else {
                  input[i].checked = false;
              }
            }

          }
        }
      });
    }

    function checkProgress() {
        if (current == data.length - 1) {
            quickProgress.style.width = '100%';
        } else {
            quickProgress.style.width = `${100/data.length * (current + 1)}%`;
        }
    }

    function showSubmit() {
        if (quickProgress.style.width == '100%') {
            finish.style.display = 'inline-block';
        } else {
            finish.style.display = 'none';
        }
    }

    function enableSubmit() {
      let count = 0;
      dataStore.forEach((item, i) => {
        if (item.index != null) {
          count ++;
        }
      });
      if (count == 3) {
        finish.classList.remove('disable');
      }
    }
