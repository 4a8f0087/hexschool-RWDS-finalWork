$(document).ready(function() {

  // top 滑動
  $('.top a').click(function(event){
    
  event.preventDefault();
  $('html,body').animate({
  scrollTop: 0
  }, 800);

});

// menu 滑動到指定區域
$('.featureGo').click(function(){
  $('html,body').animate({
  scrollTop:$('#feature').offset().top-102
  },1000);

});

$('.chefGo').click(function(){
  $('html,body').animate({
  scrollTop:$('#chef').offset().top-52
  },1000);

});

$('.mapGo').click(function(){
  $('html,body').animate({
  scrollTop:$('#map').offset().top-52
  },1000);

});

// 漢堡選單按鈕打開左側選單
$('.hamburger').click(function(event){
   $('body').addClass('open');
    
});

// 點擊 search 按鈕出現搜尋欄
$(document).ready(function() {
  $('.navSearch').click(function(event) {

    event.preventDefault();
    $('.navSearch').toggleClass('active');
    $('.search').slideToggle();
})
});
    
// close 按鈕關閉左側選單
  $('.menuClose').click(function(event){
  $('body').removeClass('open');
});

// read more 下拉顯示文字
$(".more").click(function(){
    $(".chefText").slideToggle("slow");
    $(".more").html("read less");
  });

});

// 點擊愛心後變色
$(document).ready(function(){

  $('.pdtLike').click(function(event){
    $(this).find('i').css('color','rgba(245,108,35,1)');
  });

});

// 點擊加入購物車後出現已加入購物車的提醒
$(document).ready(function(){

  $(".popupOpen").click(function(){
    $("#popup1").fadeIn(600);
    $('#popup1').delay(400).fadeOut(1000);
  });

});

// 點擊垃圾桶後移除選項
$(document).ready(function(){

  $('.remove').click(function(event){

    event.preventDefault();
    $("#popup2").fadeIn(600);
    $(this).parent().parent().remove();
  })
});

// 移除選項後挑出刪除成功的提醒 & 點擊 x 關掉
$(document).ready(function(){

  $('.delClose').click(function(event) {
    event.preventDefault();
    $('.delPopup').hide();
    })
});

// 加減商品數量
// (學了js加法器後回來試試的)
const quantity = document.querySelector(".quantity");
console.log("quantity");
let count = parseInt(quantity.value);

//購物車的商品數量
let pdtNum = document.querySelector(".cartTitle span",);
let cartNum = document.querySelector(".cartNumber");
let finalCartNum = document.querySelectorAll(".cartNum");
//合計
let pdtTotal = document.querySelector(".pdtTotal");
let finalTotal = document.querySelector(".total");

//商品單價
let unitPrice = 120;


// 加數量
const addBtn = document.querySelector(".addBtn");
console.log("addBtn");

addBtn.addEventListener("click",function(e){
  count+=1;
  quantity.value = count;

  //更改購物車內容旁邊的購物車數量
  pdtNum.innerHTML = `<i class="fa-solid fa-cart-arrow-down"></i>(${count})`;
  //更改 herder 的購物車數量
  cartNum.textContent = count;
  //更改下方購物車明細的數量
  finalCartNum[0].textContent = count;
  finalCartNum[1].textContent = count;

  //更改合計金額
  pdtTotal.textContent = `NT$ ${count*unitPrice}`;
  finalTotal.textContent = `NT$ ${count*unitPrice}`;
  

});
// 減數量
const minusBtn = document.querySelector(".minusBtn");
console.log("minusBtn");

minusBtn.addEventListener("click",function(e){
  count-=1;
  quantity.value = count;

  //更改購物車內容旁邊的購物車數量
  pdtNum.innerHTML = `<i class="fa-solid fa-cart-arrow-down"></i>(${count})`;
  //更改 herder 的購物車數量
  cartNum.textContent = count;
  finalCartNum.textContent = count;
  //更改下方購物車明細的數量
  finalCartNum[0].textContent = count;
  finalCartNum[1].textContent = count;

  //更改合計金額
  pdtTotal.textContent = `NT$ ${count*unitPrice}`;
  finalTotal.textContent = `NT$ ${count*unitPrice}`;

});
