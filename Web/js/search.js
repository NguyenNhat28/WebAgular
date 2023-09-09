/*search*/
var btnSearch = document.querySelector('.search-bot_btn')

btnSearch.addEventListener('click',function(){
    this.parentElement.classList.toggle('open')
})