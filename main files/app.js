const accountName = document.querySelector('.account__name__wrapper');
const accountDropDownContainer = document.querySelector('.account__dropdown__container')

accountName.addEventListener('click', ()=> {
    
  accountDropDownContainer.style.display = (accountDropDownContainer.style.display === 'none' || accountDropDownContainer.style.display === '') ? 'block' : 'none';
})


// Notification bar toggle
const notificationIcon = document.querySelector('.notification__btn');
notificationIcon.addEventListener('click',()=> {
  const notificationDropDown = document.querySelector('.notification__dropdown__container');
  
  
  notificationDropDown.style.display = (notificationDropDown.style.display === 'none' || notificationDropDown.style.display === '') ? 'block' : 'none';
  
})



const setUp = document.querySelector(".setup__guide__questions");
const arrowDown = document.querySelector(".bx-chevron-down");

arrowDown.addEventListener("click", () => {
  setUp.classList.toggle("active");
  arrowDown.classList.toggle('arrow__up')
});
 
  // First Guide
const radioOne = document.querySelector('.radio__one');

  radioOne.addEventListener('click', ()=> {
    const firstGuideContainer = document.querySelector('.first__guide__container'); 
   
    const firstGuideContent = document.querySelector('.first__guide__content')
    firstGuideContent.style.display = (firstGuideContent.style.display === 'none' || firstGuideContent.style.display === '') ? 'block' : 'none';
    firstGuideContent.style.marginLeft = '0.5rem'

    const firstGuideImg = document.querySelector('.customize__online__store__img')
    firstGuideImg.style.display = (firstGuideImg.style.display === 'none' || firstGuideImg.style.display === '') ? 'block' : 'none';
    const firstGuideh2 = document.querySelector('.first__guide__wrapper h2');
    
    firstGuideh2.style.display = 'none';
    firstGuideContent.style.display === 'none'? firstGuideh2.style.display = 'block' : 'none'
     
    firstGuideContainer.style.backgroundColor = '#F3F3F3'
    firstGuideContent.style.display === 'none' ? firstGuideContainer.style.backgroundColor = '#fff' : '#f3f3f3'
  
  })

  // Second Guide
  const radioTwo = document.querySelector('.radio__two');
  radioTwo.addEventListener('click', ()=> {

    const secondGuideContainer = document.querySelector('.second__guide__container'); 
   
    const secondGuideContent = document.querySelector('.second__guide__content')
    secondGuideContent.style.display = (secondGuideContent.style.display === 'none' || secondGuideContent.style.display === '') ? 'block' : 'none';
    secondGuideContent.style.marginLeft = '0.5rem'

    const secondGuideImg = document.querySelector('.add__first__product__img')
    secondGuideImg.style.display = (secondGuideImg.style.display === 'none' || secondGuideImg.style.display === '') ? 'block' : 'none';
    const secondGuideh2 = document.querySelector('.second__guide__wrapper h2');
    
    secondGuideh2.style.display = 'none';
    secondGuideContent.style.display === 'none'? secondGuideh2.style.display = 'block' : 'none'
    secondGuideContainer.style.backgroundColor = '#F3F3F3'
    secondGuideContent.style.display === 'none' ? secondGuideContainer.style.backgroundColor = '#fff' : '#f3f3f3'
  
  })

   // Third Guide
   const radioThree = document.querySelector('.radio__three');
   radioThree.addEventListener('click', ()=> {
 
     const thirdGuideContainer = document.querySelector('.third__guide__container'); 
    
     const thirdGuideContent = document.querySelector('.third__guide__content')
     thirdGuideContent.style.display = (thirdGuideContent.style.display === 'none' || thirdGuideContent.style.display === '') ? 'block' : 'none';
     thirdGuideContent.style.marginLeft = '0.5rem'

     const thirdGuideImg = document.querySelector('.add__domain__img')
     thirdGuideImg.style.display = (thirdGuideImg.style.display === 'none' || thirdGuideImg.style.display === '') ? 'block' : 'none';
     const thirdGuideh2 = document.querySelector('.third__guide__wrapper h2');
     
     thirdGuideh2.style.display = 'none';
     thirdGuideContent.style.display === 'none'? thirdGuideh2.style.display = 'block' : 'none'
     thirdGuideContainer.style.backgroundColor = '#F3F3F3'
     thirdGuideContent.style.display === 'none' ? thirdGuideContainer.style.backgroundColor = '#fff' : '#f3f3f3'
   
   })

     // Fourth Guide
     const radioFour = document.querySelector('.radio__four');
     radioFour.addEventListener('click', ()=> {
   
       const fourthGuideContainer = document.querySelector('.fourth__guide__container'); 
      
       const fourthGuideContent = document.querySelector('.fourth__guide__content')
       fourthGuideContent.style.display = (fourthGuideContent.style.display === 'none' || fourthGuideContent.style.display === '') ? 'block' : 'none';
       fourthGuideContent.style.marginLeft = '0.5rem'
  
       const fourthGuideImg = document.querySelector('.name__store__img')
       fourthGuideImg.style.display = (fourthGuideImg.style.display === 'none' || fourthGuideImg.style.display === '') ? 'block' : 'none';
       const fourthGuideh2 = document.querySelector('.fourth__guide__wrapper h2');
       
       fourthGuideh2.style.display = 'none';
       fourthGuideContent.style.display === 'none'? fourthGuideh2.style.display = 'block' : 'none'
       fourthGuideContainer.style.backgroundColor = '#F3F3F3'
       fourthGuideContent.style.display === 'none' ? fourthGuideContainer.style.backgroundColor = '#fff' : '#f3f3f3'
     
     })

        // Fifth Guide
        const radioFive = document.querySelector('.radio__five');
        radioFive.addEventListener('click', ()=> {
      
          const fifthGuideContainer = document.querySelector('.fifth__guide__container'); 
         
          const fifthGuideContent = document.querySelector('.fifth__guide__content')
          fifthGuideContent.style.display = (fifthGuideContent.style.display === 'none' || fifthGuideContent.style.display === '') ? 'block' : 'none';
          fifthGuideContent.style.marginLeft = '0.5rem'
     
          const fifthGuideImg = document.querySelector('.setup__payment__img')
          fifthGuideImg.style.display = (fifthGuideImg.style.display === 'none' || fifthGuideImg.style.display === '') ? 'block' : 'none';
          const fifthGuideh2 = document.querySelector('.fifth__guide__wrapper h2');
          
          fifthGuideh2.style.display = 'none';
          fifthGuideContent.style.display === 'none'? fifthGuideh2.style.display = 'block' : 'none'
          fifthGuideContainer.style.backgroundColor = '#F3F3F3'
          fifthGuideContent.style.display === 'none' ? fifthGuideContainer.style.backgroundColor = '#fff' : '#f3f3f3'
        
        })