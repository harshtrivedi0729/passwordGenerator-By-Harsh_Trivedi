// "Custome-Attribute" no use karvo hoy data Fetch karva tyare apde {"[Custome-Attribute]"} avi rite kariye chiye 

const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");

const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
// aa jetal apna Checkbox che tene darsha ve che ......,,aa avu kahe che k 'input ma type=chebox hoy tevo badho j data lai avo ' atle a badha j check box avi jashe 
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
// apde aek symbol nam ni srting banavi j ma badh aj characters che 
const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';


//initially
let password = "";
let passwordLength = 10;
let checkCount = 0;
// Functione call kariyo kem k Apde starting ma aa default value tari ke set karvu che 
handleSlider();
//ste strength circle color to grey
setIndicator("#ccc");


//For set passwordLength we made handleSlider() function
// password length ne UI ma dekahde che 
function handleSlider() {
    // Starting ma inputSlider ni value Password ni length jetali hovi joiye 
    inputSlider.value = passwordLength;
    // Apde avu ichiye chiye k j aa Slider ni length dekhade che(lengthDisplay) teni value pan Starting ma 10(paaWordLength) j hovi joiye 
    lengthDisplay.innerText = passwordLength;
    const min = inputSlider.min;
    const max = inputSlider.max;
    // ahiya apde ketalo part color walo rakhvo che ,like 10 password ni length hoy and max length password ni 20 hoy to to HALF part color valo thashe Slider no and HALF part simple Backgroud valo thashe ...to avu apanane darek Length mate karvu che mate apde koi Formula banavavo padshe j darek length mate Color vali Silder nu maths dekhade .
    // '(passwordLength - min)*100/(max - min))' aa WIDTH dekhade che and  "% 100%" aa heigth ne dekhade che  
    // aa simple LOGICAL MATHS FORMULA che value nakhi ne Cross check kari shakay che  
    inputSlider.style.backgroundSize = ( (passwordLength - min)*100/(max - min)) + "% 100%"
}

// Color dekhad va mate apde Indicator banaviyu, ama apde Possword ni Strength mujab Color and a color ni shadows change karta rahishu 
function setIndicator(color) {
    // CSS property ne JS ni help this chhange karva mate apde niche mujab lakhishu 
    // ano matalab che k indiacator ma jav,stlye ma jav,and teno background-color a input color kari do 
    indicator.style.backgroundColor = color;
    // apde apde apela color no shadow banaviyo
    indicator.style.boxShadow = `0px 0px 12px 1px ${color}`;
}

// apde RandomInterger melavava mate aek function banaviyu, and tema j value ni vache(range ma) apde aa RandomInterger joiye che te range nakhi che 

//ahiya 'Math.random()' thi apanane '0(including)' and '1(excluding)' ni vache ni random value male che ,have apde aa 'Math.random()' value ne apdi '(max - min)' value vade multiple kariye to have apdo ans a apdi minimum and maximun value ni vache avshe. 
//so avu karvu pade apde "Math.random() * (max - min)"....have posible che k aa flot Number(point valo number) hoy mate apde ane akha ne  Math.floor() library ma add kari didha ,  Math.floor(Math.random() * (max - min)).......have haji aek issue che k apde vale value
// to MIN thi MAX joiye che pan ahiya 'Math.random()' na lidhe value 0-1 ni vache male che and mani lo k koi case ma value 0 mali to te case ma apde value ni range 0 thi MAX(0-MAX) thai jashe pana pde to apdi range MIN THI MAX rakhvi to to aa case ne handle karva mate apde AKHI VALUE MA "+MIN" karishu j thi apdi value che te (MIN-MAX) range ma mali jay .
// and apde FLOT MATHI INT MA FERAVAVA AKHI MATH NI LIBRARY AMA ALREADY ADD KARELI CHE 'Math.floor'. aama apanane MIN thi MAX ni vache Integer value malshe .
// for example, Math.random() gives value 0.5 and our min=1 and max=20 then (max-min)=(20-1)=19 . now 'Math.random() * (max - min)' here -> (0.5)(19)= 9.5 and have Math.floor thi aa value ne random interger ma convert karshe j apde '9' laiye chiye . which is our answer. and have akhi value ma (+min) karishu = (9)+1 = 10. aa apdo final answer thashe 

