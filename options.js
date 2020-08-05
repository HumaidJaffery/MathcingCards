var doneBtn = document.getElementById('done');;
var easy = document.getElementById('_easy');
var medium = document.getElementById('_medium');
var hard  = document.getElementById('_hard');
var difficulty = document.getElementById('_difficulty')

easy.addEventListener('click', function(){
    hard.className = ''
    medium.className = ''
    easy.className = 'selected'
    difficulty.className = 'easy'
    doneBtn.hidden = ''

})

medium.addEventListener('click', function(){
    hard.className = ''
    easy.className = ''
    medium.className = 'selected'
    difficulty.className = 'medium'
    doneBtn.hidden = ''

})

hard.addEventListener('click', function(){
    easy.className = ''
    medium.className = ''
    hard.className = 'selected'
    difficulty.className = 'hard'
    doneBtn.hidden = ''

})
