document.addEventListener("DOMContentLoaded", () => {
    const names = [['abig', 'fer'], ['abig', 'smi'], ['alde', 'rob'], ['alex', 'sam'], ['ambe', 'jen'], ['ambe', 'mor'], ['amel', 'ind'], ['andr', 'gru'], ['andr', 'kim'], ['andr', 'tri'], ['anee', 'cho'], ['ange', 'ham'], ['ange', 'lan'], ['ann', 'fur'], ['ann', 'gol'], ['anna', 'dye'], ['anna', 'fli'], ['anna', 'mar'], ['anna', 'mea'], ['anna', 'cat'], ['anna', 'rus'], ['anne', 'bur'], ['anne', 'war'], ['anto', 'bau'], ['aree', 'sye'], ['ari', 'zit'], ['ashl', 'hud'], ['audr', 'per'], ['aust', 'dun'], ['ava', 'mcg'], ['ava', 'sal'], ['aver', 'bri'], ['aver', 'sti'], ['axel', 'pat'], ['bail', 'pez'], ['barc', 'win'], ['bell', 'car'], ['benj', 'doy'], ['benj', 'far'], ['benj', 'lag'], ['benj', 'rob'], ['benj', 'tra'], ['benn', 'yue'], ['bern', 'mcm'], ['beth', 'man'], ['brad', 'har'], ['brea', 'fau'], ['bren', 'sta'], ['bric', 'yui'], ['brog', 'lan'], ['broo', 'bet'], ['broo', 'fox'], ['broo', 'sny'], ['broo', 'tho'], ['cait', 'llo'], ['cale', 'pec'], ['call', 'par'], ['came', 'jor'], ['came', 'rob'], ['cami', 'van'], ['care', 'str'], ['caro', 'boo'], ['caro', 'fur'], ['carr', 'col'], ['carr', 'del'], ['cart', 'luc'], ['cart', 'whe'], ['cath', 'fei'], ['cath', 'gus'], ['cath', 'mcc'], ['chad', 'byl'], ['chad', 'les'], ['char', 'fay'], ['char', 'hop'], ['char', 'rus'], ['char', 'vio'], ['char', 'zit'], ['chen', 'doa'], ['chlo', 'pau'], ['chlo', 'swa'], ['chri', 'bro'], ['chri', 'cou'], ['chri', 'fit'], ['chri', 'nel'], ['chri', 'wat'], ['clai', 'vu'], ['clay', 'whe'], ['clem', 'lee'], ['cole', 'hou'], ['cole', 'hus'], ['conn', 'ale'], ['conn', 'bot'], ['conn', 'pur'], ['conn', 'rho'], ['coop', 'caz'], ['coop', 'poo'], ['coop', 'ree'], ['coop', 'tys'], ['core', 'bro'], ['curt', 'how'], ['dani', 'che'], ['dani', 'lip'], ['davi', 'ale'], ['davi', 'boo'], ['davi', 'gla'], ['davi', 'kid'], ['davi', 'mun'], ['davi', 'ott'], ['davi', 'rez'], ['davi', 'smy'], ['daws', 'mon'], ['denn', 'man'], ['dhan', 'pat'], ['dyla', 'def'], ['edwa', 'ber'], ['edwa', 'pat'], ['eliz', 'ada'], ['eliz', 'bly'], ['eliz', 'dij'], ['eliz', 'hop'], ['eliz', 'pie'], ['eliz', 'sto'], ['ella', 'fer'], ['emer', 'lan'], ['emer', 'mar'], ['emil', 'bea'], ['emil', 'bri'], ['emil', 'gra'], ['emma', 'cla'], ['emma', 'fix'], ['emma', 'hug'], ['emma', 'pro'], ['emme', 'spe'], ['eric', 'acr'], ['eric', 'zim'], ['esth', 'dis'], ['etha', 'eve'], ['etha', 'sta'], ['evan', 'mit'], ['fost', 'kim'], ['fred', 'war'], ['gabr', 'har'], ['gail', 'sav'], ['garr', 'bir'], ['gavi', 'gos'], ['gavi', 'wan'], ['geor', 'bun'], ['gera', 'tho'], ['gia', 'pat'], ['greg', 'mon'], ['gret', 'sco'], ['hann', 'str'], ['harr', 'ale'], ['harr', 'bro'], ['harr', 'hud'], ['heat', 'kem'], ['hele', 'sch'], ['henr', 'cli'], ['henr', 'mar'], ['henr', 'pat'], ['hold', 'nel'], ['ian', 'bur'], ['ian', 'fit'], ['isab', 'bur'], ['isab', 'leo'], ['jack', 'cla'], ['jack', 'gro'], ['jack', 'tig'], ['jaco', 'bak'], ['jaco', 'cre'], ['jaco', 'ezi'], ['jaco', 'mil'], ['jame', 'ben'], ['jame', 'ber'], ['jame', 'col'], ['jame', 'den'], ['jame', 'lon'], ['jame', 'sav'], ['jame', 'sca'], ['jame', 'tho'], ['jame', 'wil'], ['jasm', 'lec'], ['jayc', 'wil'], ['jayd', 'moo'], ['jeff', 'dan'], ['jenn', 'sco'], ['jenn', 'vaz'], ['jenn', 'yua'], ['jere', 'big'], ['jess', 'ezi'], ['jess', 'fin'], ['jett', 'fal'], ['jill', 'gho'], ['joan', 'ham'], ['john', 'bun'], ['john', 'che'], ['john', 'cop'], ['john', 'cra'], ['john', 'fer'], ['john', 'fol'], ['john', 'gib'], ['john', 'gru'], ['john', 'lin'], ['john', 'mee'], ['john', 'mur'], ['john', 'pas'], ['john', 'sta'], ['jona', 'abr'], ['jord', 'epp'], ['jose', 'bak'], ['jose', 'cla'], ['juan', 'bae'], ['juli', 'bur'], ['juli', 'hoo'], ['juli', 'wai'], ['kady', 'joh'], ['kai', 'wan'], ['kaiy', 'bur'], ['kate', 'aue'], ['kate', 'gue'], ['kath', 'dav'], ['kath', 'fer'], ['kath', 'jar'], ['kath', 'lit'], ['kayl', 'san'], ['kayl', 'wil'], ['keir', 'man'], ['kell', 'dew'], ['kend', 'pag'], ['kenn', 'whi'], ['khus', 'rav'], ['kirs', 'ack'], ['knox', 'gar'], ['kris', 'hou'], ['kris', 'tan'], ['lanc', 'sny'], ['laur', 'sch'], ['laur', 'wei'], ['layl', 'com'], ['leah', 'ave'], ['lee', 'she'], ['leon', 'del'], ['lewi', 'aff'], ['liam', 'sul'], ['lila', 'riv'], ['lill', 'aue'], ['lill', 'sav'], ['lily', 'mer'], ['lind', 'gor'], ['lisa', 'mar'], ['loga', 'gal'], ['loga', 'lyl'], ['loga', 'man'], ['loga', 'pau'], ['loga', 'sim'], ['luca', 'kna'], ['luci', 'ave'], ['lucy', 'bau'], ['luke', 'bor'], ['luke', 'iac'], ['lynn', 'pau'], ['mack', 'pet'], ['mack', 'sav'], ['mack', 'wes'], ['mada', 'mej'], ['made', 'cam'], ['madi', 'gal'], ['madi', 'kay'], ['marg', 'man'], ['marg', 'mar'], ['mari', 'dua'], ['mari', 'mck'], ['mari', 'moo'], ['mari', 'sod'], ['mary', 'tod'], ['mary', 'ste'], ['maso', 'prz'], ['matt', 'cam'], ['matt', 'kon'], ['matt', 'lil'], ['matt', 'ott'], ['matt', 'rob'], ['matt', 'war'], ['mcke', 'pan'], ['mega', 'hal'], ['mega', 'smi'], ['megh', 'sav'], ['meli', 'dig'], ['meri', 'acr'], ['mica', 'bau'], ['mich', 'car'], ['mich', 'pfa'], ['mich', 'vaz'], ['mill', 'car'], ['mill', 'eve'], ['mitc', 'moo'], ['nadi', 'tho'], ['nanc', 'cha'], ['nata', 'fow'], ['nata', 'nau'], ['nata', 'taj'], ['nath', 'del'], ['nath', 'lev'], ['neil', 'duf'], ['noah', 'how'], ['noel', 'cha'], ['nola', "o'b"], ['nyla', 'gor'], ['oliv', 'col'], ['oliv', 'gal'], ['oliv', 'jon'], ['oliv', 'lev'], ['oliv', 'miz'], ['oliv', 'pet'], ['owen', 'gar'], ['owen', 'joh'], ['owen', 'yeu'], ['page', 'syk'], ['patr', 'aff'], ['paul', 'tru'], ['plyl', 'hun'], ['quin', 'car'], ['race', 'foy'], ['rach', 'buc'], ['rach', 'the'], ['reag', 'ban'], ['reag', 'mcg'], ['reag', 'sza'], ['rebe', 'aue'], ['rebe', 'sch'], ['reec', 'new'], ['reed', 'ram'], ['rhea', 'kha'], ['rich', 'hop'], ['rich', 'obe'], ['rich', 'pec'], ['rile', 'mce'], ['robe', 'cal'], ['robe', 'fle'], ['roy', 'new'], ['ruby', 'gar'], ['ryan', 'eva'], ['ryan', 'guz'], ['ryan', 'sza'], ['ryde', 'bet'], ['ryla', 'gos'], ['sach', 'kon'], ['sage', 'amb'], ['sama', 'fis'], ['sama', 'mcd'], ['samu', 'bib'], ['samu', 'shu'], ['samu', 'str'], ['samu', 'tig'], ['samu', 'tra'], ['saoi', 'dow'], ['sara', 'baz'], ['sara', 'goo'], ['sara', 'jac'], ['sara', 'mor'], ['sash', 'gil'], ['sava', 'tin'], ['seam', 'rob'], ['sean', 'dug'], ['sean', 'tru'], ['sean', 'wet'], ['seld', 'fiv'], ['shaw', 'ott'], ['shel', 'bev'], ['shel', 'stu'], ['shun', 'zhe'], ['sidd', 'seh'], ['sien', 'fre'], ['sofi', 'tji'], ['soph', 'kni'], ['soph', 'ott'], ['soph', 'pat'], ['soph', 'pol'], ['soph', 'tho'], ['sriv', 'hat'], ['step', 'mon'], ['stev', 'gol'], ['stin', 'mos'], ['susa', 'guz'], ['sydn', 'joy'], ['sydn', 'sim'], ['sydn', 'ves'], ['tal', 'zac'], ['tana', 'pat'], ['tara', 'jee'], ['tara', 'tav'], ['tayl', 'boo'], ['tayl', 'win'], ['thom', 'har'], ['thom', 'tan'], ['till', 'dal'], ['timo', 'but'], ['tom', 'duq'], ['toye', 'law'], ['trey', 'cus'], ['troy', 'whi'], ['tuck', 'gad'], ['tyle', 'cas'], ['van', 'dea'], ['vari', 'sap'], ['vero', 'ver'], ['vict', 'kau'], ['vign', 'akk'], ['virg', 'gil'], ['virg', 'new'], ['walt', 'fra'], ['warr', 'war'], ['wend', 'liv'], ['whit', 'col'], ['will', 'all'], ['will', 'bar'], ['will', 'col'], ['will', 'cro'], ['will', 'den'], ['will', 'hna'], ['will', 'hop'], ['will', 'lag'], ['will', 'war'], ['will', 'whe'], ['wyat', 'jan'], ['yasm', 'dan'], ['zach', 'har'], ['zach', 'sto'], ['zahi', 'gri'], ['zoe', 'duk'], ['zoe', 'jon'], ['zoey', 'alp']]

    createSquares();
    setHelpMenu();

    var origin = new Date('2022-02-23T00:00:00');
    var daysPassed = Math.floor((new Date() - origin) / (1000 * 3600 * 24));

    const randNums = [210, 190, 256, 217, 164, 205, 289, 60, 320, 321, 38, 246, 90, 294, 20, 231, 331, 79, 431, 430, 52, 81, 380, 300, 357, 224, 42, 116, 392, 58, 89, 226, 259, 204, 199, 68, 145, 264, 77, 254, 29, 394, 325, 64, 306, 278, 55, 244, 379, 326, 13, 422, 395, 0, 247, 27, 273, 409, 147, 230, 211, 313, 330, 391, 168, 113, 103, 318, 360, 263, 44, 28, 178, 104, 127, 37, 163, 12, 75, 272, 159, 322, 144, 143, 303, 367, 225, 100, 432, 43, 257, 413, 399, 86, 32, 233, 315, 328, 214, 102, 305, 120, 71, 428, 412, 227, 109, 91, 311, 248, 167, 406, 314, 153, 200, 191, 46, 274, 323, 338, 84, 356, 317, 344, 335, 182, 137, 410, 423, 420, 19, 378, 275, 59, 47, 418, 310, 101, 271, 287, 76, 241, 63, 402, 216, 53, 115, 148, 243, 414, 25, 353, 160, 24, 166, 146, 213, 119, 340, 285, 125, 95, 150, 398, 349, 375, 250, 220, 372, 279, 262, 316, 369, 193, 82, 346, 376, 291, 194, 350, 149, 169, 424, 151, 252, 343, 35, 352, 136, 301, 161, 121, 215, 416, 240, 292, 288, 396, 401, 98, 382, 192, 255, 26, 134, 266, 70, 270, 354, 50, 355, 110, 208, 139, 337, 388, 427, 34, 114, 309, 69, 229, 245, 8, 286, 299, 387, 72, 80, 141, 51, 118, 16, 238, 78, 171, 206, 36, 242, 358, 393, 308, 172, 269, 381, 17, 9, 15, 57, 175, 302, 135, 187, 359, 207, 94, 336, 49, 258, 88, 361, 18, 155, 281, 329, 295, 33, 45, 11, 373, 66, 297, 351, 405, 234, 276, 62, 7, 93, 10, 239, 411, 417, 265, 185, 92, 3, 184, 277, 345, 364, 48, 425, 142, 140, 14, 260, 280, 421, 339, 195, 124, 385, 371, 304, 219, 6, 56, 404, 374, 223, 319, 83, 253, 261, 157, 4, 123, 209, 282, 403, 228, 249, 298, 363, 203, 202, 348, 341, 162, 87, 386, 284, 30, 307, 183, 212, 383, 22, 251, 312, 218, 236, 201, 97, 170, 61, 419, 132, 173, 189, 370, 232, 377, 366, 85, 176, 31, 390, 415, 156, 293, 426, 296, 362, 237, 221, 235, 347, 130, 268, 158, 283, 400, 179, 333, 129, 368, 342, 2, 112, 39, 138, 429, 96, 407, 105, 107, 324, 384, 126, 154, 5, 117, 180, 222, 67, 21, 177, 365, 54, 40, 106, 334, 1, 186, 397, 267, 108, 197, 133, 74, 73, 65, 111, 389, 408, 122, 131, 198, 181, 41, 327, 23, 165, 332, 99, 188, 196, 152, 290, 128, 174];
    
    // Get an array of arrays [[first, last]]
    const keys = document.querySelectorAll('.keyboard-row button');
    let guessedFirst = [];
    let guessedLast = [];
    var timeGear = "";
    var timeGear1 = "";

    let onFirst = true;
    const numPossible = 6;
    let done = false;
    let guessedNum = 0;
    const greenColor = "rgb(15, 92, 10)";
    const yellowColor = "rgb(207, 221, 6)";
    const greyColor = "rgb(3, 30, 68)";
    const alertBox = document.getElementById("alert");
    const helpMenu = document.getElementById("help-menu");


    const name = names[randNums[daysPassed]];
    const first = name[0];
    const last = name[1];
    const word = first.padEnd(4) + last.padEnd(3);

    function updateGuessed(letter) {
        if (guessedFirst.length + guessedLast.length < 7 && !(!onFirst && guessedLast.length > 2)) {

            if (guessedFirst.length >= 4) {
                onFirst = false;
                document.getElementById("next").textContent = "<";
            } 

            if (onFirst) {     
                letterEl = document.getElementById(String(guessedNum * 7 + guessedFirst.length + 1)).textContent = letter;
                guessedFirst.push(letter);
            } else {
                letterEl = document.getElementById(String(guessedNum * 7 + guessedLast.length + 5)).textContent = letter;
                guessedLast.push(letter);
            }
        }  
    }

    function searchList(left, right, word) {
        if (right >= left) {
            mid = left + Math.floor((right-left) / 2);

            nameArr = names[mid];
            checkName = nameArr[0].padEnd(4) + nameArr[1].padEnd(3);
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
        
        guess = guessedFirst.join('').padEnd(4) + guessedLast.join('').padEnd(3)
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
        for (var i = guessedFirst.length; i < 4; i++) {
            guessedFirst.push(" ");
        }
        for (var i = guessedLast.length; i < 3; i++) {
            guessedLast.push(" ");
        }

        const currentWordArr = guessedFirst.concat(guessedLast);

        const interval = 180;

        let numTrue = 0;

        const letterCols = [];
        guessedNum ++;

        for (let i = 0; i < currentWordArr.length; i++) {
            letterCols[i] = greyColor;
        }

        // Check results
        for (let j = 0; j < word.length; j++) {
            if (currentWordArr[j] == word.charAt(j)) {
                letterCols[j] = greenColor;
                numTrue++;
                continue;
            }

            for (let i = 0; i < currentWordArr.length; i++) {
                if (currentWordArr[i] == word.charAt(j)){
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
                const letterEl = document.getElementById((guessedNum - 1) * 7 + 1 + i);

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
            
            alertBox.textContent = `You're out of guesses. The name was ${first.toUpperCase()} ${last.toUpperCase()}`;
            alertBox.classList = 'error fadeIn';
            alertBox.style.display = "initial";

            done = true;
            return;
        }

        // Fix the keyboard... do it after so we don't worry about timing
        currentWordArr.forEach((letter, i) => {
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

        guessedFirst = [];
        guessedLast = [];
        onFirst = true;
        document.getElementById("next").textContent = ">";
        
    }

    function deleteLetter() {

        if(guessedFirst.length > 0 && (onFirst || guessedLast.length < 1)) {

            document.getElementById(String(guessedNum * 7 + guessedFirst.length)).textContent = "";

            guessedFirst.pop();

        } else if (guessedLast.length > 0) {

            onFirst = guessedLast.length == 1;

            document.getElementById(String(guessedNum * 7 + guessedLast.length + 4)).textContent = "";

            guessedLast.pop();
        }
    }

    function createSquares() {
        const firstGrid = document.getElementById("firstgrid");
        const lastGrid = document.getElementById("lastgrid");

        for (let i = 0; i < 7 * 6; i++) {
            let block = document.createElement("div");
            block.classList.add("block");
            block.classList.add("animate__animated");

            block.setAttribute("id", i + 1);

            if (i % 7 < 4) {
                firstGrid.appendChild(block);
            } else {
                lastGrid.appendChild(block);
            }
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
            } else if (key == "next") {
                if (onFirst) {
                    onFirst = false;
                    document.getElementById("next").textContent = "<";
                                    
                } else if (guessedFirst.length < 4) {
                    onFirst = true;
                    document.getElementById("next").textContent = ">";
                } 
                return;
            }
            updateGuessed(key);
        };
    }
});