const slides = document.querySelectorAll('.slide')

for (let slide of slides) {
    slide.addEventListener('click', function () {
        removeActive()
        slide.classList.add('active')
    })
}

function removeActive() {
    for (let slide of slides) {
        slide.classList.remove('active')
    }
}