// apde 'a' thi 'z' ni vache LOWERCASE ma k UPPERCASE  ma character joiye to te min('a'/'A') thi max('z'/'Z') ni vache joiye che or 0-9 ni vache koi numeber joiye to tyare aa function kam avshe mate me aa function lakhelu che , j badhi j calculation kari apde che and jya apade aa niche ni calculation ni jarur pade tya apde aa "getRndInteger(min, max)" ne call kari deva no j thi apanane badhi calculation mali jay ....tuk vare vare apde caluculation na karvi pade atle me aa function banaviyu che 
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// apde ahiya aa function thi rnadom number malshe, and random number mate random interger joiye mate apde random interger vala funtion ne call karishu 
function generateRandomNumber() {
    // have apde khali aek j ,single digit no random number nakhvo che to apde sidhi vat che k teni range 0-9 j hase kem k apde single digit joiye che 
    return getRndInteger(0,9);
}

// apde 'a' thi 'z' vache koi character joiye chie mate aa function banaviyu , and have aa small 'a' ni ASCII value "97" che and small 'z' ni ASCII value "123" che mate (min,max)rage ma aapde aa value nakhishu
function generateLowerCase() {  
    // have aa 'getRndInteger(97,123)' aa apanane random interger apshe 97 and 123 ni vache pan apde to character joiye che mate aama thi j random-interger male che tene apde aa ASCII value ni help thi random-character ma fervi nakhishu 
    // Interger ne Character ma chnage karva mate "String.fromCharCode()" no use karelo che ..avi rite apde ASCII value thi Ramdom-interger ne random-character ma fervi nakhiyo 
       return String.fromCharCode(getRndInteger(97,123))
}

// apde capital 'A" thi capital 'Z' vache koi character joiye chie mate aa function banaviyu , and have aa Capital 'A' ni ASCII value "65" che and Capital 'Z' ni ASCII value "91" che mate (min,max)rage ma aapde aa value nakhishu
function generateUpperCase() {  
    // have aa 'getRndInteger(65,91)' aa apanane random interger apshe 65 and 91 ni vache pan apde to character joiye che mate aama thi j random-interger male che tene apde aa ASCII value ni help thi random-character ma fervi nakhishu 
    // Interger ne Character ma chnage karva mate "String.fromCharCode()" no use karelo che ..avi rite apde ASCII value thi Ramdom-interger ne random-character ma fervi nakhiyo 
    return String.fromCharCode(getRndInteger(65,91))
}


function generateSymbol() {
    // ahiya apde random Symbol joiye che mate me ahiya randNum nam na vaariable ma , calculation na karvu pade mate getRndInteger(min,max) valo function chalaviyo and tema apde j string banavi che symbols nam ni teni index=0(min value) thi index=symbols.length(max value) value nakhishu and ama thi random number(index) ave te index ma j Symbol padelo hoy te symbol ne apde lai laishu 
    const randNum = getRndInteger(0, symbols.length); //aaa index apde che 
    return symbols.charAt(randNum); // aa symbol nam ni string maa randNum(index) ma rahelo Symbol ape che [.charAt a index ma kayo character che te darshave che ]
}

function calcStrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;
    // starting mabadha j checkBox ni value false(0) che 
    // ahiya apde (.checked) property no use karelo che j dekhade che k checked box checked che k nai 
    if (uppercaseCheck.checked) hasUpper = true;
    if (lowercaseCheck.checked) hasLower = true;
    if (numbersCheck.checked) hasNum = true;
    if (symbolsCheck.checked) hasSym = true;
    // jo koi checkBox ni value checked hoy to True(1) mark kari che 
  
    if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
        // upar na case(strong password) ma apde niche no color set kari daishu 
      setIndicator("#0f0");
    } else if (
        // mediumn password
      (hasLower || hasUpper) &&
      (hasNum || hasSym) &&
      passwordLength >= 6
    ) {
      setIndicator("#ff0");
    } else {
        // low password
      setIndicator("#f00");
    }
}


