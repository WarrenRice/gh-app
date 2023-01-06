let arrCash = [0, 0, 0, 0, 0, 0, 0, 0];
let passages = [0,0,0];
let receipt = 0;

let input20 = document.getElementById('cash-20-in');
input20.addEventListener('input', function() {
    updateNumber(); 
    sumNumber(arrCash);
});

let input10 = document.getElementById('cash-10-in');
input10.addEventListener('input', function() {
    updateNumber();
    sumNumber(arrCash);
});

let input5 = document.getElementById('cash-5-in');
input5.addEventListener('input', function() {
    updateNumber();
    sumNumber(arrCash);
});

let input2 = document.getElementById('cash-2-in');
input2.addEventListener('input', function() {
    updateNumber();
    sumNumber(arrCash);
});

let input1 = document.getElementById('cash-1-in');
input1.addEventListener('input', function() {
    updateNumber();
    sumNumber(arrCash);
});

let input025 = document.getElementById('cash-025-in');
input025.addEventListener('input', function() {
    updateNumber();
    sumNumber(arrCash);
});

let input010 = document.getElementById('cash-010-in');
input010.addEventListener('input', function() {
    updateNumber();
    sumNumber(arrCash);
});

let input005 = document.getElementById('cash-005-in');
input005.addEventListener('input', function() {
    updateNumber();
    sumNumber(arrCash);
});

let inputReceipt = document.getElementById('cash-receipt');
inputReceipt.addEventListener('input', function() {
    updateNumber();
    sumNumber(arrCash);
});

const checkbox1 = document.getElementById('checkbox1');
checkbox1.addEventListener('click', function() {
    updateNumber();
    sumNumber(arrCash);
});

const checkbox2 = document.getElementById('checkbox2');
checkbox2.addEventListener('click', function() {
    updateNumber();
    sumNumber(arrCash);
});

const checkbox3 = document.getElementById('checkbox3');
checkbox3.addEventListener('click', function() {
    updateNumber();
    sumNumber(arrCash);
});

function updateNumber () {
    if (inputReceipt.value == "") {
        receipt = 0;
    } else {
        receipt = parseInt(inputReceipt.value);
    }

    // console.log(input20.value);
    // console.log(typeof input20.value);
    // console.log(isNaN(input20.value));

    if (input20.value == "") {
        arrCash[0] = 0;
    } else {
        arrCash[0] = parseInt(input20.value)*20;
    }
    document.getElementById('cash-20-out').textContent = "$"+arrCash[0].toFixed(2);
    
    if (input10.value == "") {
        arrCash[1] = 0;
    } else {
        arrCash[1] = parseInt(input10.value)*10;
    }
    document.getElementById('cash-10-out').textContent = "$"+arrCash[1].toFixed(2);
    
    if (input5.value == "") {
        arrCash[2] = 0;
    } else {
        arrCash[2] = parseInt(input5.value)*5;
    }
    document.getElementById('cash-5-out').textContent = "$"+arrCash[2].toFixed(2);

    if (input2.value == "") {
        arrCash[3] = 0;
    } else {
        arrCash[3] = parseInt(input2.value)*2;
    }
    document.getElementById('cash-2-out').textContent = "$"+arrCash[3].toFixed(2);
    
    if (input1.value == "") {
        arrCash[4] = 0;
    } else {
        arrCash[4] = parseInt(input1.value)*1;
    }
    document.getElementById('cash-1-out').textContent = "$"+arrCash[4].toFixed(2);

    if (input025.value == "") {
        arrCash[5] = 0;
    } else {
        arrCash[5] = parseInt(input025.value)*0.25;
    }
    document.getElementById('cash-025-out').textContent = "$"+arrCash[5].toFixed(2);
           
    if (input010.value == "") {
        arrCash[6] = 0;
    } else {
        arrCash[6] = parseInt(input010.value)*0.10;
    }
    document.getElementById('cash-010-out').textContent = "$"+arrCash[6].toFixed(2);

    if (input005.value == "") {
        arrCash[7] = 0;
    } else {
        arrCash[7] = parseInt(input005.value)*0.05;
    }   
    document.getElementById('cash-005-out').textContent = "$"+arrCash[7].toFixed(2);

    if (checkbox1.checked) {
        passages[0] = 1;
    } else {
        passages[0] = 0;

    }

    if (checkbox2.checked) {
        passages[1] = 1;
    } else {
        passages[1] = 0;

    }

    if (checkbox3.checked) {
        passages[2] = 1;
    } else {
        passages[2] = 0;
        sumNumber(arrCash);
    }
}

function sumNumber(arr) {
    let sum = arr.reduce(function(total, currentValue) {
        return total + currentValue;
    }, 0);
    document.getElementById('cash-total').textContent = "$"+sum.toFixed(2);

    let deposit = receipt + sumPassage(passages)*50;

    // console.log(sum);
    // console.log(typeof sum);
    // console.log(deposit);
    // console.log(Math.abs(sum - deposit - 100));


    if (Math.abs(sum - 100 - deposit) > 5) {
        if (sumPassage(passages) == 0) {
            document.getElementById('cash-deposit').textContent = "$"+deposit.toFixed(2) + " (Something Went Wrong!)";
        } else {
            let texts = "$"+(receipt+sumPassage(passages)*50).toFixed(2);
            texts = texts + " (" + receipt + " + " + sumPassage(passages) + "x50)";
            texts = texts + " (Something Went Wrong!)";
            document.getElementById('cash-deposit').textContent = texts;
        }
    } else {
        if (sumPassage(passages) == 0) {
            document.getElementById('cash-deposit').textContent = "$"+deposit.toFixed(2);
        } else {
            let texts = "$"+(receipt+sumPassage(passages)*50).toFixed(2);
            texts = texts + " (" + receipt + " + " + sumPassage(passages) + "x50)";
            document.getElementById('cash-deposit').textContent = texts;
        }
    }
}

function updatetext() {
    
}

function sumPassage(arr) {
    let sumPass = arr.reduce(function(total, currentValue) {
        return total + currentValue;
    }, 0);    
    return sumPass;
}