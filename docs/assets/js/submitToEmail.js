console.log("Hello World");

/*const url = 'https://script.google.com/macros/s/AKfycbyq9NjhO9Ns8GJr4B09JZanL3nuNV2lSrhTlvJ44lVMWteXEGxYSDMOjZaZpKkG5-qe/exec';
const myForm = document.querySelector('#myForm');
const myName = document.querySelector("#name");
const myEmail = document.querySelector("#email");
const myMessage = document.querySelector("#message");



myForm.addEventListener('submit', submitter);

function submitter(e)
{
    console.log('submitted');
    e.preventDefault();

    let message = '';

    if(myName.value.length < 5)
    {
        myName.style.borderColor = 'red';
        message += '<br>Name must be at least 5 characters';
    }

    if(myEmail.value.length < 5 )
    {
        myEmail.style.borderColor = 'red';
        message += '<br>Email must be at least 5 characters';
    }

    if(message)
    {
        const div = document.createElement('div');
        div.innerHTML = message;
        div.style.color = 'red';
        myForm.append(div);
        setTimeout(()=>
        {
            div.remove()
            myName.style.borderColor = '';
            myEmail.style.borderColor = '';
        },2000);
        

    }
    else
    {
        const myObj = 
        {
            name:myName.value,
            email:myEmail.value,
            message:myMessage.value
        };
        addSendMail(myObj);
    }
}//fn

function addSendMail(data)
{
    console.log(data);
    fetch(url,
        {
            method:'POST',
            body:JSON.stringify(data)
        })
    .then(res=> res.json())
    .then(json=> 
        {
            console.log(json);
        })
}//fn

*/

function addSendMailGET(data)
{
    const url1 = url + '?id = 100';
    fetch(url1)
    .then(res=> res.json())
    .then(json=> 
        {
            console.log(json);
        })
}//fn

