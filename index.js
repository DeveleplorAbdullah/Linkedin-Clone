const d = new Date();
document.getElementById('demo').innerHTML = 'Copyright ' + d.getFullYear();

let profileMenu = document.querySelector("#profileMenu");

function tooggleMenu(){
    profileMenu.classList.toggle("open-menu");
}

