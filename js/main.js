var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;
menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
};
window.onclick = function (event) {
  if (event.target == menu) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
  }
};

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
  $("#change").text("COPIED!");
}

function copyToClipboard2(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
  $("#change2").text("COPIED!");
}

const tabsBtn = document.querySelectorAll(".tabBtn");
const tabsItems = document.querySelectorAll(".tabEvent");
tabsBtn.forEach((e) => {
  onTabClick(tabsBtn, tabsItems, e);
});

function onTabClick(tabBtns, tabItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    if (!currentBtn.classList.contains("active")) {
      tabBtns.forEach(function (item) {
        item.classList.remove("active");
      });
      tabItems.forEach(function (item) {
        item.classList.remove("active");
      });
      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
}

/*
(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
 
  let offer= "May 31, 2022 18:00:00",
      countDown = new Date(offer).getTime(),
      x = setInterval(function() {    
 
        let now = new Date().getTime(),
            distance = countDown - now;

        let days = Math.floor(distance / (day));
        let hours = Math.floor((distance % (day)) / (hour));
        let minutes = Math.floor((distance % (hour)) / (minute));
        let seconds = Math.floor((distance % (minute)) / second);
 
        
        document.getElementById("days").innerText = days < 10 ? '0' + days : days,
          document.getElementById("hours").innerText = hours < 10 ? '0' + hours : hours,
          document.getElementById("minutes").innerText = minutes < 10 ? '0' + minutes : minutes,
          document.getElementById("seconds").innerText = seconds < 10 ? '0' + seconds : seconds;

      }, 0)
  }());
*/