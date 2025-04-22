const links = document.querySelectorAll('header .link')
const sections = document.querySelectorAll('#wrap>section')
let pageNum = 0
let totalNum = sections.length

const navBtn = document.querySelector('.navBtn')
const navBtnList = document.querySelectorAll('.modalNav ul li')
const body = document.querySelector('body')
const fixedTopBtn = document.querySelector('.fixedTop')


navBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    body.classList.toggle('full')
    fixedTopBtn.classList.remove('On')
  
})

navBtnList.forEach(function (nav, index) {

    nav.addEventListener('click', function () {
        
        body.classList.remove('full'),
        

        init(index)

        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: `#s${index}`
            }
        })

    })

})













let funcObj = {
    f_0: function () {
        console.log('0번 함수')
    },
    f_1: function () {
        console.log(1)
    },
    f_2: function () {
        console.log(2)
    },
    f_3: function () {
       
        const tl = gsap.timeline()

        tl.to('#s3 .tit-wrap>* ',{
            opacity:1,
            stagger:.3,
            x:10
        })
        tl.to('.project-lst li ',{
            opacity:1,
            stagger:.3,
            rotationY:360,
        })

    },
    f_4: function () {
        console.log(4)
    },

}

funcObj['f_0']()




window.addEventListener('scroll', () => {
    let scroll = window.scrollY;
    let body = document.body;
  
    console.log(scroll);
  
    if (body.classList.contains('full')) {
      // 'full' 클래스가 body에 있으면 On 클래스를 제거
      fixedTopBtn.classList.remove('On');
    } else {
      // 'full' 클래스가 없으면 스크롤 값에 따라 On 클래스를 추가하거나 제거
      if (scroll > 10) {
        fixedTopBtn.classList.add('On');
      } else {
        fixedTopBtn.classList.remove('On');
      }
    }
  });

fixedTopBtn.addEventListener('click', (e) => {
  e.preventDefault()

  window.scrollTo({
    top: 1,
    behavior: 'smooth'
  })

})