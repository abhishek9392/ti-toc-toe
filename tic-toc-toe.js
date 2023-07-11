

var cells=document.querySelectorAll(".cell")
var bool="false"
var Player="X"
cells.forEach(cell => {
    cell.addEventListener("click",()=>{ 
   
        if (cell.textContent === '' ) {
            cell.textContent = Player
            color(cell);
            winner();
            secondPlayer();
            if(bool=="false"){
                computer_game(cell);
            }

        }
    })
});


function winner(){
var scores=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
]
for(var i=0;i<scores.length;i++){
    var [a,b,c]=scores[i]
    if(cells[a-1].textContent==Player && cells[b-1].textContent==Player && cells[c-1].textContent==Player){
        setTimeout(()=>{
            alert("match_ends")
            resetgame();

        },1000);
        bool="true"
        return;
    }
}
Tie();


}


function color(cell){
    if(cell.textContent=="X"){
        cell.style.color="red"
    }
    else{
        cell.style.color="blue"
    }

}


function secondPlayer(){

    if(Player=='X'){
        Player="O"
    }
    else{
        Player="X"
    }
}


function resetgame(){
    cells.forEach(cell=>{
        cell.textContent=""
    })
    bool="false"
}


function Tie(){
    var count=0
    for(var j=0;j<cells.length;j++){
        if(cells[j].textContent!==""){
            count++
        }
    }
    if(count==cells.length){
       setTimeout(()=>{
        alert("tie")
        resetgame()
 
       },1000)
    }
}


function computer_game(cell){
    var b=Math.floor(Math.random()*9)
    if(cells[b].textContent== ''){
        cells[b].textContent=Player
        color(cells[b])
        winner()
        bool="false"
        secondPlayer()
    }
    else{
        cell.textContent==''
        computer_game(cell)
    }

}
// helloss




