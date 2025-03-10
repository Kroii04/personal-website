let dark = document.querySelector('.dark')
let body = document.querySelector('body')
let navigation_bar = document.querySelector('.navigation_bar')
let bar = document.querySelector('.bar')
let contact_me_number = document.querySelectorAll('.contact_me_number')
let i = 0;

dark.addEventListener('click', function () {
    if (i % 2 == 0) {
        body.style.backgroundColor = 'black'
        body.style.color = 'white'
        navigation_bar.style.backgroundColor = 'black'
        navigation_bar.style.borderBottom = '2px rgba(255, 255, 255, 0.61) solid'
        home.classList.add('character_white')
        about.classList.add('character_white')
        skills.classList.add('character_white')
        portfolio.classList.add('character_white')
        contact.classList.add('character_white')
        translate.classList.add('translate_white')
        dark.classList.add('dark_white')
        position.style.color = 'rgba(255, 255, 255, 0.3)'

        introduction_details.classList.add('character_white')
        num_characters1.classList.add('character_white')
        num_characters2.classList.add('character_white')
        num_characters3.classList.add('character_white')

        backend_dropdown_subhead.classList.add('character_white_tran')
        frontend_dropdown_subhead.classList.add('character_white_tran')
        skill_characters_percentage.forEach(function (element) {
            element.classList.add('character_white_tran')
        })
        skill_characters_percentage_backend.forEach(function (element) {
            element.classList.add('character_white_tran')
        })
        contact_me_number.forEach(function (element) {
            element.classList.add('character_white')
        })
    } else {
        body.style.backgroundColor = 'white'
        body.style.color = 'black'
        navigation_bar.style.backgroundColor = 'white'
        navigation_bar.style.borderBottom = '2px rgba(0, 0, 0, 0.61) solid'
        home.classList.remove('character_white')
        about.classList.remove('character_white')
        skills.classList.remove('character_white')
        portfolio.classList.remove('character_white')
        contact.classList.remove('character_white')
        translate.classList.remove('translate_white')
        dark.classList.remove('dark_white')
        position.style.color = 'rgba(0, 0, 0, 0.3)'

        introduction_details.classList.remove('character_white')
        num_characters1.classList.remove('character_white')
        num_characters2.classList.remove('character_white')
        num_characters3.classList.remove('character_white')

        backend_dropdown_subhead.classList.remove('character_white_tran')
        frontend_dropdown_subhead.classList.remove('character_white_tran')
        skill_characters_percentage.forEach(function (element) {
            element.classList.remove('character_white_tran')
        })
        skill_characters_percentage_backend.forEach(function (element) {
            element.classList.remove('character_white_tran')
        })
        contact_me_number.forEach(function (element) {
            element.classList.remove('character_white')
        })
    }

    i++
})