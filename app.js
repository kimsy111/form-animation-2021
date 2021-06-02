function animatedForm(){
const arrows = document.querySelectorAll(".fa-arrow-down");

arrows.forEach(arrow =>{
    arrow.addEventListener('click',()=> {
        const input = arrow.previousElementSibling;
        const parent = arrow.parentElement;
        const nextForm = parent.nextElementSibling;


        if(input.type === "text" && vaildateUser(input)){
            nextSlide(parent,nextForm);
        } else if(input.type === 'email' && vaildateEmail(input)){
            nextSlide(parent,nextForm);
        } else{
            parent.style.animation = "shake 0.5s ease";
        }

        parent.addEventListener('animationend', ()=>{
            parent.style.animation ='';
        })
    });
});
}

function vaildateUser(user){
    if(user.value.length < 8){
error("rgb(189,87,87)");
    }else{
        error("rgba(87,189,130)");
        return true;
    }
}

function vaildateEmail(email){
    const vaildation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(vaildation.test(email.value))
{  error("rgba(87,189,130)");
return true;
}else{
    error("rgb(189,87,87)");
}
}
function nextSlide(parent,nextForm){
    parent.classList.add('innactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
}

function error(color){
    document.body.style.backgroundColor = color;
}

animatedForm();