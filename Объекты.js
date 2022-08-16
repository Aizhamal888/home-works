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






const whois = prompt('Кто пришел?', 'Админ');
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
}













































