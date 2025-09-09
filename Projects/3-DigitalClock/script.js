let time_box = document.querySelector('#clock')

setInterval(function () {
    let hours = new Date().getHours() ;
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let time = `${hours} : ${minutes} : ${seconds}`
    console.log(time);
    time_box.innerHTML = time;
}, 1000)
