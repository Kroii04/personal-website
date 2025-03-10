let frontend_area = document.querySelector('.frontend_area')
let frontend_dropdown_content = document.querySelector('.frontend_dropdown_content')
let frontend_dropdown = document.querySelector('.frontend_dropdown')
let skill_characters = document.querySelectorAll('.skill_characters')
let skill_characters_percentage = document.querySelectorAll('.skill_characters_percentage')
let icon_down = document.querySelector('.icon_down')

let backend_area = document.querySelector('.backend_area')
let backend_dropdown_content = document.querySelector('.backend_dropdown_content')
let backend_dropdown = document.querySelector('.backend_dropdown')
let skill_characters_backend = document.querySelectorAll('.skill_characters_backend')
let skill_characters_percentage_backend = document.querySelectorAll('.skill_characters_percentage_backend')
let icon_down_backend = document.querySelector('.icon_down_backend')
let skill_bar_backend = document.querySelectorAll('.skill_bar_backend')


let b = 0;
let k = 0;

frontend_area.classList.add('frontend_area_expanded')
frontend_dropdown_content.style.animation = 'from_top_to_bottom_bar_front 0s 1 forwards'
skill_characters.forEach(function (element) {
    element.style.animation = 'from_top_to_bottom_char_front 0s 1 forwards'
});
skill_characters_percentage.forEach(function (element) {
    element.style.animation = 'from_top_to_bottom_char_front 0s 1 forwards'
});
icon_down.style.animation = 'arrow_up 0s 1 forwards'


frontend_dropdown.addEventListener('click', function () {
    if (k % 2 == 1) {
        frontend_area.classList.add('frontend_area_expanded')
        frontend_dropdown_content.style.animation = 'from_top_to_bottom_bar_front 0.7s 1 forwards'
        skill_characters.forEach(function (element) {
            element.style.animation = 'from_top_to_bottom_char_front 0.7s 1 forwards'
        });
        skill_characters_percentage.forEach(function (element) {
            element.style.animation = 'from_top_to_bottom_char_front 0.7s 1 forwards'
        });
        icon_down.style.animation = 'arrow_up 0.7s 1 forwards'


    } else {
        frontend_area.style.transition = 'height 0.7s ease-out'
        frontend_area.classList.remove('frontend_area_expanded')
        frontend_dropdown_content.style.animation = 'from_bottom_to_top_bar_front 0.7s 1 forwards'
        skill_characters.forEach(function (element) {
            element.style.animation = 'from_bottom_to_top_char_front 0.7s 1 forwards'
        });
        skill_characters_percentage.forEach(function (element) {
            element.style.animation = 'from_bottom_to_top_char_front 0.7s 1 forwards'
        });
        icon_down.style.animation = 'arrow_down 0.7s 1 forwards'
    }

    k++;
})


backend_dropdown.addEventListener('click', function () {
    if (b % 2 == 0) {
        backend_area.style.transition = 'height 0.7s ease-out'
        backend_area.classList.add('backend_area_expanded')
        backend_dropdown_content.style.animation = 'from_top_to_bottom_bar_back 0.7s 1 forwards'
        skill_characters_backend.forEach(function (element) {
            element.style.animation = 'from_top_to_bottom_char_back 0.7s 1 forwards'
        });
        skill_characters_percentage_backend.forEach(function (element) {
            element.style.animation = 'from_top_to_bottom_char_back 0.7s 1 forwards'
        });
        skill_bar_backend.forEach(function (element) {
            element.style.animation = 'from_top_to_bottom_char_back 0.7s 1 forwards'
        })
        icon_down_backend.style.animation = 'arrow_up 0.7s 1 forwards'
    } else {
        backend_area.classList.remove('backend_area_expanded')
        backend_dropdown_content.style.animation = 'from_bottom_to_top_bar_back 0.7s 1 forwards'
        skill_characters_backend.forEach(function (element) {
            element.style.animation = 'from_bottom_to_top_char_back 0.7s 1 forwards'
        });
        skill_characters_percentage_backend.forEach(function (element) {
            element.style.animation = 'from_bottom_to_top_char_back 0.7s 1 forwards'
        });
        skill_bar_backend.forEach(function (element) {
            element.style.animation = 'from_bottom_to_top_char_back 0.7s 1 forwards'
        })
        icon_down_backend.style.animation = 'arrow_down 0.7s 1 forwards'
    }
    b++;
})

