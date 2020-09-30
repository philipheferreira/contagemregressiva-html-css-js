function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var y = date.getFullYear();   
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    document.getElementById('horas').innerHTML = h;
    document.getElementById('minutos').innerHTML = m;
    document.getElementById('segundos').innerHTML = s;
    document.getElementById('sessao').innerHTML = session;
    document.getElementById("year").innerHTML = y;
    
    setTimeout(showTime, 1000);
    
}

showTime();