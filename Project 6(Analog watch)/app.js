setInterval(() => {
    date = new Date();
    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();
    console.log(h, m, s);
    hrot = 30 * h + m / 2;
    mrot = 6 * m;
    srot = 6 * s;

    hour.style.transform = `rotate(${hrot}deg)`;
    min.style.transform = `rotate(${mrot}deg)`;
    sec.style.transform = `rotate(${srot}deg)`;
}, 1000);