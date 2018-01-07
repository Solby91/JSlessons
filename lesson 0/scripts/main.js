var textWithAge = document.querySelector('section');
var textButton = document.querySelector('button');


function tellTheTruth() {

    var myName = '';
    while (myName === '' || myName == null){
        myName = prompt("Как Вас зовут?");
    }
    var myAge = '';
    while (myAge === '' ||myAge == null) {
        myAge = prompt("Сколько Вам лет?");
    }

    // условие по возрасту
    if (myAge<18) {
        textWithAge.innerHTML = 'Здарова, ' + myName + '. Как твои '+ myAge + ' лет?';
    } else {
        textWithAge.innerHTML = 'Приветствую, ' + myName + '. Уж '+ myAge + ' лет прошло.';
    }
}

tellTheTruth();

textButton.onclick = function() {
    tellTheTruth()
}