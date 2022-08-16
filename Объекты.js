/*
let salaries = {
    J: 100,
    A: 160,
    P: 130
}
let sum = 0;
for (let key in salaries){
    sum += salaries[key];
}
alert(sum);*/

/*let menu = {
    width: 200,
    heiht: 300,
    title: "My menu"
};*/
/*
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}
 console.log(obj);*/






/*const whois = prompt('Кто пришел?', 'Админ');
if (whois === 'Админ'){
    const password = prompt('Пароль?');

    if (password === 'Черный властелин'){
        alert('Welcome');
    } else if (password === null){
        alert('Вход отменен');
    } else {
    alert('Тебе сюда нельзя, ты не достоин!');
    }
} else if (whois === null){
    alert('Вход отменен');
} else {
    alert('Ты кто такой, давай до свидания!');
}*/


/*
const test = true;
if (test !== true){
    alert('Верно');
} else {
    alert('Неверно')
}


const result = test !== true ? 'Верно' : 'Неверно';
alert(result);
*/


let num = 0;
const start = confirm('Сыграем?');
if (start === true){
    const go = confirm('За каждый правильный ответ начисляется 1 балл');
    if (go === true){
        const ques1 = prompt('What is your name?') ;
        if (ques1 === 'Alymbek'){
            alert('its right + 1ball')
            num++;
        } else{
            alert('incorrect')
        }
        const ques2 = prompt('How old are you?')
        if (ques2 === '25'){
            alert('Well done + 1 ball')
            num++;
        } else {
            alert('bad result');
        }
        const ques3 = prompt('where are you from?')
        if (ques3 === 'Germany'){
            alert('Thats right + 1 ball');
            num++;
        } else {
            alert('bye');
        }
alert('У тебя '+num+' баллов');
    }
}else {
    alert('Жаль что уходишь');
}





































