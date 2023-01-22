let paroltoo;
let parol;
let errors = [];

const Test = (input) => {
    let validity = input.validity;
    let name = input.getAttribute("name");
    if (validity.valueMissing) {
        errors.push(` Поле ${name} обязательно для заполнения`);
        input.classList.add("invalid");
    }
    if (validity.patternMismatch) {
        errors.push(`Неверный формат заполнения поля ${name}`);
        input.classList.add("invalid");
    }

}
const TestParol = () => {
    parol = document.getElementById('parol').value;
    paroltoo = document.getElementById('paroltoo').value;
    if (paroltoo != parol) {
        errors.push("Подтвержденный пароль не равен паролю");
        document.getElementById('paroltoo').classList.add("invalid");
    }
}

const checkAll = () => {
    let div = document.getElementById('message');
    let inputs = document.querySelectorAll("input");
    errors = [];
    div.innerHTML = '';

    for (let input of inputs) {
        Test(input);
    }
    TestParol();
 
    if (errors.length > 0)
        for (let e of errors) {
            let p = document.createElement("p");
            p.innerHTML = `${e}`;
            div.appendChild(p);
        }
        else return 1;
}

buttonsubmit.onclick = function(e) {
    e.preventDefault();
    
    checkAll();
    let index;
    index =checkAll();
    let user ={
        firstname: document.getElementById('firstname').value,
        secondname:document.getElementById('secondname').value,
        login: document.getElementById('loginname').value,
        parol:document.getElementById('parol').value,

    }
    if (index==1){
    

    fetch("https://httpbin.org/post ",
    {
        method:'POST',
        body: JSON.stringify(user),
        headers:{'Content-Type': 'application/json;charset=utf-8'}

    }).then(response=>response.json()).then(user=>alert(user.json.firstname+' Вы успешно зарегистрировались')).catch(error=>console.log(error));
  ;}

   

}