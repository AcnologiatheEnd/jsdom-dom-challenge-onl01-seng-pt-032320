const clock = document.getElementById('counter');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const pause = document.getElementById('pause');
const heart = document.getElementById('heart');
const comment = document.getElementById('comment-input');
const commentForm = document.getElementById('comment-form');
let paused = false;
//timer increment
//start();

function start() {
    setInterval(increase, 1000);
}

//keeps the timer moving
function increase() {
    if(!paused){
    clock.innerText++;
    }
}

//add
plus.addEventListener("click", function() {
    let clock = document.getElementById('counter');
    let num = parseInt(clock.innerText);
    clock.innerText = num += 1;
})

//minus
minus.addEventListener("click", function() {
    let clock = document.getElementById('counter');
    let num = parseInt(clock.innerText);
    clock.innerText = num -= 1;
}) 

//pause
pause.addEventListener("click", function() {
    paused = true;
}
);

//this is the like handler
const likesUl = document.querySelector("ul");
const newLike = document.createElement("li");

const likeCounter = heart.addEventListener("click", function(){
    let value = 1
    newLike.innerText = clock.innerText +" has been liked " + value + " time";
    likesUl.appendChild(newLike);
})

//this is for comment handling
const createNewTask = event => {
    //stop form from trying to submit
    event.preventDefault();
    //creating a child list element and giving it the comment from the input
    const newTask = document.createElement("li");
    newTask.innerText = comment.value;
    
    //function to add the child to the list element
    const appendNewTask = task => {
        document.getElementById("list").appendChild(task);
      };    
    appendNewTask(newTask);
    //reset the page without refresh
    event.target.reset();
  };
  
commentForm.addEventListener("submit", createNewTask)
start();