// ahiya method a async che mate apde async valo function banaviyo 
async function copyContent() {

    // error handling mate apde try and catch method no use karishu 
    try {
        // " await navigator.clipboard.writeText(passwordDisplay.value);" this statment is used clipboard API to write the generated password to clipboard ........code waits untl the promise resolves before moving on to the next line of code , please ensures that the password is successfully return to the clipboard before any futher actions are upadted.
        // 'clipboard.writeText' ==>>>> clipboard ma kai pan lakhvu hoy to tena mate "writeText" nam ni method che 
        // "writeText" nam ni method a promise retuen kare che ....and aa method a asynchornise method che ....and aa metho "writeText" a clipboard upar chale che ..te clipboard upar kaik copy kare che  
        // 'navigator.clipboard.writeText(passwordDisplay.value)' aa akhi method thi apde clipboard upar koi pan vastu copy karva mate use thay che , aa method a promise return kare che , ans promise to resolve/reject game te thai shake che , to apde j aa "copied" valo text dekhadvu che te tyare j dekhadishu jyare promise resolve thay and promise resolve thai gayu che k nai te janva mate apde ahiya await keyword lagadi didhu (atle await no matalab che k -> jo promise resolve thay to j aa "copied" lakhelu avavu joiye )
        // ahiyaa apde password ni value copy karva mangiye chiye 
        await navigator.clipboard.writeText(passwordDisplay.value);
        // jo rpomise resolve thai jay pachi 'Copied' Text lakhelu avavu joiye 
        copyMsg.innerText = "Copied";
    }
    catch(e) {
        // jo promise reject thay to 'failed' lakhelu avavu joiye 
        copyMsg.innerText = "Failed";
    }
    //to make copy wala span visible
    copyMsg.classList.add("active");

    // aa 'Copied' valu text amuk time pachi jatu rahe che mate tena upar koik time lagelu hovu joiye ................to ane unvisible karva mate apde.......scale=0, display=hidden, or Z-index ma change karishu too aa badha mathi koi pan methode thi apde ane unvisible kari shakiye chiye  
    setTimeout( () => {
        copyMsg.classList.remove("active");
    },2000);

}

