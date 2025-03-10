let technical_standards = document.querySelectorAll('.technical_standard');
let num = technical_standards.length;

for (let i = 0; i < num; i++) {
    technical_standards[i].style.animation = `scrollLeft 70s ${70 / num * (num - i) * -1}s infinite linear`;
}
