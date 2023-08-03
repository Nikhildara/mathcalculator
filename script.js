let screen=document.getElementById("screen");
let buttons=document.querySelectorAll(".btn");
let equal=document.querySelector(".btn-green");
let clear=document.querySelector(".btn-red");


let lastDigit
buttons.forEach(function(button){
    button.addEventListener("click",function(event){
        let value=event.target.dataset.num;
        screen.value+=value;
    })
});

equal.addEventListener("click",function(event){
    if (screen.value===""){
        screen.value=""
    }
    else{
        let ans=eval(screen.value);
        screen.value=ans;
    }
})

clear.addEventListener('click',function(event){
    screen.value=""
})




