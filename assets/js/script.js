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

  const shuffleInstance = new Shuffle(document.querySelector('#my_work .work-items'), {
    itemSelector: '.item'
  });

  const filterButtons = document.querySelectorAll('#my_work .filters button')

  filterButtons.forEach((item) => {
    item.addEventListener('click', workFilter)
  })

  function workFilter() {
    const clickedButton = event.currentTarget;
    const clickedButtonGroup = clickedButton.getAttribute('data-group');
    const activeButton = document.querySelector('#my_work .filters button.active');

    activeButton.classList.remove('active');
    clickedButton.classList.add("active");

    shuffleInstance.filter(clickedButtonGroup)

    console.log(activeButton)
  }

  const workModal = new bootstrap.Modal(document.getElementById('workModal'))

  const workElements = document.querySelectorAll('#my_work .work-items .wrap');
  //workModal.show(); // todo: must be remove
  workElements.forEach((item) => {
    item.addEventListener('click', function(){
      workModal.show();
    })
  })

  const workModalElement = document.getElementById('workModal')
  workModalElement.addEventListener('show.bs.modal', event => {
    document.getElementById('my_work').classList.add('blur');
    document.getElementById('sidebar').classList.add('blur');
  })

  workModalElement.addEventListener('hide.bs.modal', event => {
    document.getElementById('my_work').classList.remove('blur');
    document.getElementById('sidebar').classList.remove('blur');
  })


