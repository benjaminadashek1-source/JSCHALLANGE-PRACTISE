 homeScore = document.getElementById("home-score")
 guestScore = document.getElementById("guest-score")
 let guestPcore = 0
let homePcore = 0
function home1Add(){
  homePcore+=1
  console.log(homePcore)
  homeScore.textContent = homePcore
}
function home2Add(){
  homePcore+=2
  console.log(homePcore)
  homeScore.textContent = homePcore
}
function home3Add(){
  homePcore+=3
  console.log(homePcore)
  homeScore.textContent = homePcore
}
function guest1Add(){
guestPcore+=1

guestScore.textContent = guestPcore
}
function guest2Add(){
  guestPcore+=2
  
  guestScore.textContent = guestPcore
  }
  function guest3Add(){
    guestPcore+=3
    
    guestScore.textContent = guestPcore
    }