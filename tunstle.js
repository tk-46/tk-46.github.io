document.addEventListener("DOMContentLoaded", () => {
    const edition = getParameterByName("edition");

    let names = [[]];
    let randNums = [];

    createSquares();
    setHelpMenu();

    var origin = new Date('2022-02-26T00:00:00');
    var daysPassed = Math.floor((new Date() - origin) / (1000 * 3600 * 24));
    
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

    switch (edition) {
        case 'teacher':
            names = [['ambe', 'jen'], ['ari', 'zit'], ['aust', 'dun'], ['bern', 'mcm'], ['beth', 'man'], ['brad', 'har'], ['broo', 'fox'], ['cath', 'mcc'], ['chad', 'byl'], ['char', 'fay'], ['char', 'zit'], ['chen', 'doa'], ['chri', 'nel'], ['chri', 'wat'], ['davi', 'kid'], ['davi', 'rez'], ['denn', 'man'], ['edwa', 'pat'], ['eliz', 'dij'], ['eliz', 'hop'], ['eric', 'acr'], ['esth', 'dis'], ['garr', 'bir'], ['geor', 'bun'], ['harr', 'hud'], ['heat', 'kem'], ['jame', 'den'], ['jenn', 'sco'], ['john', 'cra'], ['john', 'lin'], ['kell', 'dew'], ['knox', 'gar'], ['lewi', 'aff'], ['lind', 'gor'], ['lisa', 'pri'], ['lynn', 'pau'], ['marg', 'man'], ['marg', 'mar'], ['mari', 'moo'], ['mary', 'gla'], ['matt', 'lil'], ['matt', 'rob'], ['mega', 'hal'], ['mich', 'pfa'], ['nata', 'nau'], ['neil', 'duf'], ['rich', 'obe'], ['rich', 'pec'], ['robe', 'cal'], ['robe', 'fle'], ['roy', 'new'], ['sara', 'goo'], ['sean', 'dug'], ['sean', 'wet'], ['shaw', 'ott'], ['step', 'mon'], ['stev', 'gol'], ['tayl', 'win'], ['tom', 'duq'], ['warr', 'war'], ['wend', 'liv']];
            randNums = [20, 54, 45, 55, 49, 20, 32, 5, 30, 28, 41, 45, 41, 30, 34, 33, 17, 26, 3, 50, 15, 42, 35, 21, 9, 49, 25, 41, 11, 58, 23, 20, 12, 10, 3, 40, 11, 22, 24, 27, 56, 26, 16, 14, 26, 2, 11, 37, 8, 4, 28, 16, 26, 46, 5, 17, 7, 16, 25, 36, 29, 0, 6, 0, 42, 30, 13, 29, 32, 60, 17, 17, 2, 45, 37, 56, 18, 28, 57, 35, 26, 40, 24, 32, 47, 49, 17, 23, 58, 10, 7, 6, 10, 31, 50, 2, 31, 47, 0, 47, 58, 19, 51, 36, 4, 25, 30, 10, 52, 45, 33, 14, 34, 24, 14, 38, 31, 47, 60, 8, 7, 34, 33, 10, 6, 38, 57, 19, 14, 2, 8, 38, 27, 11, 22, 39, 27, 42, 34, 56, 9, 17, 16, 43, 1, 47, 32, 28, 60, 19, 3, 4, 9, 55, 32, 31, 30, 36, 53, 22, 54, 13, 53, 42, 33, 21, 51, 28, 13, 31, 54, 47, 24, 37, 40, 6, 12, 15, 33, 39, 39, 8, 42, 9, 10, 15, 42, 1, 56, 43, 58, 56, 8, 4, 1, 3, 24, 37, 55, 1, 21, 53, 36, 57, 48, 49, 38, 20, 37, 28, 51, 48, 30, 46, 36, 5, 36, 22, 23, 13, 54, 23, 18, 59, 43, 2, 38, 51, 41, 26, 29, 8, 31, 49, 59, 53, 16, 43, 40, 43, 1, 48, 44, 25, 55, 60, 20, 0, 58, 40, 0, 57, 53, 2, 4, 27, 11, 14, 24, 44, 60, 13, 34, 51, 34, 37, 50, 39, 18, 29, 7, 0, 48, 21, 19, 52, 18, 35, 44, 23, 56, 45, 21, 13, 11, 52, 12, 39, 21, 52, 16, 59, 15, 59, 52, 52, 12, 35, 29, 60, 22, 7, 15, 9, 53, 25, 58, 55, 6, 14, 5, 1, 44, 19, 18, 5, 27, 7, 32, 50, 29, 20, 38, 35, 44, 9, 5, 4, 12, 54, 57, 50, 49, 3, 22, 48, 40, 23, 59, 18, 54, 46, 48, 45, 15, 41, 41, 59, 50, 44, 3, 35, 57, 33, 12, 6, 55, 46, 19, 27, 51, 46, 39, 46, 25, 43];
            document.getElementById("title").textContent += " - Teachers"
            break;
        case 'sophomore':
            names = [['abig', 'smi'], ['ambe', 'mor'], ['andr', 'kim'], ['ann', 'fur'], ['ann', 'gol'], ['aree', 'sye'], ['ava', 'mcg'], ['ava', 'sal'], ['berk', 'new'], ['bree', 'fau'], ['bric', 'yui'], ['broo', 'bet'], ['care', 'boo'], ['carr', 'col'], ['carr', 'del'], ['cart', 'luc'], ['cart', 'whe'], ['cate', 'gus'], ['char', 'hop'], ['char', 'vio'], ['chlo', 'pau'], ['chri', 'bro'], ['cole', 'hou'], ['conn', 'ale'], ['coop', 'tys'], ['dyla', 'def'], ['emer', 'mar'], ['emil', 'bea'], ['etha', 'eve'], ['gret', 'sco'], ['hann', 'str'], ['hold', 'nel'], ['hunt', 'whe'], ['isab', 'leo'], ['jack', 'che'], ['jack', 'cla'], ['jack', 'cop'], ['jack', 'mur'], ['jaco', 'ezi'], ['jayd', 'moo'], ['jere', 'big'], ['jimm', 'sca'], ['joe', 'bak'], ['john', 'gru'], ['juan', 'bae'], ['juli', 'bur'], ['kaiy', 'bur'], ['kate', 'jar'], ['kati', 'aue'], ['kati', 'fer'], ['khus', 'rav'], ['kirs', 'ack'], ['lanc', 'sny'], ['layl', 'com'], ['leah', 'ave'], ['lee', 'acr'], ['liam', 'how'], ['lily', 'sto'], ['lizz', 'ada'], ['loga', 'sim'], ['lucy', 'ave'], ['lucy', 'bau'], ['mack', 'pan'], ['mack', 'wes'], ['madi', 'kay'], ['mari', 'sod'], ['maso', 'prz'], ['matt', 'cam'], ['max', 'lag'], ['mich', 'par'], ['mill', 'eve'], ['nata', 'taj'], ['nate', 'lev'], ['nels', 'ott'], ['noel', 'cha'], ['oliv', 'col'], ['owen', 'yeu'], ['park', 'les'], ['plyl', 'hun'], ['rach', 'buc'], ['reag', 'ban'], ['reag', 'sza'], ['rebe', 'aue'], ['reec', 'new'], ['rhea', 'kha'], ['rich', 'hop'], ['ryan', 'eva'], ['ryde', 'bet'], ['sam', 'bib'], ['sam', 'shu'], ['sam', 'str'], ['sam', 'tig'], ['sara', 'baz'], ['sara', 'mor'], ['sash', 'gil'], ['seam', 'rob'], ['sean', 'tru'], ['shel', 'bev'], ['soph', 'pol'], ['sriv', 'hat'], ['susi', 'guz'], ['sydn', 'joy'], ['tate', 'zim'], ['tayl', 'boo'], ['tomm', 'tan'], ['toye', 'law'], ['tuck', 'gad'], ['van', 'dea'], ['vari', 'sap'], ['whit', 'col'], ['will', 'col'], ['will', 'cro'], ['wyat', 'jan'], ['yasm', 'dan'], ['zach', 'har'], ['zahi', 'gri'], ['zoe', 'jon']];
            randNums = [37, 55, 45, 44, 99, 53, 102, 74, 23, 76, 106, 63, 56, 95, 6, 87, 84, 81, 30, 4, 10, 60, 103, 3, 97, 28, 39, 116, 36, 105, 111, 21, 62, 69, 43, 96, 66, 8, 72, 17, 100, 50, 49, 71, 41, 33, 14, 77, 29, 65, 25, 92, 64, 57, 113, 19, 112, 82, 48, 68, 93, 83, 59, 110, 109, 12, 89, 47, 1, 54, 78, 88, 52, 91, 34, 80, 9, 0, 115, 40, 104, 38, 79, 13, 18, 26, 85, 7, 46, 58, 98, 15, 51, 67, 22, 107, 86, 75, 73, 90, 20, 94, 31, 70, 42, 27, 32, 5, 16, 2, 61, 114, 108, 24, 101, 11, 35, 96, 61, 2, 40, 40, 76, 95, 113, 50, 48, 7, 30, 14, 85, 44, 24, 12, 65, 0, 80, 106, 79, 38, 89, 23, 111, 9, 26, 104, 44, 30, 5, 1, 42, 52, 76, 71, 29, 36, 42, 3, 79, 62, 54, 16, 82, 45, 84, 58, 28, 4, 74, 15, 115, 7, 54, 0, 27, 28, 22, 56, 101, 110, 58, 25, 112, 26, 47, 110, 64, 55, 10, 90, 12, 73, 66, 71, 46, 95, 102, 53, 23, 84, 69, 35, 60, 9, 93, 41, 59, 72, 115, 15, 96, 27, 66, 106, 35, 18, 33, 74, 4, 31, 31, 114, 99, 8, 43, 81, 72, 8, 70, 56, 34, 100, 75, 18, 97, 41, 57, 90, 86, 105, 57, 102, 16, 108, 68, 36, 3, 113, 45, 80, 99, 105, 103, 6, 63, 60, 78, 20, 98, 112, 78, 64, 29, 52, 2, 107, 24, 109, 11, 94, 88, 69, 82, 19, 47, 21, 37, 49, 91, 62, 108, 111, 50, 83, 77, 21, 33, 93, 17, 65, 51, 48, 92, 87, 116, 77, 17, 109, 43, 37, 89, 114, 39, 20, 92, 86, 19, 49, 63, 25, 83, 32, 1, 34, 5, 10, 67, 70, 22, 11, 75, 68, 67, 94, 38, 6, 73, 32, 100, 85, 61, 39, 103, 88, 51, 53, 98, 116, 97, 14, 59, 101, 55, 81, 91, 13, 87, 107, 13, 104, 46];
            document.getElementById("title").textContent += " - Sophomores"

            break;
        case 'junior':
            names = [['alde', 'rob'], ['alex', 'bar'], ['alex', 'sam'], ['amel', 'ind'], ['andr', 'gru'], ['anee', 'cho'], ['ange', 'lan'], ['anna', 'dye'], ['anna', 'mar'], ['anna', 'rus'], ['anne', 'fiv'], ['anto', 'bau'], ['ashl', 'hud'], ['audr', 'per'], ['bail', 'pez'], ['bell', 'bur'], ['benn', 'yue'], ['bren', 'sta'], ['butl', 'sta'], ['cale', 'pec'], ['call', 'par'], ['came', 'jor'], ['cath', 'fei'], ['chil', 'win'], ['chlo', 'swa'], ['chri', 'cou'], ['cole', 'hus'], ['conn', 'rho'], ['coop', 'poo'], ['dani', 'che'], ['dani', 'lip'], ['davi', 'den'], ['davi', 'gla'], ['davi', 'mun'], ['davi', 'ott'], ['dhan', 'pat'], ['ella', 'fer'], ['emil', 'bri'], ['emme', 'spe'], ['fred', 'war'], ['gabb', 'har'], ['gera', 'tho'], ['gia', 'pat'], ['gibs', 'mee'], ['harr', 'bro'], ['henr', 'all'], ['henr', 'pat'], ['jack', 'gro'], ['jame', 'ben'], ['jame', 'ber'], ['jame', 'lon'], ['jame', 'sav'], ['jane', 'ste'], ['jayc', 'wil'], ['jen', 'yua'], ['jenn', 'par'], ['jess', 'fin'], ['john', 'fer'], ['john', 'fol'], ['jord', 'epp'], ['juli', 'wai'], ['kady', 'joh'], ['kale', 'doy'], ['kate', 'dav'], ['kate', 'lit'], ['kayl', 'san'], ['kris', 'hou'], ['laur', 'sch'], ['lee', 'mce'], ['leo', 'del'], ['liam', 'hna'], ['liam', 'sul'], ['libb', 'pie'], ['lila', 'riv'], ['loga', 'gal'], ['loga', 'man'], ['loga', 'pau'], ['luca', 'kna'], ['luke', 'den'], ['luke', 'iac'], ['mack', 'pet'], ['mack', 'sav'], ['madi', 'gal'], ['matt', 'kon'], ['matt', 'mil'], ['matt', 'war'], ['mega', 'smi'], ['megh', 'sav'], ['mica', 'bau'], ['mich', 'car'], ['mill', 'car'], ['mitc', 'moo'], ['nanc', 'cha'], ['nata', 'fow'], ['ned', 'ber'], ['noah', 'how'], ['nola', "o'b"], ['nyla', 'gor'], ['oliv', 'lev'], ['oliv', 'miz'], ['oliv', 'pet'], ['owen', 'gar'], ['owen', 'joh'], ['quin', 'car'], ['reag', 'mcg'], ['rebe', 'sch'], ['ruby', 'gar'], ['ryan', 'guz'], ['ryla', 'gos'], ['sam', 'mcd'], ['saoi', 'dow'], ['shel', 'stu'], ['shun', 'zhe'], ['sidd', 'seh'], ['sien', 'fre'], ['soph', 'kni'], ['soph', 'pat'], ['sydn', 'ves'], ['tana', 'pat'], ['tara', 'jee'], ['tara', 'tav'], ['tatu', 'tra'], ['vign', 'akk'], ['walt', 'fra'], ['will', 'war']];
            randNums = [122, 41, 116, 34, 3, 79, 118, 98, 94, 69, 36, 7, 67, 26, 117, 124, 111, 32, 22, 4, 49, 83, 76, 15, 91, 27, 24, 106, 63, 100, 48, 39, 110, 28, 60, 40, 65, 105, 30, 62, 38, 25, 21, 107, 13, 72, 82, 123, 42, 108, 99, 19, 57, 101, 120, 55, 5, 115, 8, 0, 88, 52, 2, 58, 33, 59, 85, 43, 44, 89, 104, 96, 31, 54, 87, 46, 35, 86, 11, 61, 112, 12, 14, 77, 70, 75, 73, 93, 53, 114, 64, 45, 84, 56, 20, 81, 66, 18, 29, 119, 51, 50, 113, 95, 92, 16, 78, 109, 102, 71, 97, 103, 6, 90, 23, 10, 17, 9, 68, 121, 1, 37, 80, 74, 47, 27, 38, 1, 123, 11, 46, 78, 37, 113, 89, 33, 108, 93, 2, 50, 29, 22, 80, 102, 105, 38, 112, 32, 49, 37, 25, 30, 20, 10, 42, 46, 65, 104, 110, 58, 32, 66, 118, 10, 35, 116, 18, 36, 73, 88, 73, 86, 17, 3, 71, 106, 101, 11, 24, 60, 9, 53, 74, 28, 5, 82, 79, 54, 94, 103, 110, 26, 51, 58, 7, 31, 61, 52, 22, 121, 107, 18, 21, 111, 25, 0, 80, 90, 120, 16, 7, 91, 72, 41, 82, 39, 12, 9, 69, 68, 14, 95, 43, 29, 89, 31, 34, 70, 61, 111, 95, 54, 70, 44, 74, 12, 123, 98, 48, 92, 99, 97, 26, 64, 47, 55, 100, 97, 107, 27, 30, 0, 114, 50, 114, 124, 40, 81, 23, 20, 64, 2, 84, 13, 75, 108, 60, 87, 76, 71, 68, 83, 8, 15, 100, 75, 87, 19, 52, 21, 115, 115, 35, 63, 59, 67, 78, 44, 124, 96, 17, 112, 43, 57, 6, 76, 69, 77, 15, 62, 56, 117, 81, 48, 42, 93, 79, 102, 96, 120, 98, 90, 47, 55, 86, 121, 19, 88, 119, 109, 23, 62, 66, 4, 65, 83, 116, 109, 99, 117, 92, 113, 85, 122, 8, 85, 53, 6, 63, 118, 56, 41, 67, 3, 91, 40, 39, 72, 51, 105, 59, 103, 101, 119, 14, 16, 77, 84, 24, 104, 5, 34, 49, 57, 45, 13, 28, 33, 4, 94, 1, 36, 106, 122, 45];
            document.getElementById("title").textContent += " - Juniors"

            break;
        case 'senior': 
            names = [['abby', 'fer'], ['andr', 'tri'], ['ange', 'ham'], ['anna', 'fli'], ['anna', 'per'], ['aver', 'bri'], ['aver', 'sti'], ['axel', 'pat'], ['bell', 'car'], ['ben', 'lag'], ['ben', 'rob'], ['benj', 'far'], ['brog', 'lan'], ['broo', 'sny'], ['broo', 'tho'], ['cait', 'llo'], ['cami', 'rob'], ['canb', 'tra'], ['care', 'str'], ['cate', 'war'], ['char', 'rus'], ['clai', 'vu'], ['clay', 'whe'], ['clem', 'lee'], ['conn', 'bot'], ['conn', 'pur'], ['coop', 'caz'], ['coop', 'ree'], ['core', 'bro'], ['davi', 'ale'], ['davi', 'smy'], ['daws', 'mon'], ['eliz', 'bly'], ['emil', 'gra'], ['emma', 'cla'], ['emma', 'fix'], ['emma', 'hug'], ['emma', 'pro'], ['emmi', 'lan'], ['etha', 'sta'], ['fost', 'kim'], ['fras', 'boo'], ['gavi', 'gos'], ['gavi', 'wan'], ['harr', 'ale'], ['hele', 'sch'], ['henr', 'cli'], ['henr', 'mar'], ['ian', 'bur'], ['ian', 'fit'], ['jack', 'tig'], ['jaco', 'bak'], ['jaco', 'cre'], ['jame', 'col'], ['jame', 'tho'], ['jame', 'wil'], ['jasm', 'lec'], ['jess', 'ezi'], ['jett', 'fal'], ['jill', 'gho'], ['joey', 'cla'], ['john', 'bun'], ['john', 'pas'], ['jona', 'abr'], ['juli', 'hoo'], ['kai', 'wan'], ['kate', 'gue'], ['kayl', 'wil'], ['keir', 'man'], ['kend', 'pag'], ['kenn', 'whi'], ['kris', 'tan'], ['laur', 'wei'], ['lee', 'she'], ['lill', 'sav'], ['lily', 'aue'], ['lily', 'mer'], ['loga', 'lyl'], ['luke', 'bor'], ['mada', 'mej'], ['madd', 'cam'], ['mari', 'dua'], ['mari', 'mck'], ['meli', 'dig'], ['mill', 'van'], ['nadi', 'tho'], ['nate', 'del'], ['oliv', 'gal'], ['oliv', 'jon'], ['paul', 'tru'], ['race', 'foy'], ['rach', 'the'], ['reed', 'ram'], ['ross', 'hop'], ['ryan', 'sza'], ['sach', 'kon'], ['sage', 'amb'], ['sama', 'fis'], ['sara', 'jac'], ['sava', 'tin'], ['seld', 'fiv'], ['sofi', 'tji'], ['soph', 'ott'], ['soph', 'tho'], ['stin', 'mos'], ['sydn', 'sim'], ['tal', 'zac'], ['thom', 'har'], ['till', 'dal'], ['timm', 'but'], ['tori', 'kau'], ['trey', 'cus'], ['vero', 'ver'], ['virg', 'gil'], ['zoe', 'duk'], ['zoey', 'alp']];
            randNums = [54, 41, 42, 84, 67, 69, 23, 111, 47, 45, 29, 12, 0, 43, 97, 21, 39, 33, 17, 50, 91, 37, 95, 60, 36, 43, 71, 103, 99, 16, 63, 20, 34, 89, 63, 111, 70, 2, 57, 29, 62, 46, 57, 35, 3, 39, 105, 7, 18, 10, 47, 81, 73, 13, 1, 70, 54, 112, 87, 52, 82, 75, 4, 97, 101, 75, 77, 47, 26, 92, 15, 86, 64, 16, 22, 10, 32, 86, 6, 79, 38, 96, 45, 52, 93, 100, 98, 49, 31, 44, 98, 6, 59, 66, 49, 55, 75, 83, 30, 113, 2, 96, 107, 107, 10, 78, 48, 79, 77, 109, 62, 110, 53, 84, 33, 104, 34, 44, 65, 65, 60, 72, 3, 112, 56, 46, 105, 110, 40, 8, 107, 27, 109, 13, 14, 54, 59, 64, 36, 45, 89, 84, 109, 85, 88, 31, 61, 58, 37, 16, 18, 34, 98, 25, 8, 93, 53, 51, 17, 63, 40, 48, 108, 32, 26, 14, 65, 18, 1, 8, 92, 4, 68, 114, 115, 6, 113, 115, 66, 67, 12, 39, 86, 61, 7, 55, 1, 20, 79, 13, 38, 52, 9, 42, 41, 91, 100, 15, 94, 62, 58, 35, 53, 90, 110, 11, 71, 30, 40, 89, 74, 50, 82, 27, 95, 67, 37, 15, 102, 64, 61, 76, 33, 81, 48, 43, 9, 30, 4, 44, 88, 72, 74, 103, 83, 23, 24, 68, 11, 11, 88, 78, 22, 21, 25, 51, 38, 85, 28, 108, 114, 85, 106, 28, 101, 0, 28, 96, 7, 17, 5, 35, 80, 94, 80, 56, 58, 76, 76, 106, 51, 115, 50, 68, 114, 99, 25, 77, 111, 66, 31, 83, 91, 93, 23, 12, 97, 105, 103, 49, 24, 19, 108, 5, 82, 69, 60, 46, 24, 29, 56, 9, 92, 101, 2, 112, 87, 19, 102, 36, 73, 113, 69, 26, 73, 19, 5, 21, 14, 90, 87, 32, 102, 90, 104, 27, 95, 0, 74, 71, 80, 99, 3, 104, 42, 100, 81, 55, 59, 41, 72, 70, 78, 106, 22, 57, 94, 20];
            document.getElementById("title").textContent += " - Seniors"

            break;
        default: 
            names = [['abby', 'fer'], ['abig', 'smi'], ['alde', 'rob'], ['alex', 'bar'], ['alex', 'sam'], ['ambe', 'jen'], ['ambe', 'mor'], ['amel', 'ind'], ['andr', 'gru'], ['andr', 'kim'], ['andr', 'tri'], ['anee', 'cho'], ['ange', 'ham'], ['ange', 'lan'], ['ann', 'fur'], ['ann', 'gol'], ['anna', 'dye'], ['anna', 'fli'], ['anna', 'mar'], ['anna', 'per'], ['anna', 'rus'], ['anne', 'fiv'], ['anto', 'bau'], ['aree', 'sye'], ['ari', 'zit'], ['ashl', 'hud'], ['audr', 'per'], ['aust', 'dun'], ['ava', 'mcg'], ['ava', 'sal'], ['aver', 'bri'], ['aver', 'sti'], ['axel', 'pat'], ['bail', 'pez'], ['bell', 'bur'], ['bell', 'car'], ['ben', 'lag'], ['ben', 'rob'], ['benj', 'far'], ['benn', 'yue'], ['berk', 'new'], ['bern', 'mcm'], ['beth', 'man'], ['brad', 'har'], ['bree', 'fau'], ['bren', 'sta'], ['bric', 'yui'], ['brog', 'lan'], ['broo', 'bet'], ['broo', 'fox'], ['broo', 'sny'], ['broo', 'tho'], ['butl', 'sta'], ['cait', 'llo'], ['cale', 'pec'], ['call', 'par'], ['came', 'jor'], ['cami', 'rob'], ['canb', 'tra'], ['care', 'boo'], ['care', 'str'], ['carr', 'col'], ['carr', 'del'], ['cart', 'luc'], ['cart', 'whe'], ['cate', 'gus'], ['cate', 'war'], ['cath', 'fei'], ['cath', 'mcc'], ['chad', 'byl'], ['char', 'fay'], ['char', 'hop'], ['char', 'rus'], ['char', 'vio'], ['char', 'zit'], ['chen', 'doa'], ['chil', 'win'], ['chlo', 'pau'], ['chlo', 'swa'], ['chri', 'bro'], ['chri', 'cou'], ['chri', 'nel'], ['chri', 'wat'], ['clai', 'vu'], ['clay', 'whe'], ['clem', 'lee'], ['cole', 'hou'], ['cole', 'hus'], ['conn', 'ale'], ['conn', 'bot'], ['conn', 'pur'], ['conn', 'rho'], ['coop', 'caz'], ['coop', 'poo'], ['coop', 'ree'], ['coop', 'tys'], ['core', 'bro'], ['dani', 'che'], ['dani', 'lip'], ['davi', 'ale'], ['davi', 'den'], ['davi', 'gla'], ['davi', 'kid'], ['davi', 'mun'], ['davi', 'ott'], ['davi', 'rez'], ['davi', 'smy'], ['daws', 'mon'], ['denn', 'man'], ['dhan', 'pat'], ['dyla', 'def'], ['edwa', 'pat'], ['eliz', 'bly'], ['eliz', 'dij'], ['eliz', 'hop'], ['ella', 'fer'], ['emer', 'mar'], ['emil', 'bea'], ['emil', 'bri'], ['emil', 'gra'], ['emma', 'cla'], ['emma', 'fix'], ['emma', 'hug'], ['emma', 'pro'], ['emme', 'spe'], ['emmi', 'lan'], ['eric', 'acr'], ['esth', 'dis'], ['etha', 'eve'], ['etha', 'sta'], ['fost', 'kim'], ['fras', 'boo'], ['fred', 'war'], ['gabb', 'har'], ['garr', 'bir'], ['gavi', 'gos'], ['gavi', 'wan'], ['geor', 'bun'], ['gera', 'tho'], ['gia', 'pat'], ['gibs', 'mee'], ['gret', 'sco'], ['hann', 'str'], ['harr', 'ale'], ['harr', 'bro'], ['harr', 'hud'], ['heat', 'kem'], ['hele', 'sch'], ['henr', 'all'], ['henr', 'cli'], ['henr', 'mar'], ['henr', 'pat'], ['hold', 'nel'], ['hunt', 'whe'], ['ian', 'bur'], ['ian', 'fit'], ['isab', 'leo'], ['jack', 'che'], ['jack', 'cla'], ['jack', 'cop'], ['jack', 'gro'], ['jack', 'mur'], ['jack', 'tig'], ['jaco', 'bak'], ['jaco', 'cre'], ['jaco', 'ezi'], ['jame', 'ben'], ['jame', 'ber'], ['jame', 'col'], ['jame', 'den'], ['jame', 'lon'], ['jame', 'sav'], ['jame', 'tho'], ['jame', 'wil'], ['jane', 'ste'], ['jasm', 'lec'], ['jayc', 'wil'], ['jayd', 'moo'], ['jen', 'yua'], ['jenn', 'par'], ['jenn', 'sco'], ['jere', 'big'], ['jess', 'ezi'], ['jess', 'fin'], ['jett', 'fal'], ['jill', 'gho'], ['jimm', 'sca'], ['joe', 'bak'], ['joey', 'cla'], ['john', 'bun'], ['john', 'cra'], ['john', 'fer'], ['john', 'fol'], ['john', 'gru'], ['john', 'lin'], ['john', 'pas'], ['jona', 'abr'], ['jord', 'epp'], ['juan', 'bae'], ['juli', 'bur'], ['juli', 'hoo'], ['juli', 'wai'], ['kady', 'joh'], ['kai', 'wan'], ['kaiy', 'bur'], ['kale', 'doy'], ['kate', 'dav'], ['kate', 'gue'], ['kate', 'jar'], ['kate', 'lit'], ['kati', 'aue'], ['kati', 'fer'], ['kayl', 'san'], ['kayl', 'wil'], ['keir', 'man'], ['kell', 'dew'], ['kend', 'pag'], ['kenn', 'whi'], ['khus', 'rav'], ['kirs', 'ack'], ['knox', 'gar'], ['kris', 'hou'], ['kris', 'tan'], ['lanc', 'sny'], ['laur', 'sch'], ['laur', 'wei'], ['layl', 'com'], ['leah', 'ave'], ['lee', 'acr'], ['lee', 'mce'], ['lee', 'she'], ['leo', 'del'], ['lewi', 'aff'], ['liam', 'hna'], ['liam', 'how'], ['liam', 'sul'], ['libb', 'pie'], ['lila', 'riv'], ['lill', 'sav'], ['lily', 'aue'], ['lily', 'mer'], ['lily', 'sto'], ['lind', 'gor'], ['lisa', 'pri'], ['lizz', 'ada'], ['loga', 'gal'], ['loga', 'lyl'], ['loga', 'man'], ['loga', 'pau'], ['loga', 'sim'], ['luca', 'kna'], ['lucy', 'ave'], ['lucy', 'bau'], ['luke', 'bor'], ['luke', 'den'], ['luke', 'iac'], ['lynn', 'pau'], ['mack', 'pan'], ['mack', 'pet'], ['mack', 'sav'], ['mack', 'wes'], ['mada', 'mej'], ['madd', 'cam'], ['madi', 'gal'], ['madi', 'kay'], ['marg', 'man'], ['marg', 'mar'], ['mari', 'dua'], ['mari', 'mck'], ['mari', 'moo'], ['mari', 'sod'], ['mary', 'gla'], ['maso', 'prz'], ['matt', 'cam'], ['matt', 'kon'], ['matt', 'lil'], ['matt', 'mil'], ['matt', 'rob'], ['matt', 'war'], ['max', 'lag'], ['mega', 'hal'], ['mega', 'smi'], ['megh', 'sav'], ['meli', 'dig'], ['mica', 'bau'], ['mich', 'car'], ['mich', 'par'], ['mich', 'pfa'], ['mill', 'car'], ['mill', 'eve'], ['mill', 'van'], ['mitc', 'moo'], ['nadi', 'tho'], ['nanc', 'cha'], ['nata', 'fow'], ['nata', 'nau'], ['nata', 'taj'], ['nate', 'del'], ['nate', 'lev'], ['ned', 'ber'], ['neil', 'duf'], ['nels', 'ott'], ['noah', 'how'], ['noel', 'cha'], ['nola', "o'b"], ['nyla', 'gor'], ['oliv', 'col'], ['oliv', 'gal'], ['oliv', 'jon'], ['oliv', 'lev'], ['oliv', 'miz'], ['oliv', 'pet'], ['owen', 'gar'], ['owen', 'joh'], ['owen', 'yeu'], ['park', 'les'], ['paul', 'tru'], ['plyl', 'hun'], ['quin', 'car'], ['race', 'foy'], ['rach', 'buc'], ['rach', 'the'], ['reag', 'ban'], ['reag', 'mcg'], ['reag', 'sza'], ['rebe', 'aue'], ['rebe', 'sch'], ['reec', 'new'], ['reed', 'ram'], ['rhea', 'kha'], ['rich', 'hop'], ['rich', 'obe'], ['rich', 'pec'], ['robe', 'cal'], ['robe', 'fle'], ['ross', 'hop'], ['roy', 'new'], ['ruby', 'gar'], ['ryan', 'eva'], ['ryan', 'guz'], ['ryan', 'sza'], ['ryde', 'bet'], ['ryla', 'gos'], ['sach', 'kon'], ['sage', 'amb'], ['sam', 'bib'], ['sam', 'mcd'], ['sam', 'shu'], ['sam', 'str'], ['sam', 'tig'], ['sama', 'fis'], ['saoi', 'dow'], ['sara', 'baz'], ['sara', 'goo'], ['sara', 'jac'], ['sara', 'mor'], ['sash', 'gil'], ['sava', 'tin'], ['seam', 'rob'], ['sean', 'dug'], ['sean', 'tru'], ['sean', 'wet'], ['seld', 'fiv'], ['shaw', 'ott'], ['shel', 'bev'], ['shel', 'stu'], ['shun', 'zhe'], ['sidd', 'seh'], ['sien', 'fre'], ['sofi', 'tji'], ['soph', 'kni'], ['soph', 'ott'], ['soph', 'pat'], ['soph', 'pol'], ['soph', 'tho'], ['sriv', 'hat'], ['step', 'mon'], ['stev', 'gol'], ['stin', 'mos'], ['susi', 'guz'], ['sydn', 'joy'], ['sydn', 'sim'], ['sydn', 'ves'], ['tal', 'zac'], ['tana', 'pat'], ['tara', 'jee'], ['tara', 'tav'], ['tate', 'zim'], ['tatu', 'tra'], ['tayl', 'boo'], ['tayl', 'win'], ['thom', 'har'], ['till', 'dal'], ['timm', 'but'], ['tom', 'duq'], ['tomm', 'tan'], ['tori', 'kau'], ['toye', 'law'], ['trey', 'cus'], ['tuck', 'gad'], ['van', 'dea'], ['vari', 'sap'], ['vero', 'ver'], ['vign', 'akk'], ['virg', 'gil'], ['walt', 'fra'], ['warr', 'war'], ['wend', 'liv'], ['whit', 'col'], ['will', 'col'], ['will', 'cro'], ['will', 'war'], ['wyat', 'jan'], ['yasm', 'dan'], ['zach', 'har'], ['zahi', 'gri'], ['zoe', 'duk'], ['zoe', 'jon'], ['zoey', 'alp']];
            randNums = [348, 222, 395, 294, 149, 297, 120, 273, 280, 39, 92, 132, 321, 4, 215, 100, 251, 285, 262, 223, 389, 415, 352, 143, 165, 124, 46, 418, 96, 341, 335, 378, 257, 209, 261, 417, 399, 166, 283, 373, 382, 411, 357, 40, 225, 228, 381, 169, 11, 231, 403, 140, 195, 14, 365, 109, 333, 230, 55, 269, 106, 221, 57, 30, 38, 319, 90, 266, 355, 281, 142, 51, 170, 114, 260, 232, 400, 302, 313, 312, 108, 186, 226, 89, 213, 159, 99, 137, 349, 188, 8, 34, 74, 163, 386, 117, 133, 112, 86, 388, 304, 17, 267, 236, 412, 298, 102, 179, 330, 227, 338, 405, 56, 414, 141, 362, 127, 275, 288, 401, 173, 216, 95, 356, 122, 69, 58, 66, 235, 300, 161, 392, 27, 238, 332, 26, 289, 33, 315, 366, 323, 47, 13, 345, 198, 241, 104, 0, 244, 265, 416, 25, 181, 53, 393, 374, 68, 324, 19, 218, 311, 278, 43, 123, 2, 59, 358, 168, 150, 242, 103, 153, 63, 309, 177, 364, 35, 291, 377, 211, 243, 71, 151, 402, 398, 292, 85, 396, 201, 375, 305, 203, 60, 205, 237, 192, 202, 139, 295, 299, 350, 296, 97, 274, 73, 316, 184, 18, 110, 310, 98, 147, 252, 10, 367, 207, 52, 78, 115, 239, 28, 206, 344, 54, 111, 174, 220, 116, 334, 284, 113, 342, 16, 22, 160, 172, 167, 369, 70, 156, 353, 65, 193, 258, 413, 15, 91, 255, 270, 62, 191, 360, 138, 12, 376, 229, 24, 331, 224, 314, 31, 282, 354, 351, 271, 279, 79, 197, 383, 268, 88, 245, 157, 194, 204, 76, 130, 128, 67, 380, 409, 61, 233, 93, 293, 178, 391, 200, 171, 183, 408, 250, 129, 368, 190, 325, 317, 308, 152, 162, 185, 249, 322, 387, 246, 6, 36, 247, 37, 397, 64, 263, 131, 101, 77, 217, 29, 256, 254, 84, 394, 72, 306, 337, 187, 371, 148, 1, 121, 107, 83, 144, 45, 136, 328, 318, 214, 189, 370, 259, 404, 339, 125, 21, 94, 175, 327, 155, 118, 208, 234, 290, 379, 176, 307, 346, 42, 277, 32, 410, 326, 158, 359, 146, 343, 20, 210, 320, 3, 212, 276, 48, 7, 390, 196, 361, 145, 119, 384, 81, 134, 199, 286, 303, 23, 385, 329, 182, 9, 347, 407, 5, 253, 372, 44, 248, 340, 272, 164, 240, 301, 41, 363, 75, 180, 264, 80, 135, 336, 219, 49, 287, 87, 154, 82, 406, 50, 126, 105];
    }


    const name = names[randNums[daysPassed]];
    const first = name[0];
    const last = name[1];
    const word = first.padEnd(4) + last.padEnd(3);
    
    function getParameterByName(name, url = window.location.href) {
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

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
        } else if (key === "arrowright") {
            onFirst = false;
            document.getElementById("next").textContent = "<";
            return;
        } else if (key === "arrowleft" && guessedFirst.length < 4) {
            onFirst = true;
            document.getElementById("next").textContent = ">";
            return;
        } else if (key.length === 1 && key.match(/[a-z]/i) || key === " ") {
            updateGuessed(key);
        } 

    });

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

            if (onFirst) {
                document.getElementById("next").textContent = ">";
            } else {
                document.getElementById("next").textContent = ">"; 
            }

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