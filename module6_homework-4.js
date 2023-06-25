function countInOrderEverySecond(number1, number2) {
    let count = number1;

    let intervalnumb = setInterval(function () {
        if (count <= number2) {
            console.log(count);
            count++;
        }
        else clearInterval(intervalnumb);
    }, 1000);
}

countInOrderEverySecond(0, 7);