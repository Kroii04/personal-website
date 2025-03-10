let translate = document.querySelector('.translate')
let home = document.querySelector('.home')
let about = document.querySelector('.about')
let skills = document.querySelector('.skills')
let portfolio = document.querySelector('.portfolio')
let contact = document.querySelector('.contact')
let hi = document.querySelector('.hi')
let position = document.querySelector('.position')
let position_introduce = document.querySelector('.position_introduce')
let contact_button = document.querySelector('.contact_button')
let scroll_down_characters = document.querySelector('.scroll_down_characters')

let head_about_me = document.querySelector('.head_about_me')
let subhead_about_me = document.querySelector('.subhead_about_me')
let introduction_details = document.querySelector('.introduction_details')
let num_characters1 = document.querySelector('.num_characters1')
let num_characters2 = document.querySelector('.num_characters2')
let num_characters3 = document.querySelector('.num_characters3')
let introduction_downloadCV_button = document.querySelector('.introduction_downloadCV_button')

let frontend_dropdown_head = document.querySelector('.frontend_dropdown_head')
let frontend_dropdown_subhead = document.querySelector('.frontend_dropdown_subhead')
let backend_dropdown_head = document.querySelector('.backend_dropdown_head')
let backend_dropdown_subhead = document.querySelector('.backend_dropdown_subhead')
let skills_head = document.querySelector('.skills_head')
let skills_subhead = document.querySelector('.skills_subhead')

let call_me = document.querySelector('.call_me')
let e_mail1 = document.querySelector('.e_mail1')
let location1 = document.querySelector('.location1')
let contact_me_head = document.querySelector('.contact_me_head')
let contact_me_subhead = document.querySelector('.contact_me_subhead')

let protfolio_head = document.querySelector('.protfolio_head')
let protfolio_subhead = document.querySelector('.protfolio_subhead')
let protfolio_project1_head = document.querySelector('.protfolio_project1_head')
let protfolio_project1_subhead = document.querySelector('.protfolio_project1_subhead')


let translate_count = 0;

//点击使得translate变蓝，再次点击变回去
//翻译
translate.addEventListener('click', function () {
    if (translate_count % 2 == 0) {
        translate.classList.add('translate_blue')

        home.innerHTML = '主页 <div class="stream_bar"></div>'
        about.innerHTML = '关于  <div class="stream_bar"></div>'
        skills.innerHTML = '技能 <div class="stream_bar"></div>'
        portfolio.innerHTML = '作品集 <div class="stream_bar"></div>'
        contact.innerHTML = '联系我 <div class="stream_bar"></div>'
        hi.textContent = '你好，我是LUV'
        position.textContent = '后端Java工程师'
        position_introduce.textContent = '掌握Spring Boot与微服务，基于Docker及Nacos等中间件构建高可用系统，并通过MyBatis-Plus、Redis优化数据访问，整合AI工具提升开发效率。'
        contact_button.innerHTML = `联系我吧！<div class="play-filled icon icon2"></div>
						<div class="play-filled icon icon1"></div>`
        scroll_down_characters.innerHTML = '下滑'

        head_about_me.innerHTML = '关于我'
        subhead_about_me.innerHTML = '我的介绍'
        introduction_details.innerHTML = `具有丰富项目经验的Web技术专业人士，致力于成为后端开发工程师，并在互联网行业发展。`
        num_characters1.innerHTML = `工作经验`
        num_characters2.innerHTML = '完成项目'
        num_characters3.innerHTML = '完成实习'
        introduction_downloadCV_button.innerHTML = '下载简历 <div class="download icon_download"></div>'
        frontend_dropdown_head.innerHTML = '前端开发工程师'
        frontend_dropdown_subhead.innerHTML = '超过*年'
        backend_dropdown_head.innerHTML = '后端工程师'
        backend_dropdown_subhead.innerHTML = '超过*年'
        skills_head.innerHTML = '技能'
        skills_subhead.innerHTML = '我的技术水平'

        call_me.innerHTML = '打电话给我'
        e_mail1.innerHTML = '邮箱'
        location1.innerHTML = '位置'
        contact_me_head.innerHTML = '联系我'
        contact_me_subhead.innerHTML = '取得联系'

        protfolio_head.innerHTML = '作品集'
        protfolio_subhead.innerHTML = '最近的工作'
        protfolio_project1_head.innerHTML = '个人网站'
        protfolio_project1_subhead.innerHTML = '这是我的个人网站，展示了我的项目、技能和联系方式。网站设计简洁、易于导航，充分体现了我的创造力和技术能力。'

    } else {
        translate.classList.remove('translate_blue')

        home.innerHTML = 'home <div class="stream_bar"></div>'
        about.innerHTML = 'About <div class="stream_bar"></div>'
        skills.innerHTML = 'Skills <div class="stream_bar"></div>'
        portfolio.innerHTML = 'Portfolio <div class="stream_bar"></div>'
        contact.innerHTML = 'Contact Me <div class="stream_bar"></div>'
        hi.textContent = 'Hi,I\'m LUV'
        position.textContent = 'Backend Java Engineer'
        position_introduce.textContent = 'Grasp in Spring Boot and microservices,building highly available systems with Docker and Nacos, optimizing data access via MyBatis - Plus and Redis, and enhancing efficiency through AI tools.'
        contact_button.innerHTML = `Contact Me <div class="play-filled icon icon2"></div>
						<div class="play-filled icon icon1"></div>`
        scroll_down_characters.innerHTML = 'Scroll down'

        head_about_me.innerHTML = 'About Me'
        subhead_about_me.innerHTML = 'My introduction'
        introduction_details.innerHTML = `Web technical professional with extensive project experience,aspiring to become a backend developer and work in the internet industry.`
        num_characters1.innerHTML = 'Years of experience'
        num_characters2.innerHTML = 'Completed projects'
        num_characters3.innerHTML = 'Internships completed'
        introduction_downloadCV_button.innerHTML = 'Download CV <div class="download icon_download"></div>'
        frontend_dropdown_head.innerHTML = 'Frontend developer'
        frontend_dropdown_subhead.innerHTML = 'More than * years'
        backend_dropdown_head.innerHTML = 'Backend developer'
        backend_dropdown_subhead.innerHTML = 'More than * years'
        skills_head.innerHTML = 'Skills'
        skills_subhead.innerHTML = 'My technical level'

        call_me.innerHTML = 'Call me'
        e_mail1.innerHTML = 'E-mail'
        location1.innerHTML = 'Location'
        contact_me_head.innerHTML = 'Contact me'
        contact_me_subhead.innerHTML = 'Get in touch'

        protfolio_head.innerHTML = 'Protfolio'
        protfolio_subhead.innerHTML = 'Most recent works'
        protfolio_project1_head.innerHTML = 'Personal web sites1'
        protfolio_project1_subhead.innerHTML = `This is my personal website, showcasing my projects, skills, and contact info. It's simple,
            easy to navigate, and
							highlights my creativity and technical expertise.`


    }

    translate_count++;
})
