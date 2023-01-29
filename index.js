let button_home = document.getElementById("home-score-count")
let button_guest = document.getElementById("guest-score-count")
let count_home = 0
let count_guest = 0

function addOneHome() {
    count_home = count_home + 1
    button_home.textContent = count_home
}


function addTwoHome() {
     count_home = count_home + 2
    button_home.textContent = count_home
}

function addThreeHome() {
    count_home = count_home + 3
    button_home.textContent = count_home
}

function addOneGuest() {
    count_guest = count_guest + 1
    button_guest.textContent = count_guest
}

function addTwoGuest() {
    count_guest = count_guest + 2
    button_guest.textContent = count_guest
}

function addThreeGuest() {
    count_guest = count_guest + 3
    button_guest.textContent = count_guest
}