const hundred = 'hundred';
const firstNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const secondNumber = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
module.exports = function toReadable(number) {

    const stringNumbers = String(number);

    switch (stringNumbers.length) {
        case 1:
            return firstNumbers[number];
            break;
        case 2:
            return getSecondNumber(number);
            break;
        case 3:
            if (stringNumbers[1] === '0' && stringNumbers[2] === '0') {
                return firstNumbers[Number(stringNumbers[0])] + ' ' + hundred;
            } else {
                return firstNumbers[Number(stringNumbers[0])] + ' ' + hundred + ' ' +
                    getSecondNumber(Number(stringNumbers[1] + stringNumbers[2]));
            }
            break;
        default:
    }
}

function getSecondNumber(number) {
    const stringNumber = String(number);
    if (number <= 19) {
        return firstNumbers[number];
    } else if (stringNumber[1] === '0') {
        return secondNumber[Number(stringNumber[0] - 2)];
    } else {
        return secondNumber[Number(stringNumber[0] - 2)] + ' ' + firstNumbers[Number(stringNumber[1])];
    }
}
