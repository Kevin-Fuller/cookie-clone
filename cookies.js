//game variables
let cookies = 0;
let cookiesPerSecond = 0;
let clickMultiplyer = 1;

const cookie_total = document.getElementById('cookie__counter');
const cookies_per_second = document.getElementById('cookies__per__second');
function updateCookies() {
    cookie_total.innerText = Math.round(cookies);
    cookies_per_second.innerText = `per second: ${Math.floor(cookiesPerSecond)}`;
}

function clickCookie() {
    cookies += 1 * clickMultiplyer;
    updateCookies();
}

const cookieButton = document.getElementById('clickable__cookie');
cookieButton.addEventListener('click', ()=>{
    clickCookie();
})

//buildings
let building2Total = 0;
let building2Cost = 100;
let building2BaseCPS = 4;
let building2Multiplyer = 1;
const building2Wrapper = document.getElementById('building2');
const building2CostLabel = document.getElementById('building2Cost');
const building2TotalLabel = document.getElementById('building2Total');
const building2 = document.getElementById('building2');
building2.addEventListener('click', ()=>{
    if (cookies >= building2Cost) {
        buybuilding2();
    }
})

function buybuilding2() {
    cookies -= building2Cost;
    building2Total += 1;
    building2Cost = Math.round(building2Cost * 1.4);
    building2CostLabel.innerText = building2Cost;
    building2TotalLabel.innerText = building2Total;
    updateCPS()
}

let building1Total = 0;
let building1Cost = 10;
let building1BaseCPS = 1;
let building1Multiplyer = 1;
const building1Wrapper = document.getElementById('building1');
const building1CostLabel = document.getElementById('building1Cost');
const building1TotalLabel = document.getElementById('building1Total');
const building1 = document.getElementById('building1');
building1.addEventListener('click', ()=>{
    if (cookies >= building1Cost) {
        buybuilding1();
    }
})

function buybuilding1() {
    cookies -= building1Cost;
    building1Total += 1;
    building1Cost = Math.round(building1Cost * 1.4);
    building1CostLabel.innerText = building1Cost;
    building1TotalLabel.innerText = building1Total;
    updateCPS()
}

//update cps
function updateCPS() {
    let tempCPS = 0;
    tempCPS += building1Total * building1BaseCPS * building1Multiplyer;
    tempCPS += building2Total * building2BaseCPS * building2Multiplyer
    cookiesPerSecond = tempCPS;
}

//update greyed out buildings
function updateGreyedOutBuildings() {
    let listOfBuildings = [[building1Wrapper, building1Cost], [building2Wrapper, building2Cost]]
    listOfBuildings.forEach((item)=> {
        if(item[1] <= cookies) {
            item[0].classList.remove('greyedOut');
        } else {
            item[0].classList.add('greyedOut');
        }
    })
}

//game loop
setInterval(updateGame, 100)
function updateGame() {
    updateCookies();
    updateGreyedOutBuildings()
    cookies += cookiesPerSecond * 0.1
}