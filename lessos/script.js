const btns = document.querySelectorAll('button');
    wrapper = document.querySelector('.btnBlock');


wrapper.addEventListener('click', (e) => {
    if (e.target && e.target.tagName == "BUTTON") {
        console.log('hey');
    }
})


const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);