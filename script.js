const sounds = document.querySelectorAll(".sound"); //Array
const pads = document.querySelectorAll(".pads div"); //Node List
const visual = document.querySelector('.visual');
const colors = [
    "#60d394",
    "#d34e37",
    "#c060d3",
    "#d3d160",
    "#6860d3",
    "#60b8d3"
];

//To play all the sounds all together.
    //window.addEventListener("load", sounds.forEach((item) => item.play()));

//Lets get going with the sound here
    //Now we wanna add sounds on click of pads. To achieve that we could either create 6 EventListners for each pad
    //Instead, we made a foreach loop which passes the pad and index of the sound to be played.
pads.forEach((pad, index) => {  //for each was used with pads, because it is an array and not pad
    pad.addEventListener('click', function() {
        sounds[index].currentTime = 0;
        sounds[index].play();

        createBubbles(index);
    });
});

//Create a function that makes bubbles
const createBubbles = (index) => {
    const bubble = document.createElement('div');
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];   //We needed the index variable, but it wasn't global scoped. So, to access that we called the new function from the function which had the index variable (COOL PROGRAMMING TIP)
    bubble.style.animation = 'jump 1s ease';
    bubble.addEventListener('animationend', function() {
        visual.removeChild(this);
    })
};