const url = 'https://script.google.com/macros/s/AKfycbyq9NjhO9Ns8GJr4B09JZanL3nuNV2lSrhTlvJ44lVMWteXEGxYSDMOjZaZpKkG5-qe/exec';
const myForm = document.querySelector('#myForm');
const myName = document.querySelector("#name");
const myEmail = document.querySelector("#email");
const myMessage = document.querySelector("#message");


myForm.addEventListener('submit', submitter);


function submitter(e)
{
    console.log('submitted');
    e.preventDefault();

        const myObj = 
        {
            name:myName.value,
            email:myEmail.value,
            message:myMessage.value
        };
        addSendMail(myObj);

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




