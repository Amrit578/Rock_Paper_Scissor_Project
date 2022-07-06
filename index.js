function getName(x){
    if(x === 1){
        return "Rock";
    }
    else if(x === 2){
        return "Paper";
    }
    else{
        return "Scissor";
    }
}

// To create a function for selected items
function getResult(selectedItem){
    var computerChoice = Math.floor(Math.random() * 3) + 1;
    console.log(selectedItem,computerChoice);
    var userChoiceinString = getName(selectedItem);
    var computerChoiceinString = getName(computerChoice)
    console.log(userChoiceinString,computerChoiceinString)
    var result = "";
    if(selectedItem === 1 && computerChoice === 2){
        result = "You loose";
    } 
    else if(selectedItem === 1 && computerChoice === 3){
        result = "You win"
    }

    else if(selectedItem === 2 && computerChoice === 1){
        result = "You Win";
    } 
    else if(selectedItem === 2 && computerChoice === 3){
       result = "You loose"
    }

    else if(selectedItem === 3 && computerChoice === 1){
        result = "You loose";
    } 
    else if(selectedItem === 3 && computerChoice === 2){
        result = "You Win"
    }
    else{
        result = "Match Draw"
    }

    
    // Print a result
    document.getElementById("results").innerHTML = "Your Choice : " + userChoiceinString + "<br>Computer Choice : " + computerChoiceinString + " <br>Result is : " + result;

    // Create a function to start again Game
    const reldbtn = document.querySelector('.relod')
    reldbtn.addEventListener('click',()=>{
        window.location.reload();
    })
}