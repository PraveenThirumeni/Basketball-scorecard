let homeScoreEl = document.getElementById("home")
let guestScoreEl = document.getElementById("guest")
let homeScore = 0
let guestScore = 0

function addOneHome() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function addTwoHome() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function addThreeHome() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}


function addOneGuest() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function addTwoGuest() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function addThreeGuest() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}


function restartGame() {
    guestScoreEl.textContent = 0
    homeScoreEl.textContent = 0
}