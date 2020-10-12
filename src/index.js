module.exports = function toReadable(number) {
    number = String(number).split("");
    let resStr = "";

    let units = {
        0: "",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    };

    let dozens = {
        0: "",
        1: "ten",
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };

    let tenTwenty = {
        0: "ten",
        1: "eleven",
        2: "twelve",
        3: "thirteen",
        4: "fourteen",
        5: "fifteen",
        6: "sixteen",
        7: "seventeen",
        8: "eighteen",
        9: "nineteen",
    };

    if (number == 0) {
        resStr = "zero";
    } else {
        if (number.length == 3) {
            if (number[1] < 2 && number[1] > 0) {
                resStr = `${units[number[0]]} hundred ${tenTwenty[number[2]]}`;
            } else if (number[1] == 0) {
                resStr = `${units[number[0]]} hundred ${units[number[2]]}`;
            } else {
                resStr = `${units[number[0]]} hundred ${dozens[number[1]]} ${
                    units[number[2]]
                }`;
            }
        } else if (number.length == 2) {
            if (number[0] < 2 && number[0] > 0) {
                resStr = `${tenTwenty[number[1]]}`;
            } else {
                resStr = `${dozens[number[0]]} ${units[number[1]]}`;
            }
        } else {
            resStr = units[number[0]];
        }
    }
    return resStr.trim();
};
