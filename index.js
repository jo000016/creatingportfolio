/*** navigation ***/

var trigger =
document.getElementsByClassName('trigger')[0];
var body =
document.getElementsByTagName('body')[0];

trigger.addEventListener('click', toggleNavigation);

function toggleNavigation(e) {
e.preventDefault();
body.classList.toggle('nav-open');
}



/**** gallery ****/

const photoillust = []
const pictures = ['1','2','3','4','5','6','7','8','9']

const $photoillust = document.querySelector('.photoillust')

const $modal = document.querySelector('.modal')




 
for (const picture of pictures){
  const $photo = document.createElement('div')
  $photo.classList.add('photo')
  
  const $img = document.createElement('img')
  $img.src = `shop/${picture}.jpg`
  
  $photo.appendChild($img)
  
  
    const $gallerylayout = document.createElement('div')
  $gallerylayout.classList.add('gallerylayout')
    $photo.appendChild($gallerylayout)
    
    const $newtext = document.createElement('h2')
    $newtext.classList.add('newtext')
    const newtext = '★★★★★'
    $newtext.textContent = newtext
   $photo.appendChild($newtext) 
    
    $photoillust.appendChild($photo)
    
    
    
    $photo.addEventListener('click', function(e) {
    $modal.innerHTML = $photo.innerHTML
    $modal.classList.toggle('show')
        
  })

 
}


$modal.addEventListener('click', function(e) {
    
  $modal.classList.remove('show')
})



$photoillust.addEventListener('mouseover', function(e){
    console.log(event.target)
    const photo
    = event.target.closest('.photo')
    
    if (photo) {
        photo.classList.toggle('hover') 
    }
})


$photoillust.addEventListener('mouseout', function(e){
    console.log(event.target)
    const photo= event.target.closest('.photo')
    
    if (photo) {
        photo.classList.toggle('hover') 
    }
})



/***** second *****/


const taken = []
const newpictures = ['24','23','22','21','20','19','18','17','16', '15','14','13','12','11','10','9','8','7','6','5','4','3','2','1']

const $taken = document.querySelector('.taken')

const $newmodal = document.querySelector('.newmodal')




 
for (const newpicture of newpictures){
  const $newphoto = document.createElement('div')
  $newphoto.classList.add('newphoto')
  
  const $newimg = document.createElement('img')
  $newimg.src = `photo/${newpicture}.jpg`
  
  $newphoto.appendChild($newimg)
  
  
    const $newlayout = document.createElement('div')
  $newlayout.classList.add('newlayout')
    $newphoto.appendChild($newlayout)
    
    
    
    $taken.appendChild($newphoto)
    
    
    
    $newphoto.addEventListener('click', function(e) {
    $newmodal.innerHTML = $newphoto.innerHTML
    $newmodal.classList.toggle('newshow')
        
  })

}


$newmodal.addEventListener('click', function(e) {
    
  $newmodal.classList.remove('newshow')
})



$taken.addEventListener('mouseover', function(e){
    console.log(event.target)
    const newphoto
    = event.target.closest('.newphoto')
    
    if (newphoto) {
 newphoto.classList.toggle('newhover') 
    }
})


$taken.addEventListener('mouseout', function(e){
    console.log(event.target)
    const newphoto= event.target.closest('.newphoto')
    
    if (newphoto) {
        newphoto.classList.toggle('newhover') 
    }
})



