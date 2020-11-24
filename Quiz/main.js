let pre = document.querySelector('.prev-btn');
let next = document.querySelector('.next-btn');
let finish = document.querySelector('.finish-btn');
let quickProgress = document.querySelector('.quiz-progress-bar');
let quizContent = document.querySelector('.quiz-content');
let quizQuestion = document.querySelector('.quiz-question');
let quizAnswer = document.querySelector('.quiz-answer');
let current = 0;
let dataStore = [];

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
            'Javascript'
        ],
        trueAnswer: '<script>'
    },
    {
        question: 'Where is the correct place to insert a JavaScript ?',
        answer: [
            'The head section',
            'The body section',
            'Both body and head',
            'None of these'
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
        `;
    data[current].answer.forEach(
        (e, index) => quizContent.innerHTML +=
        `<div class="quiz-item">
            <input type="radio" id="answer-${index + 1}" name="question-${current + 1}">
            <label for="answer-${index + 1}">
                <span></span>
                <p>${e}</p>
            </label>
        </div>
        `
    );
    
    let quizItem = document.querySelectorAll('.quiz-item');

    quizItem.forEach(
        (e, index) => {
            // for (let i = 0; i < dataStore.length; i ++) {
            //     if (dataStore[i].current == current && dataStore[i].index == index) {
            //         e.checked = true;
            //     }
            // }
            e.addEventListener('click', () => {
                let input = e.getElementsByTagName('input')[0];
                input.checked = true;
                dataStore.push({current: current, index: index});
                console.log(dataStore);
                next.classList.remove('disable');
            });
        }
    );
    
    
    checkProgress();
    showSubmit();


}
    
    next.addEventListener('click', () => {
        if (current >= data.length - 1) return
        current ++;
        reset();
        initialize();
    });

    pre.addEventListener('click', () => {
        if (current <= 0) return
        current --;
        reset();
        initialize();
    });

   

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

    

