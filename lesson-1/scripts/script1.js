var x = 0;
while (x<100){
    x++;
    if (x%3==0){
        console.log('Fizz');
    }
    if (x%5==0){
        console.log('Buzz');
    }
    if (x%5==0 && x%3==0){
        console.log('FizzBuzz');
    } else {
        console.log(x);
    }
}
