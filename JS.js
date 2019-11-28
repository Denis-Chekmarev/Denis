function myFunction(){
    var x = document.forms["frm1"];
    var text ="";
    var i;
    for (i=0; i < x.length; i++){
        text += x.elements[i].value + "<br>";
    }
    document.getElementById("demo").innerHTML = text;
}


function perebor(formId){
    var pereb ="";
    var i;
    var x = document.forms[formId];
    for (i=0; i < x.length; i++){
        if(x.elements[i].checked){
            pereb += i;
        }
    }
    return pereb;
}

function main(){
    var otvet = ["0", "12", "20-20000", "2", "2", "1", "2", "3", "3", "3"];
    var flag = 0;
    var chek = "";
    for (var i=0; i < 10; i++){
        let idForm = "q" + (i+1);
        if (i!=2){
            var a = perebor(idForm);
            if (a == otvet[i]){
                flag++;
            }
            //chek += a + ' ';
        }
    }

    if (document.getElementById("q3").elements[0].value == otvet[2]){
        flag++;
    }

    chek += "Количество правильных ответов: " + flag + " ";
    alert(chek);

    //var element = document.getElementById("result");

    switch (flag) {
        case 10:
            alert("Все верно!!! Вы очень многое знаете про звук!!!");
            break;
        case 9:
            alert("Вы допустили несколько ошибок. Но все равно у вас высокий показатель");
            break;
        case 8:
            alert("Вы допустили несколько ошибок. Но все равно у вас высокий показатель");
            break;
        case 7:
            alert("Вы допустили несколько ошибок. Но все равно у вас высокий показатель");
            break;
        case 6:
            alert("Средний результат. Пора подтянуть знания");
            break;
        case 5:
            alert("Средний результат. Пора подтянуть знания");
            break;
        case 4:
            alert("Средний результат. Пора подтянуть знания");
            break;
        case 3:
            alert("Низкий результат. Выучите теорию и попробуйте заново");
            break;
        case 2:
            alert("Низкий результат. Выучите теорию и попробуйте заново");
            break;
        case 1:
            alert("Низкий результат. Выучите теорию и попробуйте заново");
            break;
        case 0:
            alert("На все вопросы вы ответили неправильно!!");
            break;

        /*case 10: {
            alert("Все верно!!! Вы очень многое знаете про звук!!!");
            break;
        }
        case (flag <= 9 && flag >= 7): {
            alert("Вы допустили несколько ошибок. Но все равно у вас высокий показатель");
            break;
        }
        case (flag <= 6 && flag >= 4): {
            alert("Средний результат. Пора подтянуть знания");
            break;
        }
        case (flag <= 3 && flag >= 1): {
            alert("Низкий результат. Выучите теорию и попробуйте заново");
            break;
        }
        case 0: {
            alert("На все вопросы вы ответили неправильно!!");
            break;
        }*/
    }
    //element.appendChild('Что-то пошло не так!!');
}