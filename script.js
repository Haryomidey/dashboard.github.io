

const mine = document.querySelector(".miner");
const mine_2 = document.querySelector(".miner-2");
const overlay = document.querySelector(".overlay");
const overlay_2 = document.querySelector(".overlay-2");
let mineValue = document.getElementById("mine-value");

let count = Number(localStorage.getItem("mine-value"));
let timeCount = document.querySelector(".count-down");


let day = document.querySelector(".day"),
    month = document.querySelector(".month"),
    hour = document.querySelector(".hour"),
    min = document.querySelector(".min"),
    gmt = document.querySelector(".gmt");

function storeValue() {
    mine.addEventListener("click", (e) => {
        count += 300;
        let timeCountDown = 10;
        overlay.classList.add("overlay-active");
        function startInterval() {
            startTimer = setTimeout(function () {
                newMineValue = mineValue.innerHTML;
                mineValue.innerHTML = count;

                localStorage.setItem("mine-value", mineValue.innerHTML);
                overlay.classList.remove("overlay-active");
                mine.style.display = "none";
                mine_2.style.display = "block";



            }, 10000);
        }
        startInterval();
        let intervalId;
        intervalId = setInterval(function () {
            timeCountDown--;
            timeCount.textContent = timeCountDown;
            mine.setAttribute("disabled", "true");

            if (timeCountDown === 0) {
                clearInterval(intervalId);
            }
        }, 1000);
        mine.setAttribute("disabled", "false");

        let date = new Date();
        let months = date.getMonth();
        let days = date.getDate();
        let hours = date.getHours();
        let mins = date.getMinutes();

        switch (months) {
            case 0:
                months = "January";
                break;
            case 1:
                months = "February";
                break;
            case 2:
                months = "March";
                break;
            case 3:
                months = "April";
                break;
            case 4:
                months = "May";
                break;
            case 5:
                months = "June";
                break;
            case 6:
                months = "July";
                break;
            case 7:
                months = "August";
                break;
            case 8:
                months = "September";
                break;
            case 9:
                months = "October";
                break;
            case 10:
                months = "November";
                break;
            case 11:
                months = "December";
        }

        month.textContent = months;
        day.textContent = days;
        hour.textContent = hours;
        min.textContent = mins;

        if (hours > 22) {
            gmt.textContent = "pm";
        }
        else if (hours < 12) {
            gmt.textContent = "am";
        }

        localStorage.setItem("months", months);
        localStorage.setItem("days", days);
        localStorage.setItem("hours", hours);
        localStorage.setItem("mins", mins);
        localStorage.setItem("gmt", gmt.textContent);

        localStorage.setItem("property", "overlay-1");

    })

    mine_2.addEventListener("click", () => {
        overlay_2.classList.toggle("overlay-active-2");
    })


}

localStorage.getItem("property");

if (localStorage.getItem("property") === "overlay-1") {
    mine.style.display = "none";
    mine_2.style.display = "block";
}


let newMonth = localStorage.getItem("months");
let newDays = localStorage.getItem("days");
let newHours = localStorage.getItem("hours");
let newMins = localStorage.getItem("mins");
let newGmt = localStorage.getItem("gmt");


month.textContent = newMonth;
day.textContent = newDays;
hour.textContent = newHours;
min.textContent = newMins;
gmt.textContent = newGmt;


setInterval(function () {
    localStorage.removeItem("months");
    localStorage.removeItem("days");
    localStorage.removeItem("hours");
    localStorage.removeItem("mins");
    localStorage.removeItem("gmt");

    localStorage.removeItem("property");


}, 1440000);



let newMineValue = localStorage.getItem("mine-value");

if (newMineValue == null) {
    newMineValue = "0";
}

else {
    mineValue.innerHTML = newMineValue;
}

storeValue();


const inputCopy = document.querySelector(".referral-link-copy"),
    buttonCopy = document.querySelector(".button-copy"),
    buttonExit = document.querySelector(".exit"),
    copyContainer = document.querySelector(".copy-container"),
    copied = document.querySelector(".copied");


let copy = (textId) => {
    document.getElementById(textId).select();

    document.execCommand("copy");
    copied.textContent = inputCopy.value;
}

buttonCopy.addEventListener("click", () => {
    copyContainer.classList.add("copy-container-active");
})

buttonExit.addEventListener("click", () => {
    copyContainer.classList.remove("copy-container-active");
})

