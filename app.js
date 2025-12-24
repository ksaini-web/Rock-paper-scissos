let userscore = 0;
let comscrore = 0;

const choices=document.querySelectorAll(".choice");

let msg=document.querySelector("#msg");
 

const genCompchoics = ()=>{
     
    //Make the array for the option for computer choics

    const option=["rock","paper","scissors"];
    //this the per defice faction in js math.randam but this faction is floot value
    //so we use Math.floor(Math.random()*3);

    const randIdx=Math.floor(Math.random()*3);

    return option[randIdx];
    
}

const drawGame=()=>{
    console.log("Game was draw ");

}
let user = document.querySelector("#user-score");
let computer = document.querySelector("#comp-score");

 let usercont =0;
    let compcout =0;
let msgcontiner=document.querySelector(".msg-container");

const showWinner = (userWin,userchoice,compchoics)=>{

   
    if(userWin){
        console.log("you win ");
        msg.innerText ="You Win! Your "+userchoice+" beats Your "+ compchoics;
        usercont++;
        user.innerText=usercont;
       msgcontiner.style.background="green"
    }
    else{
        compcout++;
        computer.innerText=compcout

       console.log("You lose ");
       msg.innerText="You lose "+compchoics+" beats "+ userchoice;
        msgcontiner.style.background="red"
    }

}

const playgame=(userchoice)=>{
console.log("user choice = ",userchoice);


const compchoics=genCompchoics();
console.log("Computer chzoice = ",compchoics);

if(userchoice===compchoics){

    msg.innerText="Game was Draw. Play again";
drawGame();
return;

}
else {

    //win conditions;
    let userWin =true;

    if(userchoice==="rock"){

        //In the condition the user check rock and the computer choice is paper 
        //the computer 

      userWin = compchoics === "paper" ? false : true;
    }
      else if(userchoice==="paper"){

        userWin = compchoics === "scissors" ? false : true;
      }
      else if(userchoice==="scissors"){

       userWin = compchoics === "rock" ? false : true;
      }
      showWinner(userWin,userchoice,compchoics);
      
    
}

}




choices.forEach((choice)=>{
    console.log(choice);

    //for the user choice
    choice.addEventListener("click",()=>{
        let userchoice = choice.getAttribute("id");
        userchoice=userchoice.toLowerCase();
            // after the user play over choics the call
            // the genCompchoics faction computer choics
        

            
            playgame(userchoice);
        })

});
