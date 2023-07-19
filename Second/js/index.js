// set Active class For NavBar
const navBar=document.getElementById('navbar');
console.log(navBar);
console.log(window.scrollY);
setInterval(()=>{
    window.scrollY > 0 && navBar.classList.add('active');
},1);

setInterval(()=>{
        window.scrollY === 0 && navBar.classList.remove('active');
},1);


// set active class for menu toggles
const togglesMenu=document.getElementById('burgerMenu');
const menuList = document.getElementById('menuList');

togglesMenu.addEventListener('click',()=>{
    menuList.classList.toggle('active');
});


// set active class for menu items
const link=document.getElementsByTagName('a');
const removeActiveClass=()=>{
    for(let x of link){
        if(x.classList.contains('active')){
            x.classList.remove('active');
        }
    }
};
document.querySelector('#menuList').addEventListener('click',e=>{
    const target=e.target;
    removeActiveClass();
    target.classList.add('active');
});