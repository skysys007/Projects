let form = document.querySelector('form')
let remval = parseInt(document.querySelector(".lastResult").textContent)
let rem = document.querySelector(".lastResult")
let p_guess_container = document.querySelector("#prev");
let prev_val = [];
console.log(p_guess_container);



let rand = Math.floor(Math.random() * 100) + 1
console.log(rand);

function updateprev(val) {
    prev_val.push(val);
    p_guess_container.textContent = prev_val;
    
    
}





    // console.log(rand);
    form.addEventListener('submit', (e) => {
        const value = parseInt(document.querySelector('#guessField').value)
        // console.log(value)
        e.preventDefault()

        if (value == rand && remval !=0) {
            alert("You guessed it correctly")
            // remval -=1
            remval = 0;
            rem.textContent = remval;
            updateprev(value);
            
            
        }else if(isNaN(value)){
            alert("Please enter a valid number");
        }else if(value != rand && remval !=0) {
            alert("You guessed it wrong");
            remval -= 1
            rem.textContent = remval
            updateprev(value);
            // updateprev();
        }else if(remval == 0){
            alert("You have exhausted yorur guesses, please start refresh the page to start again") 
        }
        else{
            alert("Please enter a valid number");
            
        }
        
        console.log(remval);   
    })

    
