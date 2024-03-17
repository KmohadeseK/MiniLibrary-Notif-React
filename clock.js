// selected html tags
let hrs = document.querySelector('#hrs')
let min = document.querySelector('#min')

// set clock time
setInterval(() => {

    let currentTime = new Date(); //Get the current time

    hrs.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours(); //get hours
    min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes(); //get minute
}, 1000)
