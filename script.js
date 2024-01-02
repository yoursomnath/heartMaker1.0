let love_btn = document.querySelector(".cont");

love_btn.addEventListener("click", loveYou);


function loveYou(){
    ranX = Math.floor(Math.random()*100);
    ranY = Math.floor(Math.random()*100);
    let randomLove = document.createElement("div");
    randomLove.className = "cont";
    document.body.appendChild(randomLove);        
    console.log(ranX)
    console.log(ranY)
    randomLove.style.left = `${ranX}%`;
    randomLove.style.top = `${ranY}%`;
}
setInterval(loveYou,500);