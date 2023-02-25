const answerlist = [
   "magic8ball_1.png", 
   "magic8ball_2.png", 
   "magic8ball_3.png", 
   "magic8ball_4.png", 
   "magic8ball_5.png", 
   "magic8ball_6.png", 
   "magic8ball_7.png", 
   "magic8ball_8.png",
   "magic8ball_9.png", 
   "magic8ball_10.png", 
   "magic8ball_11.png", 
   "magic8ball_12.png", 
   "magic8ball_13.png", 
   "magic8ball_14.png", 
   "magic8ball_15.png", 
   "magic8ball_16.png", 
   "magic8ball_17.png",   
   "magic8ball_18.png",
   "magic8ball_19.png",
   "magic8ball_20.png",
];

//define button
const questionsubmit = document.createElement ("button");
const questionform = document.createElement ("form");
const questioninput = document.createElement ("input");
questionform.appendChild (questioninput);
questionform.appendChild (questionsubmit);
questionsubmit.innerText = "ask";

//question display
const currentquestion = document.createElement ("p");

//define image
const answerimage = document.createElement ("img");
const randomimage =()=>{
    return 'img/'+answerlist[Math.floor(Math.random()*answerlist.length)]
};
answerimage.src = 'img/magic8ball_start.png';

//append to page
document.body.appendChild (questionform);
document.body.appendChild (currentquestion);
document.body.appendChild (answerimage);

questionform.addEventListener ('submit',function (event) {
    event.preventDefault ();
    currentquestion.innerText = questioninput.value;
    questioninput.value = null;
    answerimage.src = randomimage();   
})