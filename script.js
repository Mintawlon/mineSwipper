let mine,p1,p2,p3,p4,p5,p6,p7,p8;
let count =0;
let finished =false;
Minebuild();
function Minebuild(){
    let row,col;
    row=Math.floor(Math.random()*6+1);
    col=Math.floor(Math.random()*6+1);
    mine=row+""+col;
    p1=(row-1)+""+(col-1);
    p2=(row-1)+""+col;
    p3=(row-1)+""+(col+1);
    p4=row+""+(col-1);
    p5=row+""+(col+1);
    p6=(row+1)+""+(col-1);
    p7=(row+1)+""+(col);
    p8=(row+1)+""+(col+1);
    //testing
     console.log(mine);
}
function press(obj){
    if(finished==false){
   let userPress=Number(obj.id);
   //testing data type
   //console.log( typeof userPress);
   if(userPress==mine){
       obj.style.backgroundColor="red";
       obj.innerHTML="BOOM";
       console.log(true);
       gameOversound();
       gameOverDisplay();
   }else if(userPress==p1 || userPress==p2 || userPress==p3 || userPress==p4 || userPress==p5 || userPress==p6 || userPress==p7 || userPress==p8){
    obj.style.backgroundColor="red";
      playClick();
   }else{
    obj.style.backgroundColor='cyan';
      playClick();
   }
     var os=winner(obj);
     console.log(os);
    }
}

function winner(obj){
    let press=Number(obj.id);
    if(press!==mine){
    document.getElementById(press).setAttribute("class","cell block");   
    count+=1;
    if(count==35)
    {
        finished=true;
        const collection = document.getElementsByClassName("cell");
        for (let i = 0; i < collection.length; i++) {
          collection[i].style.backgroundColor = "green";
        }
        alert(" 🎮 You Win The Game 🥈 💯");
    }
    }
    return count;
}

function gameOverDisplay(){
    finished=true;
    for(let index=0; index<36; index++){
        document.getElementsByClassName("cell")[index].style.backgroundColor='red';  
    }
    document.getElementById("32").innerHTML="G";
    document.getElementById("33").innerHTML="A";
    document.getElementById("34").innerHTML="M";
    document.getElementById("35").innerHTML="E";
    document.getElementById("42").innerHTML="O";
    document.getElementById("43").innerHTML="V";
    document.getElementById("44").innerHTML="E";
    document.getElementById("45").innerHTML="R";
    
}

function playClick(){
    document.getElementById("clickcell").play();
}
function gameOversound(){
    document.getElementById("gameover").play();
}





