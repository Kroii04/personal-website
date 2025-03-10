let scroll_down = document.querySelector('.scroll_down')

scroll_down.addEventListener('mouseleave', function () {

    scroll_down.style.animation = 'restoration 0.7s 1 forwards'


})

scroll_down.addEventListener('mouseenter', function () {

    scroll_down.style.animation = 'scroll_down 0.7s 1 forwards'

})