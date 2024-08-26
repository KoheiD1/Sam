function loadingAnimation() {
    const originalWord = "Welcome To The Math Zone...";
    var p = document.getElementById("loadtext");

    if (p) {
        for (let i = 0; i < originalWord.length; i++) {
            setTimeout(function () {
                if (i < originalWord.length - 2) {
                    var partialWord = originalWord.slice(0, i + 1) + "_";
                    p.innerHTML = partialWord;
                } else {
                    var partialWord = originalWord.slice(0, i + 1);
                    p.innerHTML = partialWord;
                }

                if (i === originalWord.length - 1) {
                    loadingAnimation2();
                }
            }, 100 * i);
        }
    } else {
        console.error("Element with id 'loadtext' not found");
    }
}

function loadingAnimation2() {
    const inputWord = "Do you wish to continue? (y/n)";
    var p2 = document.getElementById("userin");
    var userinput = document.getElementById("userInput");
    var userInputValue;

    if (p2) {
        for (let i = 0; i < inputWord.length; i++) {
            setTimeout(function () {
                if (i < inputWord.length - 2) {
                    var partialWord = inputWord.slice(0, i + 1) + "_";
                    p2.innerHTML = partialWord;
                } else {
                    var partialWord = inputWord.slice(0, i + 1);
                    p2.innerHTML = partialWord;
                }

                if (i === inputWord.length - 1) {
                    userinput.focus();

                    userinput.addEventListener("input", function () {
                        userInputValue = userinput.value;

                        })
                        
                        var slowCounter = 1;

                        this.addEventListener('keypress', event => {
                            if (event.keyCode == 13) {
                                localStorage.setItem("userInput", userInputValue);
                                console.log("THIS FUNCTION is WORKING")
                                // Clear the input field
                                userinput.value = "";
                                

                                switch(userInputValue){

                                    case 'y':
                                        window.location.href = "page/landing.html"
                                        break;
                                    case 'n':
                                        Swal.fire({
                                            icon: "error",
                                            title: "TRY AGAIN!!",
                                            showConfirmButton: false,
                                            allowEnterKey: true,
                                            timer: 750,
                                          });
                                    break;
                                    default:
                                        

                                          if((slowCounter % 2) !== 0){
                                            Swal.fire({
                                                icon: "error",
                                                title: "Are you SLOW?",
                                                showConfirmButton: false,
                                                allowEnterKey: true,
                                                timer: 1000,
                                              });
                                              slowCounter++
                                          }
                                          
                                          else{
                                            Swal.fire({
                                                icon: "error",
                                                title: "Seriously?",
                                                showConfirmButton: false,
                                                allowEnterKey: true,
                                                timer: 1000,
                                              });
                                              slowCounter++
                                          }

                                }
                            }
                          })

                      
                }
            }, 100 * i);
        }
    } else {
        console.error("Element with id 'userin' not found");
    }
}