function convertToRoman(num) {
    //primary variables
    var numInArrayReverse = []; // the number passed will added to this array i reverse for working with
    var numAsArrayOfString = Array.from(num.toString()); // the number passed to array converted to array
    var roman = "";   // the roman value making will be store in this


    // reversing the array of number
    for (var i = numAsArrayOfString.length - 1; i >= 0; i--) {
        numInArrayReverse.push(numAsArrayOfString[i]);
    }

    //array for the roman characters
    var romChar = ["I", "V", "X", "L", "C", "D", "M","K"];
    // flag use ro access romChar
    var flag = 0;

/////////////////// the main process o the application////////////////////
    for (let i = numAsArrayOfString.length - 1 ; i >= 0 ; i--) {
         var currentDigit = numAsArrayOfString[i];
         var primaryChar = "";
         var option = 0;

///////////////////////////////////////////////////////////////
        if (currentDigit < 4) {
            primaryChar = romChar[flag];
            option = 1;
        }

        else if (currentDigit >= 4 && currentDigit <= 8) {
            primaryChar = romChar[flag + 1];
            option = 2
        }

        else {
            primaryChar = romChar[flag + 2];
            option = 3;
        }

//////////////////////////////////////////////////////////////////

        if (option === 1) {
            for (let i = 0; i < currentDigit; i++) {
                roman = romChar[flag] + roman;
            }
        }

        else if (option == 2) {
            if (currentDigit < 5) {
                roman =romChar[flag] + romChar[flag + 1] + roman;
            }

            else if (currentDigit > 5) {
                let num = currentDigit - 5;
                var temRom = roman
                roman =  romChar[flag + 1];


                for (let i = 0; i < num; i++) {
                    roman =   roman + romChar[flag];
                }
                roman = roman + temRom;
            }

            else{
                roman =  romChar[flag + 1] + roman;
            }
        }

        else if(option == 3){
            roman = romChar[flag] + romChar[flag + 2] + roman ;
        }
///////////////////////////////////////////////////////////////////////////
        flag += 2;


    }
    return roman;

}





    // return roman;}

console.log(convertToRoman();