let a = prompt(`请输入访问密码，用于展示信息，下载简历和项目`)
let download_demo_button = document.querySelector('.download_demo_button')
let phone_number = document.querySelector('.phone_number')
let e_mail_self = document.querySelector('.e_mail_self')
let location_sh = document.querySelector('.location_sh')
let csdn = document.querySelector('.csdn')
let leetcode = document.querySelector('.leetcode')

if (a === 'your_password') {
    introduction_downloadCV_button.setAttribute('href', 'resource/cv.pdf');
    download_demo_button.setAttribute('href', 'resource/MyWebSite.zip')

    phone_number.innerHTML = 'Your phone number'
    e_mail_self.innerHTML = 'Your mail'
    location_sh.innerHTML = 'Your location'

    csdn.setAttribute('href', '#')
    leetcode.setAttribute('href', '#')
} else {
    introduction_downloadCV_button.setAttribute('href', '#');
    download_demo_button.setAttribute('href', '#')

    phone_number.innerHTML = '1*****'
    e_mail_self.innerHTML = 'g****@***.com'
    location_sh.innerHTML = '****,**'

    csdn.setAttribute('href', '#')
    leetcode.setAttribute('href', '#')
}
