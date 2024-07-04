const profilePhoto = document.querySelector('.profile-photo')

profilePhoto.addEventListener('click', () => {
    /*if(document.body.className == 'dark-mode'){
        document.body.className=''
    } else {
        document.body.className = 'dark-mode'
    }*/

    document.body.classList.toggle("dark-mode") //toggle: 있으면 없애고 없으면 있게하는...
});