// aa Fisher Yates Method a array upar j kam karee che mate apde input ma array pass kari
function shufflePassword(array) {
    //Shuffle karava mate ni aek algorith hoy che "Fisher Yates Method" aa method ne apde koi pan Array upar apply kari ne shuffle kari shakiye chiye  
    //Fisher Yates Method
    for (let i = array.length - 1; i > 0; i--) {
        //random J, find out using random function
        //'j' a random che , je 0 thi (i+1) ni range ma che jema 0 a inclusive che and (i+1) a exclusive che .....ahiya [Math.random()] a 0 thi 1 (0-1) vache value ape che mate aa range [Math.random() * (i + 1)] a 0 thi (i+1) (0-(i+1)) thai ,and j a random index apshe kem k ahiya range (i+1) che have te index ne [Math.floor()] ma nakhelu che j apanane float value ne INT value ma convert kare che 
        const j = Math.floor(Math.random() * (i + 1));
        //swap number at i index and j index
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    //  empty String banavi che , and array ma jetala pan element che ne tene srting ma add kariya che forEach loop thi 
    let str = "";
    array.forEach((el) => (str += el));
    return str;
}


function handleCheckBoxChange() {
    // starting ma checkcount=0 che 
    checkCount = 0;
    // apde forEach loop no use kari ne badha j checkbox upar EventListner lagavi didho ...and jyare pan aa checkbox change thay tyare aa function lagu pade che 
    //aa loop darevakhte chalshe [checkbox select karo k disselsct karo aa loop darekvakhate chalshe and navo j pan checkcount hase ne te lagu padshe ]and apanane checkcount apseh 
    allCheckBox.forEach( (checkbox) => {
        if(checkbox.checked)
        // jo checkboc checked hoy to te case ma checkcount ne vadharishu 
            checkCount++;
    });

    //special condition
    // jo password ni length a checkcount karta ochi hoy to avu to na chale ...apde j to jetala checkbox tick karela che te mujab no password banvo j joiye ......to aa case ne samjva mate apde avi condition muki che k 'jo password ni lenght a checkcount kartaochi hoy to te case ma apde compolsory password ni length a checkbox na count jetali thavi joiye 
    if(passwordLength < checkCount ) {
        passwordLength = checkCount;
        // passsword ni lenghth change thay atle apde handleslider ne call kari didho 
        handleSlider();
    }
}

// apde Generate Passsword button upar aviya tyare joyu k jo aek pan checkbox true na hoy to password generate nahi thay , ano matalb avu k apde minimum aek checkbox to checked karvu j padshe to j password generate thashe ,
// mate checkbox(ketala checked che te) no count apde maintain karvo padshe ...and aa count ne maintain karva mate apde checkbox upar eventListner banavavu padshe ....j thi apde track kari shakiye k ketala checkbox a checked che a and te mujab password create thaseh 
//  apde ahiya badha j checkbox ne aek j variable allcheckbox nam ma save karela che 
allCheckBox.forEach( (checkbox) => {
    checkbox.addEventListener('change', handleCheckBoxChange);
})


inputSlider.addEventListener('input', (e) => {
    // ahiya j slider no point hoy che te "e" ne dekhade che and aa slider jem left/right jay tem apde  value chnage thay and te j pan 
    //value male tene apde "passwordlength" ma nakhishu mate jem jem slider badlay tem tem passwordLength  badlashe and te password ni length dekhadva mate apde aa lakhiyu che , and ana pachi apde handleSlider() function ne call karishu 
    passwordLength = e.target.value;
    handleSlider();
})


copyBtn.addEventListener('click', () => {
    //jo password vali display ma koi value hoy to te value ne copy karo 
    if(passwordDisplay.value)
        copyContent();
})


generateBtn.addEventListener('click', () => {
    //none of the checkbox are selected

    if(checkCount == 0) 
        return;

        // Special case 
    if(passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }

    // let's start the jouney to find new password
    console.log("Starting the Journey");
    //remove old password
    password = "";

    //let's put the stuff mentioned by checkboxes

    // if(uppercaseCheck.checked) {
    //     password += generateUpperCase();
    // }

    // if(lowercaseCheck.checked) {
    //     password += generateLowerCase();
    // }

    // if(numbersCheck.checked) {
    //     password += generateRandomNumber();
    // }

    // if(symbolsCheck.checked) {
    //     password += generateSymbol();
    // }

    // have apde pase mano k passwordLength vadhare che and checkbox checked che 1 thi vadhare to apde rama random password banavo padseh [jema checkbox checked karela badha j case(NUM,SYM,LOW,UPP) avi jay pan length to vadhare che jo baki na aa 4 sivay biji jagiyaye(password ni bacheli jagiyaye bija random variable nakhva padshe ne)]ne to a random password k v rite bane ??..... 
    // to apde randomly k v rite findout karishu k NUM,SYM,LOW,UPP case nakhvu password ma? to te mate aek rit che k , apsi pase koi array type kaik hovuu joitu hatu jema aa NUM,SYM,LOW,UPP na functions hoy ..and randomly findput kare k kayo function call karshe te .....NUM,SYM,LOW,UPPapdi pase aa NUM,SYM,LOW,UPP function array ma hata to apde randoly koi pan index ne pakdi ne aa functions ne call kari deta and tena thi te function mujab no element apde lai ne avi jata 
    
    // empty array 
    let funcArr = [];

    // j na checkbox checkded che te badh aj function apde aa array ma nakhi didha che 
    if(uppercaseCheck.checked)
        funcArr.push(generateUpperCase);

    if(lowercaseCheck.checked)
        funcArr.push(generateLowerCase);

    if(numbersCheck.checked)
        funcArr.push(generateRandomNumber);

    if(symbolsCheck.checked)
        funcArr.push(generateSymbol);

    //compulsory addition
    // checkbox ma j checked che temne compolsory add karva padshe te mate aa function che 
    for(let i=0; i<funcArr.length; i++) {
        // "()" ana thi apde funcArr function[funcArr()] ne call kariyo  
        password += funcArr[i]();
    }
    console.log("Compulsory adddition done");


    //remaining adddition
    //have j baki ni password ni length ma apde  koi random NUM,SYM,LOW,UPP nakhva nu che te mate aa use karishu 
    // remainnig length = passwordLength-funcArr.length
    for(let i=0; i<passwordLength-funcArr.length; i++) {
        // apde j funcArr array che te array mathi apde random index upadi and te random intex ma j pan function hase te function ne call kari ne apde random interger lai lidho and tene apde randIndex naam na variable ma add kariyo 
        let randIndex = getRndInteger(0 , funcArr.length);
        console.log("randIndex" + randIndex);
        // "()" ana thi apde funcArr function[funcArr()] ne call kariyo  .....tuk ma function call kariyo 
        password += funcArr[randIndex]();
    }
    console.log("Remaining adddition done");

    //shuffle the password
    // have apde checkbox ma jem ape la che UPP,LOW,NUM,SYM tem tena te j kram(sequence) ma apde function banave la che ...have jo UPP,LOW checked hoy to khabar padi jay k pahrla UPP avshe pavhi LOW avshe to aa password to khabar padi java 
    //ni sambhavna rahe..mate aa j password che tene koi pan randomly shuffle karavi daiye andaro-andar to koi ne khabar j nai pade k pahela UPP ave k LOW ave k NUM ave k SYM ave...badhu alag alag rtie shuffle karavathi password vadhare strong and genuine banshe mate apde aa rite shuffling karavu padshe 
    //'Fisher Yates Method' method a array upar lagu pade che mate apde password ne array ma form ma apishu 
    password = shufflePassword(Array.from(password));
    console.log("Shuffling done");
    //show in UI
    passwordDisplay.value = password;
    console.log("UI adddition done");
    //calculate strength(color dekhade te)
    calcStrength();
});