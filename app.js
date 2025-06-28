function removeApples(arr) {
    for (let i = 0; i< arr.length; ++i) {
       if (arr[i] !== 'Apple') {
        console.log(arr[i])
        }
    }

}


console.log(removeApples(['Banana', 'Apple' , 'Orange']));