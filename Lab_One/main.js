// JavaScript Document

//create a variable and store a reference to the the image element inside this variable 
let image     =   document.querySelector  ('img'); 
  //add an event listener on image listening for a click event, when the click event happens, invoke the change
  image.addEventListener  ('click'    , changeImage); 

function changeImage() {let mySrc = image.getAttribute('src'); 
          if(mySrc === 'imgs/cat1.jpg') {image.setAttribute ('src', 'imgs/cat2.jpg'); 
  }else if(mySrc === 'imgs/cat2.jpg') {
                      image.setAttribute ('src', 'imgs/cat3.jpg'); }else {image.setAttribute ('src', 'imgs/cat1.jpg'); } 
}
