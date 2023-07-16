setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;
    let a=document.getElementsByClassName("hour");
    let b=document.getElementsByClassName("min");
    let c=document.getElementsByClassName("sec");
    let e=document.getElementsByClassName("clock");
    a[0].style.transform = `rotate(${hrotation}deg)`;
    b[0].style.transform = `rotate(${mrotation}deg)`;
    c[0].style.transform = `rotate(${srotation}deg)`;
    // console.log(e[0][0]);
}, 1000);