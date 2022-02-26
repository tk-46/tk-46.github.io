document.addEventListener("DOMContentLoaded", () => {

    const names = ['actini', 'alumin', 'americ', 'antimo', 'argon', 'arseni', 'astati', 'barium', 'berkel', 'beryll', 'bismut', 'bohriu', 'boron', 'bromin', 'cadmiu', 'calciu', 'califo', 'carbon', 'cerium', 'cesium', 'chlori', 'chromi', 'cobalt', 'copern', 'copper', 'curium', 'darmst', 'dubniu', 'dyspro', 'einste', 'erbium', 'europi', 'fermiu', 'flerov', 'fluori', 'franci', 'gadoli', 'galliu', 'german', 'gold', 'hafniu', 'hassiu', 'helium', 'holmiu', 'hydrog', 'indium', 'iodine', 'iridiu', 'iron', 'krypto', 'lantha', 'lawren', 'lead', 'lithiu', 'liverm', 'luteti', 'magnes', 'mangan', 'meitne', 'mendel', 'mercur', 'molybd', 'moscov', 'neodym', 'neon', 'neptun', 'nickel', 'nihoni', 'niobiu', 'nitrog', 'nobeli', 'oganes', 'osmium', 'oxygen', 'pallad', 'phosph', 'platin', 'pluton', 'poloni', 'potass', 'praseo', 'promet', 'protac', 'radium', 'radon', 'rheniu', 'rhodiu', 'roentg', 'rubidi', 'ruthen', 'ruther', 'samari', 'scandi', 'seabor', 'seleni', 'silico', 'silver', 'sodium', 'stront', 'sulfur', 'tantal', 'techne', 'tellur', 'tennes', 'terbiu', 'thalli', 'thoriu', 'thuliu', 'tin', 'titani', 'tungst', 'uraniu', 'vanadi', 'xenon', 'ytterb', 'yttriu', 'zinc', 'zircon'];

    createSquares();
    setHelpMenu();

    var origin = new Date('2022-02-25T00:00:00');
    var daysPassed = Math.floor((new Date() - origin) / (1000 * 3600 * 24));

    const randNums = [49, 13, 83, 70, 108, 94, 33, 116, 82, 11, 55, 40, 25, 84, 71, 56, 103, 35, 102, 34, 67, 46, 77, 64, 1, 6, 30, 45, 51, 99, 26, 54, 10, 89, 98, 47, 36, 8, 68, 7, 12, 50, 74, 87, 2, 9, 78, 76, 44, 14, 22, 5, 42, 43, 104, 15, 88, 31, 61, 75, 111, 29, 17, 73, 58, 4, 100, 97, 16, 69, 112, 59, 60, 106, 24, 114, 95, 115, 20, 85, 39, 18, 79, 81, 52, 72, 96, 41, 63, 48, 21, 23, 19, 113, 80, 38, 109, 0, 53, 28, 3, 93, 65, 62, 92, 105, 66, 107, 37, 90, 117, 101, 32, 27, 91, 86, 110, 57];
    
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