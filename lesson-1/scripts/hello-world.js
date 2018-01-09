/*
var number = prompt('Введите число', '');
if (+number > 0) {
    alert(1);
} else if (+number < 0) {
    alert(-1);
} else {
    alert(0);
}
*/  // взаимодействие с пользователем

/*
var username = prompt('Your login, please', '');

if (username == 'Админ') {

    var password = prompt('Enter the password', '');

    if (password == 'Черный властелин') {
        alert('Добро пожаловать!');
    } else if (password == null) {
        alert('Вход отменен');
    } else {
        alert('Пароль неверен');
    }

} else if (username == null) {
    alert('Вход отменен');

} else {
    alert('Я Вас не знаю');
}
*/  // взаимодействие с пользователем

/*
for (var i =2; i<=10; i++){
    if (i%2==1) continue;
    alert(i);
}
*/  // циклы

/*
for (var i = 0; i < 3; i++) {
    alert( "номер " + i + "!" );
}

var i =0;
while(i<3){
    alert('номер' + i + '!');
    i++;
}
*/  // циклы

/*
var num;
while (num<100){
    num = +prompt('Введите число больше 100', '');
    if(!num) break;
}
*/  // циклы и взаимодействие с польз.

/*
outer: for(var simpleNum = 2; simpleNum<11; simpleNum++){
    for (var x=2; x<simpleNum; x++){
        if(simpleNum % x == 0) continue outer;
    }
    alert('Число ' + simpleNum + ' простое');
}
*/  // проверка целого числа на "простое"

/*
function pow(x, n) {
    x = +prompt('Введите число для вычисления его значения в степени', '');
    n = +prompt('Введите степень', '');
    if (n==0){
        return alert('Результат выражения: 1');
    } else if (n==1) {
        return alert('Результат выражения: ' + x);
    }
    var pownum = x;
    while (n>1) {
        pownum *=x;
        n--;
    }
    alert('Результат выражения: ' + pownum);
}
*/  // возведение в степень

/*
function sumWhile(n) {
    var sum = 0;
    while(n>0){
        sum += n;
        n--;
    }
    alert(sum);
}
*/  // рекурсия через цикл

/*
function sumTo(n) {
    if (n==1) return 1;
        return n+sumTo(n-1);
}
*/  // сумма цифр через рекурсию

/*
function factorial(n) {
    if (n==1) return n;
    return n*factorial(n-1);
}
*/  // факториал через рекурсию

/*
function fib(n) {
   if (n<=1) {
        return n;
   } else {
       return fib(n-1)+fib(n-2);
   }

}
*/  // числа Фибоначи через рекурсию

/*
function fibCycle(n) {
    var a = 1;
    var b = 1;
    var c = 0;

    for (var i=3; i<=n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
}
*/  // числа Фибоначи через цикл
