let menu = document.querySelector('.menu-icon');

menu.onclick = () => {
    menu.classList.toggle('move')

}

function validate(){
        let name = document.querySelector('.name')
        let email = document.querySelector('.email')
        let msg = document.querySelector('.message')
        let sendBtn = document.querySelector('.send-btn')


    sendBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (name.value == "" || email.value == "" || msg.value == "") {
            emptyerror();
        } else {
            sendmail(name.value, email.value, msg.value);
            success();
        }

    });
}
validate();


function emptyerror() {
    swal({
        title: "Oh no...!",
        text: "Fields cannot be empty!",
        icon: "Error",
        
      });
}