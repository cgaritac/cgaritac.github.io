let navLinks = document.querySelectorAll('a.inner-link');
// console.log(navLinks)

navLinks.forEach((item)=>{
    // console.log(item)
    item.addEventListener('click', function(){
        document.querySelector('nav ul li a.active').classList.remove('active')
        document.querySelector(`nav ul li a[href='${item.getAttribute('href')}']`).classList.add('active')
        // document.querySelector(`nav ul li a[href='#home']`).classList.add('active')
        document.querySelector('main > section.active').classList.remove('active')
        document.querySelector(`main > section${item.getAttribute('href')}`).classList.add('active');
        // console.log(`main > section${item.getAttribute('href')}`)
    })
})

document.querySelector('#sidebar .toggle-sidebar').addEventListener('click', function(){
    document.querySelector('#sidebar').classList.toggle('open')
})

var typed = new Typed('.field h2', {
    strings: ['Software developer', 'Front-End developer', 'Back-End developer', 'Data analyst'],
    loop: true,
    typeSpeed: 70,
    backSpeed: 10,
  });

  for(let i=1;i<=15;i++){
    let meteor = document.createElement('span');
    meteor.classList='meteor';
    document.querySelector('#home .meteor-shower').append(meteor);
  }