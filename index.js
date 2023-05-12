let openbtn=document.getElementById('open_btn');
let modalcontainer=document.getElementById('modal_container');
let closebtn=document.getElementById('close_btn');

openbtn.addEventListener('click', function(){
    modalcontainer.style.display='block';
})

closebtn.addEventListener('click', function(){
    modalcontainer.style.display='none';
})

window.addEventListener('click', function(e){
    if(e.target===modalcontainer){
        modalcontainer.style.display='none';
    }
   
})