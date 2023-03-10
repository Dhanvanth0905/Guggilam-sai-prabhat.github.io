document.addEventListener("DOMContentLoaded", ()=>{
    createSquare();
    let avilablespace = 1;
    let guessWord = [[]];
    const keys = document.querySelectorAll(".keyboard-row button");
    let word = "devil" //for checking 

    let guessWordcount = 0
    
    // console.log(keys);

    
    function getCorrectWordArr(){
        const NumberofGussedword = guessWord.length;
        return guessWord[NumberofGussedword-1];

    }

    function getTilecolor(letter,index){
        const isCorrectLetter = word.includes(letter)

        if(!isCorrectLetter){
            return "rgb(58 , 58 ,60)"
        }
        const letterInthePosition = word.charAt(index)
        const isCorrectPosition = letter === letterInthePosition

        if (isCorrectPosition){
            return "rgb(255,1,0)"
        }

        return "rgb(181,159,59)"
    }

    function HandleSumbit(){
        const CurrentwordArr = getCorrectWordArr();
        if(CurrentwordArr.length!==5){

            window.alert("Word must be 5 letter ");

        
        }
        const currentword = CurrentwordArr.join("");

        const firstLetterid = guessWordcount * 5 + 1
        const interval = 200;
        CurrentwordArr.forEach((letter,index) =>{
            setTimeout(()=>{
                const tilecolor = getTilecolor(letter , index);
                const letterid = firstLetterid +index ;
                const letterel = document.getElementById(letterid);
                letterel.classList.add("animate__flipInX");
                letterel.style = `background-color:${tilecolor};border-color:${tilecolor}`;

            }, interval * index);
        }) ;
        guessWordcount +=1  ;
            
        

        if(currentword === word){
            window.alert("Congratulations")
        }

        if(guessWord.length ===6){
            window.alert("YOU LOST")
        }

        guessWord.push([]);


    }
    function updateGuessWords(letter){
        const CurrentwordArr = getCorrectWordArr();

        if(CurrentwordArr && CurrentwordArr.length<5){
            CurrentwordArr.push(letter);

            const availableEL = document.getElementById(String(avilablespace));
            avilablespace = avilablespace + 1;

            availableEL.textContent = letter;

        }
         
    }
    function createSquare(){
        const game_board = document.getElementById("board")

        for(let index = 0; index < 30; index++){
            let square = document.createElement("div");
            square.classList.add("square");
            square.classList.add("animate__animated");

            square.setAttribute("id",index+1);
            game_board.appendChild(square);
        }
    }
    function handleDelet(){
        const CurrentwordArr = getCorrectWordArr();
        const removedLetter = CurrentwordArr.pop();

        guessWord[guessWord.length - 1] = CurrentwordArr;

        const lastLetterEl = document.getElementById(String(avilablespace - 1));

        lastLetterEl.textContent = "";
        avilablespace = avilablespace - 1;

    }

    for(let i = 0; i<keys.length; i++){
        keys[i].onclick = ({target}) => {

          const letter = target.getAttribute("data-key");

          if (letter === "enter"){
            HandleSumbit();
            return;

          }

          if(letter == "del"){
            handleDelet();
            return;
          }

          updateGuessWords(letter);

        };
    }
}); 