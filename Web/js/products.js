//click hình tự zoom lên
var images = document.querySelectorAll(".img_daidien img");
var gallery = document.querySelector(".gallery");
var galleryImg = document.querySelector(".gallery_inner img");
let close = document.querySelector(".gallery .close");
let currentIndex = 0;

images.forEach((item, index)=>{
    item.addEventListener('click', function(){
        currentIndex = index;
        showGallery();
    })
})
function showGallery() {
    gallery.classList.add("show");
    galleryImg.src = images[currentIndex].src;
}
close.addEventListener("click", () => {
    gallery.classList.remove("show");
  });







let amountElement = document.getElementById('amount');
let amount = amountElement.value;
// Handle Plus
let handlePlus = () =>{
    amount++;
    render(amount);
}
// Render
let render = (amount) => {
    amountElement.value = amount;
}

//Handle Minus

let handleMinus = () =>{
    if( amount > 1){
        amount--;
        render(amount);
    }
}

// nhập vào vẫn về 1

amountElement.addEventListener('input',function(){
    amount = amountElement.value;
    amount = parseInt(amount);
    amount = (isNaN(amount)  || amount == 0) ? 1 : amount;
    render(amount);
});


//add giỏ hàng
function addGioHang(x){
    
}