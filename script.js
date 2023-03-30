
const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", () => {

    if (btn1.innerText === "ON") {
        btn1.innerText = "OFF";
    } else {
        btn1.innerText = "ON";
    }
});

const btn2 = document.getElementById("btn2");

btn2.addEventListener("click", () => {

    if (btn2.innerText === "ON") {
        btn2.innerText = "OFF";
    } else {
        btn2.innerText = "ON";
    }
});
const btn3 = document.getElementById("btn3");

btn3.addEventListener("click", () => {

    if (btn3.innerText === "ON") {
        btn3.innerText = "OFF";
    } else {
        btn3.innerText = "ON";
    }
});


/*
var date = new Date();
var current_date = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
document.getElementById("p1").innerHTML = current_date;


var date = new Date();
var current_time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
document.getElementById("p2").innerHTML = current_time;



// Declaring the variables
let lon;
let lat;
let temperature = document.querySelector(".temp");
// let summary = document.querySelector(".summary");
// let loc = document.querySelector(".location");
// let icon = document.querySelector(".icon");
const kelvin = 273;

window.addEventListener("load", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position);
            lon = position.coords.longitude;
            lat = position.coords.latitude;

            // API ID
            const api = "6d055e39ee237af35ca066f35474e9df";

            // API URL
            const base =
                `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&` +
                `lon=${lon}&appid=6d055e39ee237af35ca066f35474e9df`;

            // Calling the API
            fetch(base)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                    temperature.textContent =
                        Math.floor(data.main.temp - kelvin) + "°C";
                    summary.textContent = data.weather[0].description;
                    loc.textContent = data.name + "," + data.sys.country;
                    let icon1 = data.weather[0].icon;
                    
                });
        });
    }
});
*/


// ------sticky navbar------

window.onscroll = function() {myFunction()};
  
var navlist = document.getElementById("navlist");
var sticky = navlist.offsetTop;

/* Function to stick the nav bar */
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navlist.classList.add("sticky")
    }
    else {
        navlist.classList.remove("sticky");
    }
}



// ------ accuweahter-----------------

"use strict";
function __weatherwidget_init() {
    var a = document.getElementsByClassName("weatherwidget-io")
      , i = [];
    if (0 !== a.length) {
        for (var t = function(t) {
            var e = a[t]
              , o = {};
            o.id = "weatherwidget-io-" + t,
            o.href = e.href,
            o.label_1 = e.getAttribute("data-label_1"),
            o.label_2 = e.getAttribute("data-label_2"),
            o.font = e.getAttribute("data-font"),
            o.icons = e.getAttribute("data-icons"),
            o.mode = e.getAttribute("data-mode"),
            o.days = e.getAttribute("data-days"),
            o.theme = e.getAttribute("data-theme"),
            o.basecolor = e.getAttribute("data-basecolor"),
            o.accent = e.getAttribute("data-accent"),
            o.textcolor = e.getAttribute("data-textcolor"),
            o.textAccent = e.getAttribute("data-textAccent"),
            o.highcolor = e.getAttribute("data-highcolor"),
            o.lowcolor = e.getAttribute("data-lowcolor"),
            o.suncolor = e.getAttribute("data-suncolor"),
            o.mooncolor = e.getAttribute("data-mooncolor"),
            o.cloudcolor = e.getAttribute("data-cloudcolor"),
            o.cloudfill = e.getAttribute("data-cloudfill"),
            o.raincolor = e.getAttribute("data-raincolor"),
            o.snowcolor = e.getAttribute("data-snowcolor"),
            o.windcolor = e.getAttribute("data-windcolor"),
            o.fogcolor = e.getAttribute("data-fogcolor"),
            o.thundercolor = e.getAttribute("data-thundercolor"),
            o.hailcolor = e.getAttribute("data-hailcolor"),
            o.dayscolor = e.getAttribute("data-dayscolor"),
            o.tempcolor = e.getAttribute("data-tempcolor"),
            o.desccolor = e.getAttribute("data-desccolor"),
            o.label1color = e.getAttribute("data-label1color"),
            o.label2color = e.getAttribute("data-label2color"),
            o.shadow = e.getAttribute("data-shadow"),
            o.scale = e.getAttribute("data-scale"),
            (r = document.getElementById(o.id)) && e.removeChild(r),
            i[o.id] = document.createElement("iframe"),
            i[o.id].setAttribute("id", o.id),
            i[o.id].setAttribute("class", "weatherwidget-io-frame"),
            i[o.id].setAttribute("title", "Weather Widget"),
            i[o.id].setAttribute("scrolling", "no"),
            i[o.id].setAttribute("frameBorder", "0"),
            i[o.id].setAttribute("width", "100%"),
            i[o.id].setAttribute("src", "https://weatherwidget.io/w/"),
            i[o.id].style.display = "block",
            i[o.id].style.position = "absolute",
            i[o.id].style.top = "0",
            i[o.id].onload = function() {
                i[o.id].contentWindow.postMessage(o, "https://weatherwidget.io")
            }
            ,
            e.style.display = "block",
            e.style.position = "relative",
            e.style.height = "150px",
            e.style.padding = "0",
            e.style.overflow = "hidden",
            e.style.textAlign = "left",
            e.style.textIndent = "-299rem",
            e.appendChild(i[o.id])
        }, e = 0, o = Math.min(a.length, 10); e < o; e++) {
            var r;
            t(e)
        }
        window.addEventListener("message", function(t) {
            "https://weatherwidget.io" === t.origin && i[t.data.wwId] && i[t.data.wwId].parentNode && (i[t.data.wwId].style.height = t.data.wwHeight + "px",
            i[t.data.wwId].parentNode.style.height = t.data.wwHeight + "px")
        })
    } else
        setTimeout(__weatherwidget_init, 1500)
}
setTimeout(__weatherwidget_init, 100);



// ---------- date and time -------------

document.getElementById("para1").innerHTML = formatAMPM();

function formatAMPM() {
var d = new Date(),
    minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
    hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
    ampm = d.getHours() >= 12 ? 'pm' : 'am',
    months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
return days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' '+hours+':'+minutes+ampm;
}