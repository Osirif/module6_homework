let number = prompt('Введите число');

function getNumber (number) {
    if (number == 0) return  "Ноль";
    if (number == 1) return "Один";
    if (number > 1000) return "Число слишком большое";

    let count = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i == 0) count++;
    }

    if (count == 2)
        return "Число простое";
    else
        return "Число составное";
}

console.log(getNumber(number));