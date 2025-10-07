// input text
const input = document.querySelector('input');

const divText = document.querySelector('h1');
//  event listener
input.addEventListener("keyup",function(){
    const text = input.value;
    divText.innerText = text;

    if(text.length >10){
        divText.style.color = 'yellow';
    }else{
        divText.style.color = 'red';
    }
})