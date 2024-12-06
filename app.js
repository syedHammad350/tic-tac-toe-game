var box1=document.getElementById("box1")
var box2=document.getElementById("box2")
var box3=document.getElementById("box3")
var box4=document.getElementById("box4")
var box5=document.getElementById("box5")
var box6=document.getElementById("box6")
var box7=document.getElementById("box7")
var box8=document.getElementById("box8")
var box9=document.getElementById("box9")
// console.log(box9

var player_x=prompt('ENTER A NAME PLAYER ONE')
var player_o=prompt('ENTER A NAME PLAYER TWO')
var first_user=document.getElementById('user1')
var second_user=document.getElementById("user2")
first_user.innerHTML=player_x + ' ' + 'IS' +' '+'X'
second_user.innerHTML=player_o + ' ' +  'IS'+' '+'O'
 var result= document.getElementById('resultpara')
 result.classList.add('gameresult')
 
 
//  console.log(result)


var counter=0
 flag=true

function playgame(ele){
    // console.log('hey',ele)
    // ele.innerHTML='x'
    
    
    if(flag){
        ele.innerHTML='X'
        ele.classList.add('disable')
        ele.classList.add('userx')
        counter++
        
        
      

        flag=false
        
        

    }else{
        ele.innerHTML='O'
        flag=true
        ele.classList.add('disable')
        ele.classList.add('usero')
        counter++

    }

    if((box1.innerHTML == 'X' && box2.innerHTML == 'X'  &&  box3.innerHTML == 'X' ) 
        ||  
    (box4.innerHTML == 'X' &&  box5.innerHTML == 'X'  &&  box6.innerHTML == 'X') 
        ||
    (box7.innerHTML == 'X'  &&  box8.innerHTML == 'X'  &&  box9.innerHTML == 'X' ) 
         || 
         (box1.innerHTML == 'X' && box4.innerHTML == 'X'  &&  box7.innerHTML == 'X')
          ||
         (box2.innerHTML == 'X' && box5.innerHTML == 'X'  &&  box8.innerHTML == 'X') 
         ||
         (box3.innerHTML == 'X' && box6.innerHTML == 'X'  &&  box9.innerHTML == 'X' )
        ||
        (box1.innerHTML == 'X' && box5.innerHTML == 'X'  &&  box9.innerHTML == 'X') ||
        (box3.innerHTML == 'X' && box5.innerHTML == 'X'  &&  box7.innerHTML == 'X')){
        
            
    
             result.innerHTML=player_x+" "+ " X" + " ARE WIN"
    
    box1.classList.add('disable')
    box2.classList.add('disable')
    box3.classList.add('disable')
    box4.classList.add('disable')
    box5.classList.add('disable')
    box6.classList.add('disable')
    box7.classList.add('disable')
    box8.classList.add('disable')
    box9.classList.add('disable')
    
    
    
    
    
    
    
    
        }else if((box1.innerHTML == 'O' && box2.innerHTML == 'O'  &&  box3.innerHTML == 'O')  
            || 
            ( box4.innerHTML == 'O' &&  box5.innerHTML == 'O'  &&  box6.innerHTML == 'O' )
            || 
            (box7.innerHTML == 'O'  &&  box8.innerHTML == 'O'  &&  box9.innerHTML == 'O' ) 
             || 
            ( box1.innerHTML == 'O' && box4.innerHTML == 'O'  &&  box7.innerHTML == 'O') 
            ||
             (box2.innerHTML == 'O' && box5.innerHTML == 'O'  &&  box8.innerHTML == 'O') 
             ||
             (box3.innerHTML == 'O' && box6.innerHTML == 'O'  &&  box9.innerHTML == 'O') 
            ||
            (box1.innerHTML == 'O' && box5.innerHTML == 'O'  &&  box9.innerHTML == 'O') 
            ||
            (box3.innerHTML == 'O' && box5.innerHTML == 'O'  &&  box7.innerHTML == 'O')){
                result.innerHTML=player_o+" "+ " O" + " ARE WIN"      
    box1.classList.add('disable')
    box2.classList.add('disable')
    box3.classList.add('disable')
    box4.classList.add('disable')
    box5.classList.add('disable')
    box6.classList.add('disable')
    box7.classList.add('disable')
    box8.classList.add('disable')
    box9.classList.add('disable')
    }

    if(counter==9 &&   result.innerHTML!=player_x+" "+ " X" + " ARE WIN" && result.innerHTML!=player_o+" "+ " O" + " ARE WIN"){
        result.innerHTML='GAME DRAW'
       
    }
    
   
}


function res(){
    window.location.reload()
}
    