const accountName = document.querySelector('.account__name__wrapper');
accountName.addEventListener('click', ()=> {
     const accountDropDownContainer = document.querySelector('.account__dropdown__container')
     accountDropDownContainer.style.display = 'block'                 
     accountDropDownContainer.classList.toggle('active')
     const accountDropDownContainerActive = document.querySelector('.account__dropdown__container.active')
     accountDropDownContainerActive.style.display = 'none';
})


const setUp = document.querySelector(".setup__guide__questions");
const arrowDown = document.querySelector(".bx-chevron-down");

arrowDown.addEventListener("click", () => {
  setUp.classList.toggle("active");
});

const radio = document.querySelector('.radio');

  radio.addEventListener('click', ()=> {
    const firstGuideContainer = document.querySelector('.first__guide__container'); 
   
    const firstGuideContent = document.querySelector('.first__guide__content')
    firstGuideContent.classList.toggle('active');
    const firstGuideImg = document.querySelector('.customize__online__store__img')
    const firstGuideh2 = document.querySelector('.first__guide__wrapper h2');
    
    firstGuideContent.style.display = 'block'
    firstGuideImg.style.display = 'block';
    firstGuideh2.style.display = 'none';
    firstGuideContainer.style.backgroundColor = '#F3F3F3'

    
  })

