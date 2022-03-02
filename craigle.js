document.addEventListener("DOMContentLoaded", () => {

    const names = ['actini', 'alumin', 'americ', 'antimo', 'argon', 'arseni', 'astati', 'barium', 'berkel', 'beryll', 'bismut', 'bohriu', 'boron', 'bromin', 'cadmiu', 'calciu', 'califo', 'carbon', 'cerium', 'cesium', 'chlori', 'chromi', 'cobalt', 'copern', 'copper', 'curium', 'darmst', 'dubniu', 'dyspro', 'einste', 'erbium', 'europi', 'fermiu', 'flerov', 'fluori', 'franci', 'gadoli', 'galliu', 'german', 'gold', 'hafniu', 'hassiu', 'helium', 'holmiu', 'hydrog', 'indium', 'iodine', 'iridiu', 'iron', 'krypto', 'lantha', 'lawren', 'lead', 'lithiu', 'liverm', 'luteti', 'magnes', 'mangan', 'meitne', 'mendel', 'mercur', 'molybd', 'moscov', 'neodym', 'neon', 'neptun', 'nickel', 'nihoni', 'niobiu', 'nitrog', 'nobeli', 'oganes', 'osmium', 'oxygen', 'pallad', 'phosph', 'platin', 'pluton', 'poloni', 'potass', 'praseo', 'promet', 'protac', 'radium', 'radon', 'rheniu', 'rhodiu', 'roentg', 'rubidi', 'ruthen', 'ruther', 'samari', 'scandi', 'seabor', 'seleni', 'silico', 'silver', 'sodium', 'stront', 'sulfur', 'tantal', 'techne', 'tellur', 'tennes', 'terbiu', 'thalli', 'thoriu', 'thuliu', 'tin', 'titani', 'tungst', 'uraniu', 'vanadi', 'xenon', 'ytterb', 'yttriu', 'zinc', 'zircon'];

    createSquares();
    setHelpMenu();

    var origin = new Date('2022-02-25T00:00:00');
    var daysPassed = Math.floor((new Date() - origin) / (1000 * 3600 * 24));

    const randNums = [49, 13, 83, 70, 108, 94, 33, 116, 82, 11, 55, 40, 25, 84, 71, 56, 103, 35, 102, 34, 67, 46, 77, 64, 1, 6, 30, 45, 51, 99, 26, 54, 10, 89, 98, 47, 36, 8, 68, 7, 12, 50, 74, 87, 2, 9, 78, 76, 44, 14, 22, 5, 42, 43, 104, 15, 88, 31, 61, 75, 111, 29, 17, 73, 58, 4, 100, 97, 16, 69, 112, 59, 60, 106, 24, 114, 95, 115, 20, 85, 39, 18, 79, 81, 52, 72, 96, 41, 63, 48, 21, 23, 19, 113, 80, 38, 109, 0, 53, 28, 3, 93, 65, 62, 92, 105, 66, 107, 37, 90, 117, 101, 32, 27, 91, 86, 110, 57, 29, 51, 87, 43, 59, 25, 24, 56, 47, 62, 2, 113, 107, 114, 68, 53, 55, 7, 22, 4, 115, 86, 91, 41, 109, 90, 77, 66, 30, 44, 6, 102, 40, 99, 31, 13, 18, 1, 27, 82, 32, 12, 96, 49, 73, 103, 65, 76, 34, 46, 67, 74, 93, 23, 81, 42, 72, 19, 105, 17, 95, 8, 100, 3, 48, 71, 50, 97, 61, 63, 75, 60, 28, 45, 85, 10, 26, 98, 78, 110, 35, 38, 70, 106, 9, 14, 79, 80, 89, 0, 94, 92, 111, 36, 83, 57, 116, 33, 69, 52, 108, 15, 16, 21, 54, 20, 104, 11, 39, 84, 5, 101, 58, 37, 88, 112, 64, 32, 19, 46, 96, 104, 31, 5, 45, 80, 78, 27, 76, 54, 64, 28, 41, 10, 74, 81, 24, 34, 73, 18, 71, 7, 56, 85, 65, 72, 102, 25, 116, 115, 93, 89, 86, 55, 62, 75, 49, 66, 112, 109, 95, 63, 11, 50, 33, 53, 101, 92, 60, 39, 20, 52, 36, 3, 42, 88, 44, 84, 2, 107, 35, 67, 48, 100, 1, 57, 14, 79, 0, 69, 106, 16, 29, 77, 97, 91, 94, 26, 114, 22, 13, 70, 98, 21, 15, 17, 12, 103, 30, 108, 83, 58, 90, 87, 113, 9, 61, 111, 23, 4, 82, 8, 51, 40, 6, 105, 37, 38, 59, 99, 47, 68, 43, 110, 85, 60, 113, 77, 74, 91, 68, 0, 94, 56, 71, 57, 52, 79, 23, 66, 112, 86, 106, 7, 114, 41, 109, 73, 110, 51, 26, 24, 62, 100, 21, 46, 76, 102, 64, 17, 16, 35, 54, 80, 99, 11, 95, 36, 98, 55, 82, 9, 18, 33, 38, 108, 4, 20, 78, 37, 40, 63, 103, 5, 97, 1, 115, 53, 67, 88, 12, 96, 31, 65, 50, 49, 89, 83, 42, 59, 90, 58, 39, 116, 10, 48, 8, 25, 30, 111, 107, 6, 47, 15, 19, 84, 104, 2, 70, 75, 61, 92, 32, 105, 101, 45, 29, 3, 69, 72, 34, 43, 22, 13, 14, 93, 87, 28, 44, 27, 81];
    
    // Get an array of arrays [[first, last]]
    const keys = document.querySelectorAll('.keyboard-row button');
    let guessed = [];
    var timeGear = "";
    var timeGear1 = "";

    const numPossible = 6;
    let done = false;
    let guessedNum = 0;
    const greenColor = "rgb(15, 92, 10)";
    const yellowColor = "rgb(207, 221, 6)";
    const greyColor = "rgb(3, 30, 68)";
    const alertBox = document.getElementById("alert");
    const helpMenu = document.getElementById("help-menu");

    const toPrint = names[randNums[daysPassed]];
    const word = toPrint.padEnd(6);

    document.addEventListener("keydown", function(event) {
 
        // Check event keycode for what to do
        if (done) {
            return;
        }

        const key = event.key.toLowerCase();

        // Check that a useable key was entered
        if (key === "backspace") {
            deleteLetter(); 
            return;
        } else if (key === "enter") {
            submitWord();
            return;
        } else if (key.length === 1 && key.match(/[a-z]/i) || key === " ") {
            updateGuessed(key);
        } 

    });


    function updateGuessed(letter) {
        if (guessed.length < 6) {
            letterEl = document.getElementById(String(guessedNum * 6 + guessed.length + 1)).textContent = letter;
            guessed.push(letter);
        }  
    }

    function searchList(left, right, word) {
        if (right >= left) {
            mid = left + Math.floor((right-left) / 2);

            checkName = names[mid].padEnd(6);
            if (checkName === word) {
                return true;
            }

            if (checkName > word) {
                return searchList(left, mid - 1, word);
            }
            return searchList(mid + 1, right, word)
        }

        // not found
        return false;
    }

    function submitWord() {
        
        guess = guessed.join('').padEnd(6);
        // CHECK IF NAME IS ON THE LAST
        if (!searchList(0, names.length - 1, guess)) {
            alertBox.textContent = "Name not on list";
            alertBox.classList = 'error fadeIn';
            alertBox.style.display = "initial";

            
            timeGear = setTimeout(() => {
                alertBox.classList = 'error fadeOut';
            }, 4500);
            timeGear1 = setTimeout(() => {
                alertBox.style.display = "none";
            }, 5500);

            return;
        }

        // Fill in the two name arrays with empty stuff
        for (var i = guessed.length; i < 6; i++) {
            guessed.push(" ");
        }

        const interval = 180;

        let numTrue = 0;

        const letterCols = [];
        guessedNum ++;

        for (let i = 0; i < guessed.length; i++) {
            letterCols[i] = greyColor;
        }

        // Check results
        for (let j = 0; j < word.length; j++) {
            if (guessed[j] == word.charAt(j)) {
                letterCols[j] = greenColor;
                numTrue++;
                continue;
            }

            for (let i = 0; i < guessed.length; i++) {
                if (guessed[i] == word.charAt(j)){
                    if (letterCols[i] == yellowColor || letterCols[i] == greenColor ) {
                        continue; // already had it
                    }
                        letterCols[i] = yellowColor;
                        break;
                }
                }
            }

        letterCols.forEach((tileColor, i) => {
            setTimeout(() => {
                const letterEl = document.getElementById((guessedNum - 1) * 6 + 1 + i);

                letterEl.classList.add("animate__flipInX");
                letterEl.style=`background-color:${tileColor};border-color:${tileColor}`;
            }, interval * i);
        });

        if (numTrue >= word.length) {
            // they won
            // ADD CONFETTI ==> blue and orange?

            clearTimeout(timeGear);
            clearTimeout(timeGear1);

            alertBox.textContent = "Congrats! You got it!";
            alertBox.classList = 'good fadeIn';
            alertBox.style.display = "initial";
            startAnimation();
            done = true;
            return;
        }
        
        if (guessedNum >= numPossible) {

            clearTimeout(timeGear);
            clearTimeout(timeGear1);
            
            alertBox.textContent = `You're out of guesses. The name was ${toPrint.toUpperCase()}`;
            alertBox.classList = 'error fadeIn';
            alertBox.style.display = "initial";

            done = true;
            return;
        }

        // Fix the keyboard... do it after so we don't worry about timing
        guessed.forEach((letter, i) => {
            const keyEl = document.getElementById(letter);
            if (keyEl.style.backgroundColor === greenColor) {
                return;
            } else  if (letter == word.charAt(i)) {
                keyEl.style.backgroundColor = greenColor;
            } else if (word.includes(letter)) {
                keyEl.style.backgroundColor = yellowColor;
            } else {
                keyEl.style.backgroundColor = greyColor;
            }
        });

        guessed = [];
        
    }

    function deleteLetter() {

        if(guessed.length > 0) {

            document.getElementById(String(guessedNum * 6 + guessed.length)).textContent = "";

            guessed.pop();

        } 
    }

    function createSquares() {
        const grid = document.getElementById("grid-craigle");

        for (let i = 0; i < 6 * 6; i++) {
            let block = document.createElement("div");
            block.classList.add("block");
            block.classList.add("animate__animated");
            block.classList.add("craigle-block");

            block.setAttribute("id", i + 1);

            grid.appendChild(block);
            
        }
    }

    function setHelpMenu() {
        document.getElementById("help-button").onclick = function () {
            helpMenu.style.display = "block";
        };

        document.getElementById("close").onclick = function() {
            helpMenu.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == helpMenu) {
              helpMenu.style.display = "none";
            }
          }
    }

    for (let i = 0; i < keys.length; i++) {
        keys[i].onclick = ({ target }) => {
            if (done) {
                return;
            }
            const key = target.getAttribute("data-key");

            if (key === "enter") {
                submitWord();
                return;
            } 

            if (key === "del") {
                deleteLetter(); 
                return;
            } 
            
            updateGuessed(key);
        };
    }
});