'use strict';
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    arr2 = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
    ],
    arr3 = [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
    ],
    arr4 = [
        '!',
        '?',
        ',',
        '.',
        '&',
        '$',
        '@',
        '#',
        '%',
        '^',
        '&',
        '*',
        '(',
        ')',
        '+',
        '-',
        '=',
        '`',
    ];
document.querySelector('#pass-length').oninput = function () {
    document.querySelector('#password-length').innerHTML = this.value;
};
document.querySelector('#pass-number').oninput = function () {
    document.querySelector('#passwords-number').innerHTML = this.value;
};
document
    .querySelector('#generator')
    .addEventListener('click', generatePassword);

document.querySelector('#clear').addEventListener('click', () => {
    document.querySelector('#out').innerHTML = '';
});

function generatePassword(e) {
    let tmpArr = [];
    if (document.querySelector('#include_numbers').checked) {
        tmpArr = tmpArr.concat(arr1);
    }
    if (document.querySelector('#lowercase_characters').checked) {
        tmpArr = tmpArr.concat(arr2);
    }
    if (document.querySelector('#uppercase_characters').checked) {
        tmpArr = tmpArr.concat(arr3);
    }
    if (document.querySelector('#include_symbols').checked) {
        tmpArr = tmpArr.concat(arr4);
    }
    tmpArr.sort(compareRandom);
    let passLength = parseInt(document.querySelector('#pass-length').value);
    let out = '';
    let numberOfPassword = parseInt(
        document.querySelector('#pass-number').value,
    );
    console.log(numberOfPassword);
    for (let i = 0; i < numberOfPassword; i++) {
        for (let j = 0; j < passLength; j++) {
            out += tmpArr[randomNumber(0, tmpArr.length - 1)];
            if (out.includes('undefined')) {
                j--;
                out = tmpArr.filter((el) => el != null);
                break;
            }
        }
        document.querySelector('#out').innerHTML += `<p>${out}</p>`;
    }
}
function compareRandom(a, b) {
    return Math.random() - 0.5;
}
function randomNumber(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}
