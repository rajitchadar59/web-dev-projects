let user_score =0;
let computer_score =0;
let msg = document.querySelector("#massage");
const user_scorepara= document.querySelector("#userscore");
const computerscorepara= document.querySelector("#computerscore");

const generate_comp_choice =()=>{
    //rock paper scissor
    let options = ["rock" , "paper" ,"scissors"];
     const random_ind =Math.floor(Math.random()*3);
    
    return options[random_ind];
    
    
    };
const drawgame =()=>{
console.log("game was draw !");
msg.innerText="Game was draw !play again ";
msg.style.backgroundColor ="yellow";
msg.style.color ="black";

};

const showinner =(userwin ,user_choice ,comp_choice)=>{
if(userwin){
  user_score++;
 user_scorepara.innerText=user_score;

  console.log("you win!");
  msg.innerText=`You win !! Your   ${user_choice} beats ${comp_choice}`;
  msg.style.backgroundColor ="green";

}
else{
  computer_score++;
  computerscorepara.innerText=computer_score;
  
  console.log("you loss!");
  msg.innerText=`You Loss !! computers  ${comp_choice} beats ${user_choice}`;
  msg.style.backgroundColor ="red";
}

};

const playgame = (user_choice)=>{

    console.log("user choice ",user_choice);

    const comp_choice = generate_comp_choice();
    console.log("computer  choice ",comp_choice);
  if(user_choice===comp_choice){
    

    drawgame();

  }
  else {

    let userwin = true;
    if(user_choice ==="rock"){
     userwin= comp_choice==="paper"?false:true;
    }
    else if(user_choice ==="paper"){

        userwin=comp_choice==="scissors"?false:true;

    }
   else{
     userwin=  comp_choice==="rock"?false:true;
     

   }
    showinner(userwin , user_choice ,comp_choice);

  }

}





const choices = document.querySelectorAll(".choice");

choices.forEach((choice) =>{
console.log(choice);

choice.addEventListener("click" ,()=>{
    const user_choice= choice.getAttribute("id");



playgame(user_choice);



})

})