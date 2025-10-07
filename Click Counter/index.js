const click = document.querySelector('#btn');
const h1 = document.querySelector('h1');
let count = 0;
click.addEventListener("click",function(event){
    count++;
    h1.textContent = "count:" +count;
})