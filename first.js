const slides = document.querySelectorAll(".slide");
 var counter = 0;

slides.forEach(
    (slide, index) => {
slide.style.left = `${index * 100}%`
    }
)

const goPrev = () => {
    counter--
    if (counter < 0) {
        counter = slides.length - 1;
    }
    slideImage();
}

const goNext = () => {
    counter++
    if (counter === slides.length) {
        counter = 0;
    }
    slideImage();
}
const slideImage = () => {
    slides.forEach(
        (slide)=>{
            slide.style.transform = `translateX(-${counter * 100}%)`;

        }
    )
}












// var slideCount = 0 ;
// var imageparent = document.getElementById('imageparent');
// var displayImage = document.getElementById('displayImage');

// var allImages = imageparent.getElementsByTagName('IMG');
// var allSrc = [];


// for (var i = 0; i < imageparent.length; i++ ){
//     allSrc.push(allImages[i].src);
//     console.log(src);
//     allSrc.push(src);
// }
// function renderSlide(){
//     displayImage.src = allSrc[slideCount];
// }



// function nextSlide(){
//     if (slideCount == allSrc.length - 1){
//         slideCount++;
// }
// else {
//     slideCount = 0;
// }
// renderSlide();
// }
// function prevSlide(){
//     if (slideCount == 0){
//         slideCount--;
//     }
//     else {
   
   
//         slideCount = allSrc.length - 1;
// }
// renderSlide();
// }

// var center = document.getElementById('center');
// console.log(center);

// var para =document.getElementById('para')
// console.log(para.childNodes[0]);
// para.childNodes[0].nodeValue = "GHULAM"

