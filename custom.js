// 1. global function 

//empty Value
function emptyText(id) {
    document.getElementById(id).value = '';
}

//empty Value
function emptyValue(id) {
    document.getElementById(id).value = '';
}

// Display Block
function displayBlock(id) {
    document.getElementById(id).style.display = 'block';
}

// Display none
function displayNone(id) {
    document.getElementById(id).style.display = 'none';
}

// 2. Random Number Generate / Pin
function randomGenerate() {
    let randomNumber = Math.floor(10000 + Math.random() * 900000);
    document.getElementById('generateDisplay').value = randomNumber;
    emptyValue('inputPin');
    displayNone('match');
    displayNone('unmatch');
}

// 3. Button Number Value
function btnkey(id) {
    let displayInput = document.getElementById('inputPin').value;
    let keyValue = document.getElementById(id).innerHTML;
    document.getElementById('inputPin').value = displayInput + keyValue;
}

// 4. Clean remove
function clean() {
    let remove = document.getElementById('inputPin').value = '';
}

// 5. Clean Last Value / BackSpace Button
function backspace() {
    let inputLastRemove = document.getElementById('inputPin').value;
    let removeInput = inputLastRemove.slice(0, inputLastRemove.length - 1);
    document.getElementById('inputPin').value = removeInput;
}

// 6. Submit Mathc or (Condsonal)
function submitBtn() {
    let randomNum = document.getElementById('generateDisplay').value;
    let inputvalue = document.getElementById('inputPin').value;

    // 7. Random Number and input Value Match Check
    if (randomNum == inputvalue) {
        displayBlock('match');
        displayNone('unmatch');
    }
    else {
        displayBlock('unmatch');
        displayNone('match');
        tryLeft('tryNumber')
    }
}

// 8. Pin Match Error - Try 3 Left
function tryLeft(id){
    let tryAgin = document.getElementById(id).innerHTML;
    document.getElementById(id).innerHTML -= 1;
    if(tryAgin == '1'){
        disableBtn('submit')
    }
}

// 9. TRY Left Experd - submit button Disable
function disableBtn(id){
    let button = document.getElementById(id);
    button.style.cursor = 'not-allowed';
    button.style.setAttribute = ('disabled', 'true');
    button.title = 'Please Reloade Page';
}

