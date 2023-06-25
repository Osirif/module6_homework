let arr= [1,2,3,4,5,6];
function cycle(array) {
    let odd=0;
    let even=0;
    let another=0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === 0 || typeof(arr[i] != 'number')) 
        {
            another++;
        } 
        else 
        {
            if (arr[i] % 2 === 0) 
            {
                even++;
            } 
            else 
            {
                odd++;
            }
        }
    }
    console.log(even);
    console.log(odd);
    console.log(another);
}

cycle(arr);