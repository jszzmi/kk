function czas() {

    const teraz = new Date();
    let minuta = teraz.getMinutes();
    let godzina = teraz.getHours();
    let sekunda = teraz.getSeconds();

    let czas_teraz = " " + ((godzina > 12) ? godzina - 12 : godzina);
    if (czas_teraz == "0") czas_teraz = 12;
    czas_teraz += ((minuta < 10) ? ":0" : ":") + minuta;
    czas_teraz += ((sekunda < 10) ? ":0" : ":") + sekunda;
    czas_teraz += (godzina <= 12) ? "PM" : "AM";
    let elem_zegar = document.getElementById('zegar');
    elem_zegar.value = czas_teraz;
    setTimeout(czas, 1000);


    // (war)? true : false

}

var sec = 0, milsec = 0;

function stoper() {
    if (milsec >= 9) {
        milsec = 0; sec += 1;
    }
    else {
        milsec += 1;
    }
    let elem_stoper = document.getElementById('stoper');
    elem_stoper.value = sec + "." + milsec;
}

function startStoper() {
    setInterval(stoper, 100);
}

czas();

  teraz = new Date();
  dzien = teraz.getDate();
  miesiac = teraz.getMonth() + 1;
  rok = teraz.getFullYear();

document.getElementById('data').innerHTML = dzien + "." + miesiac + "." + rok;
