const firstRow = prompt('First string:');
const secondRow = prompt('Second string:');

function countLetters(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }
    return count;
}

function getRow(firstRow, secondRow) {
    const letter = prompt('Яка літера потрібна:');

    const countFirstRow = countLetters(firstRow, letter);
    const countSecondRow = countLetters(secondRow, letter);

    if (countFirstRow > countSecondRow) {
        return firstRow;
    } else if (countSecondRow > countFirstRow) {
        return secondRow;
    } else {
        return 'Кількість літер однакова';
    }
}

alert(getRow(firstRow, secondRow));

function formattedPhone(phone) {
    
    const digitsOnly = phone.replace(/\D/g, '');

    
    const regex = /^(\+?7|8)?(\d{3})(\d{3})(\d{2})(\d{2})$/;
    const match = digitsOnly.match(regex);

    if (!match) {
        return 'Error';
    }

    
    const [, countryCode, regionCode, firstPart, secondPart, thirdPart] = match;

    
    const formattedNumber = `+38 (${regionCode}) ${firstPart}-${secondPart}-${thirdPart}`;

    return formattedNumber;
}


console.log(formattedPhone('+56739564752')); 
console.log(formattedPhone('38847323145'));
console.log(formattedPhone('13468356745'));  
console.log(formattedPhone('13345634235'));
console.log(formattedPhone('23457123423'));

