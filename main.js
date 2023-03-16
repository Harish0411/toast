let notification = document.querySelector('.notification');
let buttons = document.querySelectorAll('.buttons .btn');

let toastDetails ={
    success :{
        icon : 'fa-circle-check',
        text: 'Success: This is a success toast'
    },
    error:{
        icon:'fa-circle-xmark',
        text:'Error: This is an error toast'
    },
    warning:{
        icon:'fa-triangle-exclamation',
        text:'warning: This is a warning toast'
    },
    info:{
        icon:'fa-circle-info',
        text:'Info: This is an information toast'
    },
    timer:5000

}
let removeToast = (toast) => {
    toast.classList.add('hide');
    if(toast.timeout) clearTimeout(toast.timeout);
    setTimeout(() => toast.remove(), 500);
}
let createToast = (id)=>{
   let {icon, text} = toastDetails[id]
   let toast = document.createElement('li');
   toast.className = `toast ${id}`;
   toast.innerHTML = `<div class="col">
                    <i class="fa-solid ${icon}"></i>
                    <span>${text}</span>
                    </div>
                    <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;
    notification.appendChild(toast);
    toast.timeout = setTimeout(()=> removeToast(toast),toastDetails.timer);
}
buttons.forEach(btn =>{
    btn.addEventListener('click', () => createToast(btn.id))
})

