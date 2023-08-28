
var auto="false"
var arr=[]
var cells=document.querySelectorAll(".cell")
var bool="false"
var Player="X"
var player1="O"
// var p1=Player
cells.forEach(cell => {
    cell.addEventListener("click",()=>{ 
   
        if (cell.textContent === '' ) {
            cell.textContent = Player

            // console.log(cell.id)
            
            color(cell);
            winner();
            // winner(player1)


            // if(auto=="false"){
            //     secondPlayer();

            // }

            if(bool=="false"){
                computer_game(cell);
            }

        }
    })
});

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


function winner(){
    var arr5=[]
    var arr6=[]
    // hard()
    // console.log(Player)

    // arr.push(cell)
    // console.log(work)
// var scores=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
//     [1,4,7],
//     [2,5,8],
//     [3,6,9],
//     [1,5,9],
//     [3,5,7]
// ]
for(var i=0;i<scores.length;i++){
    var count=0
    var [a,b,c]=scores[i]
    if(cells[a-1].textContent==Player && cells[b-1].textContent==Player && cells[c-1].textContent==Player){
        setTimeout(()=>{
            alert("match_ends")
            resetgame();

        },1000);
        bool="true"
        return;
    }
    else if(cells[a-1].textContent==player1 && cells[b-1].textContent==player1 && cells[c-1].textContent==''){
        arr6.push(c-1)
    }
    else if(cells[a-1].textContent==player1 && cells[b-1].textContent=='' && cells[c-1].textContent==player1){
        arr6.push(b-1)
    }
    else if(cells[a-1].textContent=='' && cells[b-1].textContent==player1 && cells[c-1].textContent==player1){
        arr6.push(a-1)
    }
    else{
        for(var j=0;j<scores[i].length;j++){
            if(cells[scores[i][j]-1].textContent==Player){
                count++
            }
            else{
                var c=scores[i][j]
            }
        }
        if(count==2){
            if(cells[c-1].textContent==''){
                arr5.push(c)
    
                bool="true"
                // auto="true"
    
            }
        }
    }




}
Tie();

console.log(arr5)
console.log(arr5[0])
console.log(arr6)
if(arr6.length>0){
    var hh=arr6[0]
    cells[hh].textContent=player1
    color(cells[hh])
    setTimeout(()=>{
        alert("match_ends")
        resetgame();

    },1000);
    bool="true"
    return;

}
else if(arr5.length==1){
    var gg=arr5[0]
    cells[gg-1].textContent=player1
    color(cells[gg-1])


}
else if(arr5.length==2){
    var ff=arr5[1]
    cells[ff-1].textContent=player1
    color(cells[ff-1])

}
else{
    bool="false"
}


}


function color(cell){
    if(cell.textContent=="X"){
        cell.style.color="red"
    }
    else{
        cell.style.color="blue"
    }

}


// function secondPlayer(){

//     if(Player=='X'){
//         Player="O"
//     }
//     else{
//         Player="X"
//     }
// }


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


function computer_game(cell,num){
    var b=Math.floor(Math.random()*9)
    if(cells[b].textContent== ''){
            cells[b].textContent=player1
            color(cells[b])
            // winner()
            bool="false"
            // secondPlayer()

    }
    else{
        cell.textContent==''
        computer_game(cell)
    }

}
